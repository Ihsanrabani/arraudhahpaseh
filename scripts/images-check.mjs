#!/usr/bin/env node
// Script untuk memeriksa slot gambar mana yang masih menggunakan placeholder

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const imagesFile = readFileSync(resolve(rootDir, "content/images.ts"), "utf-8");
const srcMatches = [...imagesFile.matchAll(/src:\s*"([^"]+)"/g)];

console.log("\n📸 Image Slot Status Report — Ar-Raudhah Paseh");
console.log("=".repeat(60));

let missingCount = 0;
let presentCount = 0;

for (const match of srcMatches) {
  const src = match[1];
  if (src.startsWith("/images/")) {
    const filePath = resolve(rootDir, "public" + src);
    const exists = existsSync(filePath);
    if (exists) {
      console.log(`✅ ${src}`);
      presentCount++;
    } else {
      console.log(`⬜ PLACEHOLDER: ${src}`);
      missingCount++;
    }
  }
}

console.log("=".repeat(60));
console.log(`✅ Present  : ${presentCount}`);
console.log(`⬜ Pending  : ${missingCount}`);
console.log(`📊 Total    : ${presentCount + missingCount}`);

if (missingCount > 0) {
  console.log(`\n⚠️  ${missingCount} slot masih pakai placeholder.`);
  console.log(
    "   Tambahkan foto asli ke /public/images/<kategori>/ sesuai path di atas.",
  );
  console.log("   Jalankan: npm run images:optimize");
} else {
  console.log("\n🎉 Semua slot gambar sudah terisi!");
}
