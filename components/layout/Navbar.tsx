"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";

// Color constants agar tidak tergantung CSS variable resolution
const C = {
  primary: "#0D5C3A",
  primaryLight: "#E8F5EE",
  text: "#1A1A1A",
  textMuted: "#6B7280",
  border: "#E5E7EB",
};

const navItems = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil Yayasan",
    href: "/profil",
    children: [
      { label: "Sejarah & Visi Misi", href: "/profil/sejarah" },
      { label: "Dewan Pengasuh & Pengurus", href: "/profil/pengurus" },
      { label: "Legalitas Lembaga", href: "/profil/legalitas" },
    ],
  },
  {
    label: "Pendidikan",
    href: "/pendidikan",
    children: [
      { label: "Unit & Jenjang Pendidikan", href: "/pendidikan/unit" },
      { label: "Kurikulum & Kitab Kuning", href: "/pendidikan/kurikulum" },
      { label: "Jadwal Harian Santri", href: "/pendidikan/jadwal" },
    ],
  },
  { label: "Sarana & Fasilitas", href: "/fasilitas" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Wakaf & Donasi", href: "/donasi" },
  { label: "Kabar & Galeri", href: "/kabar" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string, exact = false) =>
    exact
      ? pathname === href
      : pathname === href || pathname.startsWith(href + "/");

  const menuItemStyle = (href: string, exact = false) =>
    isActive(href, exact)
      ? { color: C.primary, backgroundColor: C.primaryLight }
      : { color: C.text };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-200 bg-white",
        scrolled ? "shadow-md" : "",
      )}
      style={{ borderBottom: scrolled ? "none" : `1px solid ${C.border}` }}
      role="banner"
    >
      <nav
        className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navigasi Utama"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 rounded focus-visible:outline-none focus-visible:ring-2"
          style={{ outlineColor: C.primary }}
          aria-label={`${siteConfig.name} — Beranda`}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-heading font-bold text-sm shrink-0"
            style={{ backgroundColor: C.primary }}
          >
            AR
          </div>
          <div className="hidden sm:block">
            <p
              className="font-heading font-bold leading-tight text-sm"
              style={{ color: C.primary }}
            >
              Ar-Raudhah Paseh
            </p>
            <p
              className="text-[10px] leading-tight"
              style={{ color: C.textMuted }}
            >
              Yayasan Pesantren
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="hidden lg:flex items-center gap-0.5 flex-nowrap shrink"
          role="list"
        >
          {navItems.map((item) => (
            <li key={item.href} className="relative shrink-0">
              {item.children ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap hover:opacity-90"
                    style={menuItemStyle(item.href)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.href}
                  >
                    {item.label}
                    <svg
                      className={cn(
                        "w-3 h-3 transition-transform shrink-0",
                        openDropdown === item.href && "rotate-180",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === item.href && (
                    <ul
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg py-2 z-50"
                      style={{ border: `1px solid ${C.border}` }}
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm transition-colors whitespace-nowrap"
                            style={
                              pathname === child.href
                                ? {
                                    color: C.primary,
                                    backgroundColor: C.primaryLight,
                                    fontWeight: 500,
                                  }
                                : { color: C.text }
                            }
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors block whitespace-nowrap"
                  style={menuItemStyle(item.href, true)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Button as="link" href="/ppdb" size="sm" variant="secondary">
            Daftar PPDB
          </Button>
          <Button as="link" href="/donasi" size="sm" variant="primary">
            Donasi
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors min-w-11 min-h-11 flex items-center justify-center"
          style={{ color: C.text }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white max-h-[80vh] overflow-y-auto"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <ul className="px-4 py-4 space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                      style={{ color: C.text }}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.href ? null : item.href,
                        )
                      }
                      aria-expanded={openDropdown === item.href}
                    >
                      {item.label}
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.href && "rotate-180",
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.href && (
                      <ul
                        className="mt-1 ml-4 space-y-1 pl-3"
                        style={{ borderLeft: `2px solid ${C.primaryLight}` }}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-3 py-2 text-sm transition-colors"
                              style={{ color: C.textMuted }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                    style={menuItemStyle(item.href, true)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 flex flex-col gap-2">
            <Button
              as="link"
              href="/ppdb"
              variant="secondary"
              className="w-full justify-center"
            >
              Daftar PPDB
            </Button>
            <Button
              as="link"
              href="/donasi"
              variant="primary"
              className="w-full justify-center"
            >
              Donasi
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
