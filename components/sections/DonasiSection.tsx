"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { wakafPrograms } from "@/content/programs";
import { buildDonasiWhatsApp } from "@/lib/whatsapp";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 px-3 py-1 text-xs rounded-md bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors font-medium"
      aria-label={copied ? "Tersalin!" : "Salin nomor rekening"}
    >
      {copied ? "✓ Tersalin" : "Salin"}
    </button>
  );
}

export default function DonasiSection() {
  const [donasiForm, setDonasiForm] = useState({
    nama: "",
    nominal: "",
    program: "",
  });

  const handleConfirm = () => {
    if (!donasiForm.nama || !donasiForm.nominal || !donasiForm.program) return;
    const url = buildDonasiWhatsApp(
      siteConfig.contact.whatsapp.donasi,
      donasiForm,
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="py-16 md:py-20 bg-bg"
      aria-labelledby="donasi-heading"
    >
      <Container>
        <SectionHeading
          label="Wakaf & Donasi"
          title="Bersama Membangun Generasi Qur'ani"
          subtitle="Setiap donasi Anda adalah investasi akhirat yang terus mengalir manfaatnya. Mari bersama mendukung pendidikan Islam di Pesantren Ar-Raudhah Paseh."
          id="donasi-heading"
        />

        {/* Ayat / Quote */}
        <div className="bg-primary-light border-l-4 border-primary rounded-r-xl p-6 mb-10 max-w-2xl mx-auto">
          <p
            className="font-arabic text-xl text-right text-primary-dark mb-2"
            lang="ar"
            dir="rtl"
          >
            مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ
            كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ
          </p>
          <p className="text-sm text-text-muted italic">
            &ldquo;Perumpamaan orang-orang yang menginfakkan hartanya di jalan
            Allah adalah seperti sebutir biji yang menumbuhkan tujuh
            tangkai...&rdquo;
          </p>
          <p className="text-xs text-primary font-medium mt-1">
            QS. Al-Baqarah: 261
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Program Wakaf */}
          <div>
            <h3 className="font-heading font-semibold text-text mb-5 text-lg">
              Program Wakaf & Donasi
            </h3>
            <div className="space-y-4">
              {wakafPrograms.map((prog) => (
                <Card key={prog.id} padding="md">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0" aria-hidden="true">
                      {prog.icon === "Building"
                        ? "🏗️"
                        : prog.icon === "Heart"
                          ? "💚"
                          : "📚"}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-text text-sm">
                          {prog.judul}
                        </h4>
                        {prog.urgent && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700 font-medium">
                            Prioritas
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed">
                        {prog.deskripsi}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Rekening & Konfirmasi */}
          <div>
            <h3 className="font-heading font-semibold text-text mb-5 text-lg">
              Rekening Donasi Resmi
            </h3>
            <div className="space-y-3 mb-6">
              {siteConfig.bankAccounts.map((acct) => (
                <Card key={acct.bank} padding="sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                        {acct.bank}
                      </p>
                      <p className="font-mono font-semibold text-text text-sm mt-0.5">
                        {acct.accountNumber}
                        {!acct.accountNumber.startsWith("[ISI:") && (
                          <CopyButton text={acct.accountNumber} />
                        )}
                      </p>
                      <p className="text-xs text-text-muted">
                        a.n. {acct.accountName}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-md px-2 py-1 mt-2">
                    ⚠️ {acct.note}
                  </p>
                </Card>
              ))}
            </div>

            {/* Konfirmasi Donasi Form */}
            <div className="bg-primary-light rounded-xl p-5">
              <h4 className="font-heading font-semibold text-primary mb-4 text-sm">
                Konfirmasi Donasi via WhatsApp
              </h4>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="donasi-nama"
                    className="block text-xs font-medium text-text mb-1"
                  >
                    Nama Pengirim
                  </label>
                  <input
                    id="donasi-nama"
                    type="text"
                    placeholder="Nama Anda"
                    value={donasiForm.nama}
                    onChange={(e) =>
                      setDonasiForm((f) => ({ ...f, nama: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="donasi-nominal"
                    className="block text-xs font-medium text-text mb-1"
                  >
                    Nominal Donasi
                  </label>
                  <input
                    id="donasi-nominal"
                    type="text"
                    placeholder="Contoh: Rp 500.000"
                    value={donasiForm.nominal}
                    onChange={(e) =>
                      setDonasiForm((f) => ({ ...f, nominal: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="donasi-program"
                    className="block text-xs font-medium text-text mb-1"
                  >
                    Program Donasi
                  </label>
                  <select
                    id="donasi-program"
                    value={donasiForm.program}
                    onChange={(e) =>
                      setDonasiForm((f) => ({ ...f, program: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="">Pilih Program</option>
                    {wakafPrograms.map((p) => (
                      <option key={p.id} value={p.judul}>
                        {p.judul}
                      </option>
                    ))}
                    <option value="Donasi Umum">Donasi Umum</option>
                  </select>
                </div>
                <Button
                  onClick={handleConfirm}
                  disabled={
                    !donasiForm.nama ||
                    !donasiForm.nominal ||
                    !donasiForm.program
                  }
                  variant="primary"
                  className="w-full justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Kirim Konfirmasi via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button as="link" href="/donasi" variant="secondary">
            Lihat Semua Program Wakaf & Donasi
          </Button>
        </div>
      </Container>
    </section>
  );
}
