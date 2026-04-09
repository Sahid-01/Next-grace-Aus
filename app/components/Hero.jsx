"use client";

import Link from "next/link";
import { ICONS } from "./Icon";

const heroImg = "/assets/hero.webp";

const STATS = [
  { value: "50K+", label: "Students Helped" },
  { value: "500+", label: "Education Partners" },
  { value: "19", label: "Years of Experience" },
  { value: "45", label: "Global Branches" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center w-full"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,31,68,0.80)] via-[rgba(10,59,107,0.78)] to-[rgba(21,101,192,0.72)]" />

      {/* Decorative blobs */}
      <div className="absolute top-[10%] -right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[8%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[rgba(21,101,192,0.3)] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-[100px] sm:pt-[110px] md:pt-[120px] pb-16 md:pb-20 w-full relative z-[2]">

        {/* On mobile: single column stacked. On md+: two columns side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">

          {/* ── Left: Text content ── */}
          <div className="text-left">

            {/* Heading — smaller clamp floor on mobile */}
            <h1 className="font-poppins font-extrabold leading-[1.12] text-white mb-5
                           text-[clamp(32px,8vw,64px)] md:text-[clamp(38px,5.5vw,64px)]
                           [text-shadow:0_2px_20px_rgba(0,0,0,0.3)]
                           opacity-0 animate-[slideInLeft_0.8s_ease-out_0.2s_forwards]">
              Study Abroad
              <br />
              <span className="bg-gradient-to-r from-brand-lighter to-brand-lightest bg-clip-text text-transparent inline-block opacity-0 animate-[slideInRight_0.8s_ease-out_0.5s_forwards]">
                with Expert
              </span>
              <br />
              Guidance
            </h1>

            {/* Paragraph — left-aligned, tighter max-width on mobile */}
            <p className="font-poppins leading-[1.75] text-white/90 mb-8
                          text-[15px] sm:text-[16px] md:text-[17px]
                          text-left max-w-[520px]
                          [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]
                          opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              From choosing the right university to landing your visa, Grace
              International has guided 50,000+ students across Australia, UK,
              Canada, USA &amp; New Zealand.
            </p>

            {/* CTA buttons — full width on mobile, auto on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 items-stretch sm:items-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]">
              <Link
                href="/contact"
                className="bg-gradient-to-br from-brand to-brand-light text-white border-none cursor-pointer
                           py-3.5 px-6 sm:px-8 rounded-xl font-poppins font-bold text-[15px]
                           shadow-[0_8px_32px_rgba(21,101,192,0.5)] transition-all duration-250
                           flex items-center justify-center gap-2 no-underline
                           hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(21,101,192,0.6)]"
              >
                Get Started
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                >
                  <path d={ICONS.arrow} />
                </svg>
              </Link>

              <Link
                href="/destinations"
                className="bg-white/10 text-white border border-white/25 cursor-pointer
                           py-3.5 px-6 sm:px-8 rounded-xl font-poppins font-semibold text-[15px]
                           backdrop-blur-[8px] transition-all duration-250 no-underline
                           flex items-center justify-center
                           hover:bg-white/[0.18] hover:border-white/40"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* ── Right: Stats grid ── */}
          {/* On mobile: 2-col compact grid below the text.
              On md+: sits alongside the text as the right column. */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2 md:mt-0">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.07] rounded-2xl py-5 px-4 sm:py-7 sm:px-6
                           border border-white/[0.12] backdrop-blur-[10px]
                           transition-all duration-300
                           hover:bg-white/[0.12] hover:-translate-y-1
                           hover:shadow-[0_8px_24px_rgba(21,101,192,0.3)]
                           opacity-0 animate-[scaleIn_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${1.2 + i * 0.15}s` }}
              >
                <div className="font-poppins font-extrabold text-brand-lighter leading-none
                                text-[28px] sm:text-[32px] md:text-4xl">
                  {s.value}
                </div>
                <div className="font-poppins text-[12px] sm:text-[13px] text-white/60 mt-1.5 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F7F9FC" />
              <stop offset="50%" stopColor="#E3F2FD" />
              <stop offset="100%" stopColor="#BBDEFB" />
            </linearGradient>
          </defs>
          <path
            d="M0 80L60 70C120 60 240 40 360 36.7C480 33 600 47 720 53.3C840 60 960 60 1080 53.3C1200 47 1320 33 1380 26.7L1440 20V80H0Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}