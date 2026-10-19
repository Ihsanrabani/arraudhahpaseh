#!/usr/bin/env node
// Konversi foto mentah JPG/PNG dari /assets-raw/ → WebP ke /public/images/

import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { resolve, extname, basename, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const assetsRawDir = resolve(rootDir, "assets-raw");
const publicImagesDir = resolve(rootDir, "public/images");

const WIDTHS = [360, 640, 828, 1200, 1920];
const SUPPORTED = [".jpg", ".jpeg", ".png", ".webp"];

async function run() {
  if (!existsSync(assetsRawDir)) {
    console.log("\n📁 Folder /assets-raw/ tidak ditemukan.");
    console.log(
      "   Buat folder /assets-raw/ dan masukkan foto (JPG/PNG) di sub-foldernya.",
    );
    console.log("   Contoh struktur:");
    console.log("     assets-raw/hero/kegiatan-santri-01.jpg");
    console.log("     assets-raw/pengasuh/kiai-utama-01.jpg");
    console.log("     assets-raw/fasilitas/masjid-01.jpg");
    return;
  }

  let sharp;
  try {
    const mod = await import("sharp");
    sharp = mod.default;
  } catch {
    console.error("❌ sharp tidak terinstall. Jalankan: npm install sharp");
    return;
  }

  console.log("\n🔄 Memproses gambar dari /assets-raw/ ...\n");
  let processedCount = 0;

  async function processDir(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        await processDir(fullPath);
      } else {
        const ext = extname(entry.name).toLowerCase();
        if (!SUPPORTED.includes(ext)) continue;

        const rel = relative(assetsRawDir, fullPath);
        const parts = rel.split(/[/\\]/);
        const category = parts.length > 1 ? parts[0] : "galeri";
        const baseName = basename(entry.name, ext);
        const outputDir = resolve(publicImagesDir, category);

        await mkdir(outputDir, { recursive: true });

        // Primary WebP
        const primary = resolve(outputDir, `${baseName}.webp`);
        await sharp(fullPath).webp({ quality: 85 }).toFile(primary);
        console.log(`✅ ${category}/${baseName}.webp`);

        // Responsive sizes
        for (const w of WIDTHS) {
          const out = resolve(outputDir, `${baseName}-${w}w.webp`);
          try {
            await sharp(fullPath)
              .resize(w, null, { withoutEnlargement: true })
              .webp({ quality: 80 })
              .toFile(out);
          } catch {
            // smaller than target width, skip
          }
        }
        processedCount++;
      }
    }
  }

  await processDir(assetsRawDir);
  console.log(
    `\n✨ Selesai! ${processedCount} gambar dioptimasi ke /public/images/`,
  );
  console.log("   Jalankan: npm run images:check untuk verifikasi.\n");
}

run().catch(console.error);
