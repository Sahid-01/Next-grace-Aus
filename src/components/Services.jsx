import { useState, useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

const SERVICES = [
  {
    icon: "mortarboard",
    title: "University Admission",
    desc: "Expert guidance for securing admission into top universities worldwide with personalised counselling.",
  },
  {
    icon: "visa",
    title: "Visa Assistance",
    desc: "Comprehensive visa support with high success rates across student, work, and migration visas.",
  },
  {
    icon: "coaching",
    title: "IELTS / PTE Coaching",
    desc: "Intensive coaching programs designed to maximise your English proficiency test scores.",
  },
  {
    icon: "career",
    title: "Career Counselling",
    desc: "Strategic career planning aligned with your goals, course choices, and destination country.",
  },
  {
    icon: "scholarship",
    title: "Scholarship Guidance",
    desc: "Identify and apply for scholarships that significantly reduce your study-abroad costs.",
  },
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-surface via-surface-blue to-surface-bluer py-[100px] px-6 w-full"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-extrabold text-heading m-0 leading-[1.15]">
              Comprehensive Study Abroad Services
            </h2>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-[60px]">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SERVICES.map((s, i) => (
              <div key={i} className="min-w-full px-3 box-border">
                <div className="bg-white rounded-[20px] py-12 px-10 shadow-[0_4px_30px_rgba(10,31,68,0.1)] border border-surface-border h-full flex flex-col items-center max-w-[600px] mx-auto">
                  <div className="w-[72px] h-[72px] rounded-[18px] bg-gradient-to-br from-surface-blue to-surface-bluer flex items-center justify-center mb-7">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1565C0"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={ICONS[s.icon]} />
                    </svg>
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-heading mb-4 text-center">
                    {s.title}
                  </h3>
                  <p className="font-poppins text-base text-body leading-[1.8] m-0 text-center">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-2 border-brand rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(21,101,192,0.2)] transition-all duration-300 z-10 hover:bg-brand group"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1565C0"
              strokeWidth={2.5}
              strokeLinecap="round"
              className="transition-colors duration-300 group-hover:stroke-white"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-2 border-brand rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(21,101,192,0.2)] transition-all duration-300 z-10 hover:bg-brand group"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1565C0"
              strokeWidth={2.5}
              strokeLinecap="round"
              className="transition-colors duration-300 group-hover:stroke-white"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2.5 mt-10">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 rounded-[5px] border-none cursor-pointer transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-brand" : "w-2.5 bg-surface-bluer"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
