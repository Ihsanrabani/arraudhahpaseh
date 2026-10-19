import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { programs } from "@/content/programs";
import { cn } from "@/lib/utils";
import Link from "next/link";

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
};

const iconMap: Record<string, string> = {
  BookOpen: "📖",
  Scroll: "📜",
  GraduationCap: "🎓",
  Heart: "💚",
};

export default function ProgramsSection() {
  return (
    <section
      className="py-16 md:py-20 bg-bg"
      aria-labelledby="programs-heading"
    >
      <Container>
        <SectionHeading
          label="Program Unggulan"
          title="Pendidikan Holistik & Islami"
          subtitle="Program kami dirancang untuk membentuk santri yang hafal Al-Qur'an, menguasai ilmu agama, berprestasi akademik, dan berakhlak mulia."
          id="programs-heading"
        />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {programs.map((program) => (
            <li key={program.id}>
              <Card hover className="h-full flex flex-col">
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border",
                    colorMap[program.color] ??
                      "bg-gray-50 text-gray-700 border-gray-200",
                  )}
                  aria-hidden="true"
                >
                  {iconMap[program.icon] ?? "📚"}
                </div>
                <h3 className="font-heading font-semibold text-text mb-2 text-base">
                  {program.nama}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {program.deskripsi}
                </p>
                <Link
                  href={`/pendidikan/unit#${program.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Selengkapnya
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Button as="link" href="/pendidikan/unit" variant="secondary">
            Lihat Semua Program Pendidikan
          </Button>
        </div>
      </Container>
    </section>
  );
}
