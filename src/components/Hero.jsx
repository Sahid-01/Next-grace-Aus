import { Link } from "react-router-dom";
import { ICONS } from "../components/Icon";

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
        style={{ backgroundImage: "url('/src/assets/hero.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,31,68,0.75)] via-[rgba(10,59,107,0.75)] to-[rgba(21,101,192,0.7)]" />

      {/* Decorative blobs */}
      <div className="absolute top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[8%] w-[400px] h-[400px] rounded-full bg-[rgba(21,101,192,0.3)] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-20 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center w-full relative z-[2]">
        {/* Left */}
        <div>
          <h1 className="font-poppins text-[clamp(38px,5.5vw,64px)] font-extrabold leading-[1.12] text-white max-w-full mb-6 animate-[fadeUp_0.9s_ease_0.1s_both] [text-shadow:0_2px_20px_rgba(0,0,0,0.3)]">
            Study Abroad
            <br />
            <span className="bg-gradient-to-r from-brand-lighter to-brand-lightest bg-clip-text text-transparent max-w-full">
              with Expert
            </span>
            <br />
            Guidance
          </h1>

          <p className="font-poppins text-[17px] leading-[1.7] text-white/95 mb-10 max-w-full animate-[fadeUp_1s_ease_0.2s_both] [text-shadow:0_1px_10px_rgba(0,0,0,0.3)] text-center">
            From choosing the right university to landing your visa Grace
            International has guided 50,000+ students across Australia, UK,
            Canada, USA & New Zealand.
          </p>

          <div className="flex gap-3.5 flex-wrap animate-[fadeUp_1s_ease_0.3s_both] items-center justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-br from-brand to-brand-light text-white border-none cursor-pointer py-3.5 px-8 rounded-xl font-poppins font-bold text-[15px] shadow-[0_8px_32px_rgba(21,101,192,0.5)] transition-all duration-250 flex items-center gap-2 no-underline hover:-translate-y-0.5"
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
              to="/destinations"
              className="bg-white/10 text-white border border-white/25 cursor-pointer py-3.5 px-8 rounded-xl font-poppins font-semibold text-[15px] backdrop-blur-[8px] transition-all duration-250 no-underline flex items-center hover:bg-white/[0.18]"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Right — stats card */}
        <div className="grid grid-cols-2 gap-4 animate-[fadeUp_1s_ease_0.4s_both]">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-white/[0.07] rounded-2xl py-7 px-6 border border-white/[0.12] backdrop-blur-[10px] transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1"
            >
              <div className="font-poppins font-extrabold text-4xl text-brand-lighter leading-none">
                {s.value}
              </div>
              <div className="font-poppins text-[13px] text-white/60 mt-1.5 font-medium">
                {s.label}
              </div>
            </div>
          ))}
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
