import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p
            className="text-8xl font-heading font-bold text-primary-light mb-2"
            aria-hidden="true"
          >
            404
          </p>
          <h1 className="text-2xl font-heading font-bold text-text mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-text-muted mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            Silakan kembali ke beranda atau gunakan menu navigasi di atas.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button as="link" href="/" variant="primary">
              Kembali ke Beranda
            </Button>
            <Button as="link" href="/kontak" variant="secondary">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
