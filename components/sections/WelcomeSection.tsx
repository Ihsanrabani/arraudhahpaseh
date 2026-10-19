import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AppImage from "@/components/ui/AppImage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WelcomeSection() {
  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="sambutan-heading"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-64 sm:w-72 md:w-full max-w-xs">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-accent/30 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-primary-light">
                <AppImage
                  slot="pengasuhUtama"
                  fill
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary-dark px-4 py-2 rounded-xl font-heading font-bold text-sm shadow-md">
                Pengasuh Pesantren
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              label="Sambutan Pimpinan"
              title="Pesan dari Pengasuh"
              center={false}
            />
            <p className="text-text-muted mb-4 text-base leading-relaxed">
              Bismillahirrahmanirrahim. Assalamu&apos;alaikum Warahmatullahi
              Wabarakatuh.
            </p>
            <blockquote className="border-l-4 border-accent pl-5 my-6 italic text-text-muted leading-relaxed">
              &ldquo;[ISI: Kutipan sambutan dari Pengasuh/Kiai — tuliskan pesan
              beliau tentang visi pesantren, harapan kepada santri dan wali
              santri, serta ajakan untuk bergabung]&rdquo;
            </blockquote>
            <p className="font-heading font-semibold text-primary">
              [ISI: Nama Pengasuh Utama / Kiai]
            </p>
            <p className="text-sm text-text-muted">
              Pengasuh Yayasan Pesantren Ar-Raudhah Paseh
            </p>
            <div className="mt-6">
              <Button as="link" href="/profil/sejarah" variant="secondary">
                Baca Profil Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
