"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-6xl mb-4" aria-hidden="true">
            ⚠️
          </p>
          <h1 className="text-2xl font-heading font-bold text-text mb-4">
            Terjadi Kesalahan
          </h1>
          <p className="text-text-muted mb-8 leading-relaxed">
            Maaf, terjadi kesalahan saat memuat halaman ini. Silakan coba lagi
            atau hubungi kami jika masalah berlanjut.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={reset} variant="primary">
              Coba Lagi
            </Button>
            <Button as="link" href="/" variant="secondary">
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
