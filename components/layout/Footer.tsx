import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import Container from "@/components/ui/Container";

const footerLinks = [
  {
    heading: "Profil",
    links: [
      { label: "Sejarah & Visi Misi", href: "/profil/sejarah" },
      { label: "Dewan Pengurus", href: "/profil/pengurus" },
      { label: "Legalitas", href: "/profil/legalitas" },
    ],
  },
  {
    heading: "Program",
    links: [
      { label: "Unit Pendidikan", href: "/pendidikan/unit" },
      { label: "Kurikulum", href: "/pendidikan/kurikulum" },
      { label: "Jadwal Harian", href: "/pendidikan/jadwal" },
      { label: "Sarana & Fasilitas", href: "/fasilitas" },
    ],
  },
  {
    heading: "Layanan",
    links: [
      { label: "PPDB", href: "/ppdb" },
      { label: "Wakaf & Donasi", href: "/donasi" },
      { label: "Kabar & Galeri", href: "/kabar" },
      { label: "Kontak & Lokasi", href: "/kontak" },
    ],
  },
];

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  const year = COPYRIGHT_YEAR;

  return (
    <footer
      style={{ backgroundColor: "#1A4329", color: "rgba(255,255,255,0.85)" }}
      aria-label="Footer"
    >
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                style={{ backgroundColor: "#D4AF37", color: "#1A4329" }}
                className="w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-sm shrink-0"
              >
                AR
              </div>
              <div>
                <p className="font-heading font-bold leading-tight text-sm text-white">
                  Ar-Raudhah Paseh
                </p>
                <p
                  className="text-[10px] leading-tight"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Yayasan Pesantren
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Lembaga Pendidikan Islam &amp; Yayasan Sosial Keagamaan. Mencetak
              generasi Qur&apos;ani, berakhlak mulia, dan mandiri.
            </p>
            <address
              className="not-italic text-sm space-y-1"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <p>{siteConfig.contact.address.full}</p>
              <p className="mt-2">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-yellow-300 transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email.info}`}
                  className="hover:text-yellow-300 transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {siteConfig.contact.email.info}
                </a>
              </p>
            </address>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-yellow-300 transition-colors"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + copyright */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex items-center gap-4">
            {!siteConfig.social.instagram.startsWith("[ISI:") && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
            {!siteConfig.social.facebook.startsWith("[ISI:") && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}
            {!siteConfig.social.youtube.startsWith("[ISI:") && (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            )}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 text-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <span>
              © {year} {siteConfig.name}. Hak Cipta Dilindungi.
            </span>
            <span className="hidden sm:block">·</span>
            <Link
              href="/kebijakan-privasi"
              className="hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
