import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AppImage from "@/components/ui/AppImage";

const gallerySlots = [
  "kegiatan1",
  "kegiatan2",
  "kegiatan3",
  "kegiatan4",
  "kegiatan5",
  "kegiatan6",
] as const;

export default function GallerySection() {
  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <SectionHeading
          label="Kehidupan Santri"
          title="Sekilas Aktivitas Pondok"
          subtitle="Potret keseharian santri dalam menuntut ilmu, beribadah, dan mengembangkan diri di lingkungan yang kondusif."
          id="gallery-heading"
        />
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          role="list"
          aria-label="Galeri kehidupan santri"
        >
          {gallerySlots.map((slot) => (
            <li
              key={slot}
              className="overflow-hidden rounded-xl aspect-[4/3] relative bg-primary-light"
            >
              <AppImage
                slot={slot}
                fill
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Button as="link" href="/kabar" variant="secondary">
            Lihat Dokumentasi Lengkap
          </Button>
        </div>
      </Container>
    </section>
  );
}
