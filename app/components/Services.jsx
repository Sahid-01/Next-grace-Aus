"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);

  // Breakpoint detection
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setIsTablet(w >= 640 && w < 1024);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Cards visible per breakpoint
  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = SERVICES.length - visibleCount;

  // Reset index if it goes out of bounds on resize
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goToSlide = (i) => setCurrentIndex(i);

  // Width of each card as a percentage of the track
  const cardWidthPct = 100 / visibleCount;

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
        padding: isMobile ? "60px 20px" : "100px 24px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <div
          className={`transition-all duration-[800ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            textAlign: "center",
            marginBottom: isMobile ? 36 : 64,
            transitionDelay: "200ms",
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile
                ? "clamp(20px, 6vw, 28px)"
                : "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "#0A1F44",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Comprehensive Study Abroad Services
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-[800ms] ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            position: "relative",
            // Side padding to make room for prev/next arrows
            padding: isMobile ? "0 44px" : "0 60px",
            transitionDelay: "400ms",
            overflow: "hidden",
          }}
        >
          {/* Track */}
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * cardWidthPct}%)`,
            }}
          >
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${cardWidthPct}%`,
                  boxSizing: "border-box",
                  padding: isMobile ? "0 6px" : "0 12px",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: isMobile ? "32px 24px" : "48px 40px",
                    boxShadow: "0 4px 30px rgba(10,31,68,0.1)",
                    border: "1px solid #EBF0FB",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: isMobile ? 58 : 72,
                      height: isMobile ? 58 : 72,
                      borderRadius: 18,
                      background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: isMobile ? 20 : 28,
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width={isMobile ? 26 : 32}
                      height={isMobile ? 26 : 32}
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

                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? 18 : 22,
                      color: "#0A1F44",
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: isMobile ? 13 : 15,
                      color: "#64748B",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: isMobile ? 36 : 48,
              height: isMobile ? 36 : 48,
              borderRadius: "50%",
              background: currentIndex === 0 ? "#EBF0FB" : "#fff",
              border: "2px solid",
              borderColor: currentIndex === 0 ? "#EBF0FB" : "#1565C0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(21,101,192,0.2)",
              transition: "all 0.3s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) e.currentTarget.style.background = "#1565C0";
            }}
            onMouseLeave={(e) => {
              if (currentIndex !== 0) e.currentTarget.style.background = "#fff";
            }}
          >
            <svg
              width={isMobile ? 16 : 20}
              height={isMobile ? 16 : 20}
              viewBox="0 0 24 24"
              fill="none"
              stroke={currentIndex === 0 ? "#94A3B8" : "#1565C0"}
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{ transition: "stroke 0.3s" }}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: isMobile ? 36 : 48,
              height: isMobile ? 36 : 48,
              borderRadius: "50%",
              background: currentIndex === maxIndex ? "#EBF0FB" : "#fff",
              border: "2px solid",
              borderColor: currentIndex === maxIndex ? "#EBF0FB" : "#1565C0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(21,101,192,0.2)",
              transition: "all 0.3s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== maxIndex) e.currentTarget.style.background = "#1565C0";
            }}
            onMouseLeave={(e) => {
              if (currentIndex !== maxIndex) e.currentTarget.style.background = "#fff";
            }}
          >
            <svg
              width={isMobile ? 16 : 20}
              height={isMobile ? 16 : 20}
              viewBox="0 0 24 24"
              fill="none"
              stroke={currentIndex === maxIndex ? "#94A3B8" : "#1565C0"}
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{ transition: "stroke 0.3s" }}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: isMobile ? 28 : 40,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                height: 10,
                width: currentIndex === i ? 32 : 10,
                borderRadius: 5,
                border: "none",
                cursor: "pointer",
                background: currentIndex === i ? "#1565C0" : "#BBDEFB",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}