"use client";

import { useState } from "react";
import { useActionState } from "react";
import Button from "@/components/ui/Button";
import { submitPPDB } from "@/app/ppdb/actions";
import { siteConfig } from "@/content/site.config";
import { buildPPDBWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

interface FormData {
  namaLengkap: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  asalSekolah: string;
  namaAyah: string;
  namaIbu: string;
  noWA: string;
  alamat: string;
  gelombang: string;
  honeypot: string;
}

const initialForm: FormData = {
  namaLengkap: "",
  tempatLahir: "",
  tanggalLahir: "",
  jenisKelamin: "",
  asalSekolah: "",
  namaAyah: "",
  namaIbu: "",
  noWA: "",
  alamat: "",
  gelombang: "1",
  honeypot: "",
};

const initialState = {
  success: false,
  errors: {} as Record<string, string>,
  message: "",
};

export default function PPDBForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [state, formAction, isPending] = useActionState(
    submitPPDB,
    initialState,
  );
  const waUrl = buildPPDBWhatsApp(siteConfig.contact.whatsapp.ppdb);

  const update =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const step1Valid =
    form.namaLengkap &&
    form.tempatLahir &&
    form.tanggalLahir &&
    form.jenisKelamin;
  const step2Valid = form.namaAyah && form.namaIbu && form.noWA;

  if (state.success) {
    return (
      <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-200">
        <div className="text-5xl mb-4" aria-hidden="true">
          ✅
        </div>
        <h3 className="font-heading font-bold text-green-800 text-xl mb-2">
          Formulir Terkirim!
        </h3>
        <p className="text-green-700 text-sm mb-6">
          {state.message ||
            "Terima kasih. Panitia PPDB akan segera menghubungi Anda."}
        </p>
        <Button
          as="a"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          Konfirmasi via WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div
        className="flex items-center justify-between mb-8"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={step}
        aria-label={`Langkah ${step} dari 3`}
      >
        {([1, 2, 3] as Step[]).map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                step > s
                  ? "bg-green-500 text-white"
                  : step === s
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500",
              )}
            >
              {step > s ? "✓" : s}
            </div>
            {s < 3 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2",
                  step > s ? "bg-green-500" : "bg-gray-200",
                )}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-text-muted -mt-6 mb-6">
        <span>Data Santri</span>
        <span>Data Orang Tua</span>
        <span>Konfirmasi</span>
      </div>

      <form action={formAction}>
        {/* Honeypot anti-spam */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={update("honeypot")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Step 1: Data Santri */}
        {step === 1 && (
          <fieldset className="space-y-4">
            <legend className="font-heading font-semibold text-text mb-4 block">
              Data Calon Santri
            </legend>
            <div>
              <label
                htmlFor="namaLengkap"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Nama Lengkap{" "}
                <span className="text-red-500" aria-label="wajib diisi">
                  *
                </span>
              </label>
              <input
                id="namaLengkap"
                name="namaLengkap"
                type="text"
                required
                value={form.namaLengkap}
                onChange={update("namaLengkap")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Sesuai akta kelahiran"
              />
              {state.errors?.namaLengkap && (
                <p className="text-red-600 text-xs mt-1">
                  {state.errors.namaLengkap}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="tempatLahir"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Tempat Lahir{" "}
                  <span className="text-red-500" aria-label="wajib">
                    *
                  </span>
                </label>
                <input
                  id="tempatLahir"
                  name="tempatLahir"
                  type="text"
                  required
                  value={form.tempatLahir}
                  onChange={update("tempatLahir")}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  placeholder="Kota"
                />
              </div>
              <div>
                <label
                  htmlFor="tanggalLahir"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Tanggal Lahir{" "}
                  <span className="text-red-500" aria-label="wajib">
                    *
                  </span>
                </label>
                <input
                  id="tanggalLahir"
                  name="tanggalLahir"
                  type="date"
                  required
                  value={form.tanggalLahir}
                  onChange={update("tanggalLahir")}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="jenisKelamin"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Jenis Kelamin{" "}
                <span className="text-red-500" aria-label="wajib">
                  *
                </span>
              </label>
              <select
                id="jenisKelamin"
                name="jenisKelamin"
                required
                value={form.jenisKelamin}
                onChange={update("jenisKelamin")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="putra">Putra</option>
                <option value="putri">Putri</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="asalSekolah"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Asal Sekolah
              </label>
              <input
                id="asalSekolah"
                name="asalSekolah"
                type="text"
                value={form.asalSekolah}
                onChange={update("asalSekolah")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Nama sekolah asal"
              />
            </div>
            <div>
              <label
                htmlFor="gelombang"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Gelombang Pendaftaran
              </label>
              <select
                id="gelombang"
                name="gelombang"
                value={form.gelombang}
                onChange={update("gelombang")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="1">Gelombang I</option>
                <option value="2">Gelombang II</option>
              </select>
            </div>
          </fieldset>
        )}

        {/* Step 2: Data Orang Tua */}
        {step === 2 && (
          <fieldset className="space-y-4">
            <legend className="font-heading font-semibold text-text mb-4 block">
              Data Orang Tua / Wali
            </legend>
            <div>
              <label
                htmlFor="namaAyah"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Nama Ayah{" "}
                <span className="text-red-500" aria-label="wajib">
                  *
                </span>
              </label>
              <input
                id="namaAyah"
                name="namaAyah"
                type="text"
                required
                value={form.namaAyah}
                onChange={update("namaAyah")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Nama lengkap ayah"
              />
            </div>
            <div>
              <label
                htmlFor="namaIbu"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Nama Ibu{" "}
                <span className="text-red-500" aria-label="wajib">
                  *
                </span>
              </label>
              <input
                id="namaIbu"
                name="namaIbu"
                type="text"
                required
                value={form.namaIbu}
                onChange={update("namaIbu")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Nama lengkap ibu"
              />
            </div>
            <div>
              <label
                htmlFor="noWA"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Nomor WhatsApp Orang Tua{" "}
                <span className="text-red-500" aria-label="wajib">
                  *
                </span>
              </label>
              <input
                id="noWA"
                name="noWA"
                type="tel"
                required
                value={form.noWA}
                onChange={update("noWA")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="08xxxxxxxxxx"
              />
              {state.errors?.noWA && (
                <p className="text-red-600 text-xs mt-1">{state.errors.noWA}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Alamat Lengkap
              </label>
              <textarea
                id="alamat"
                name="alamat"
                rows={3}
                value={form.alamat}
                onChange={update("alamat")}
                className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                placeholder="Jalan, RT/RW, Desa, Kecamatan, Kabupaten/Kota"
              />
            </div>
          </fieldset>
        )}

        {/* Step 3: Ringkasan */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-text mb-4">
              Ringkasan Pendaftaran
            </h3>
            <div className="bg-bg rounded-xl border border-border p-5 space-y-2 text-sm">
              {[
                ["Nama Santri", form.namaLengkap],
                [
                  "Tempat, Tgl Lahir",
                  `${form.tempatLahir}, ${form.tanggalLahir}`,
                ],
                [
                  "Jenis Kelamin",
                  form.jenisKelamin === "putra" ? "Putra" : "Putri",
                ],
                ["Asal Sekolah", form.asalSekolah || "-"],
                ["Nama Ayah", form.namaAyah],
                ["Nama Ibu", form.namaIbu],
                ["No. WA", form.noWA],
                ["Gelombang", `Gelombang ${form.gelombang}`],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <dt className="text-text-muted w-36 shrink-0">
                    {label}
                  </dt>
                  <dd className="font-medium text-text">{value}</dd>
                </div>
              ))}
            </div>
            {state.message && !state.success && (
              <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3 border border-red-200">
                {state.message}
              </p>
            )}
            {/* Hidden fields for server action */}
            {Object.entries(form).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-6">
          {step > 1 && (
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep((s) => (s - 1) as Step)}
              className="flex-1"
            >
              ← Kembali
            </Button>
          )}
          {step < 3 ? (
            <Button
              type="button"
              variant="primary"
              className="flex-1"
              onClick={() => setStep((s) => (s + 1) as Step)}
              disabled={step === 1 ? !step1Valid : !step2Valid}
            >
              Lanjut →
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={isPending}
            >
              {isPending ? "Mengirim..." : "Kirim Pendaftaran"}
            </Button>
          )}
        </div>

        <p className="text-center text-xs text-text-muted mt-4">
          Atau{" "}
          <a
            href={buildPPDBWhatsApp(siteConfig.contact.whatsapp.ppdb)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            daftar langsung via WhatsApp
          </a>
        </p>
      </form>
    </div>
  );
}
