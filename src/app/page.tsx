import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import StatsSection from "@/components/sections/StatsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PPDBBannerSection from "@/components/sections/PPDBBannerSection";
import DonasiSection from "@/components/sections/DonasiSection";
import GallerySection from "@/components/sections/GallerySection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export const metadata: Metadata = genMeta();

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <ProgramsSection />
      <PPDBBannerSection />
      <DonasiSection />
      <GallerySection />
      <BlogPreviewSection />
    </>
  );
}
