"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site.config";
import Container from "@/components/ui/Container";

const stats = [
  {
    label: "Santri Aktif",
    value: siteConfig.stats.activeSantri,
    suffix: "+",
    icon: "👨‍🎓",
  },
  {
    label: "Asatidz & Guru",
    value: siteConfig.stats.teachers,
    suffix: "+",
    icon: "🧑‍🏫",
  },
  {
    label: "Angkatan Alumni",
    value: siteConfig.stats.alumni,
    suffix: "+",
    icon: "🎓",
  },
  {
    label: "Fasilitas",
    value: siteConfig.stats.facilities,
    suffix: "",
    icon: "🏫",
  },
];

function isNumeric(v: string) {
  return /^\d+$/.test(v.replace(/[.,]/g, ""));
}

function CountUp({
  target,
  duration = 1800,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;
    ref.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        if (ref.current) clearInterval(ref.current);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [target, duration]);

  return <>{count.toLocaleString("id-ID")}</>;
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Respect prefers-reduced-motion
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReduced(mq.matches);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary py-12 md:py-16 text-white"
      aria-label="Statistik pesantren"
    >
      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
          {stats.map((stat) => {
            const numeric = isNumeric(stat.value);
            const numVal = numeric
              ? parseInt(stat.value.replace(/[.,]/g, ""), 10)
              : 0;

            return (
              <li
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <span className="text-3xl" aria-hidden="true">
                  {stat.icon}
                </span>
                <p
                  className="text-3xl sm:text-4xl font-heading font-bold text-white"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  {numeric && inView && !prefersReduced ? (
                    <>
                      <CountUp target={numVal} />
                      {stat.suffix}
                    </>
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </p>
                <p className="text-sm text-white/70 font-medium">
                  {stat.label}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
