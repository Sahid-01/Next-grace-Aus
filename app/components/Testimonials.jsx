"use client";

import { useState, useEffect, useRef } from "react";
import { ICONS } from "../components/Icon";

const TESTIMONIALS = [
  {
    name: "Dibika Darshandari",
    course: "Master of International Nursing — UOW",
    initials: "DD",
    text: "Grace International cleared my dilemma, taking full responsibility from briefing me on course details to selecting the best university and city. Truly life-changing guidance.",
  },
  {
    name: "Nisha Baniya",
    course: "MBA — CSU",
    initials: "NB",
    text: "I'm glad I chose Grace International. Their support, administration, and welcoming office environment are truly impressive. Everything was completed right on time.",
  },
  {
    name: "Sanjeet Parajuli",
    course: "Bachelor of Business — Torrens University",
    initials: "SP",
    text: "I feel fortunate to be associated with Grace International. Their support made my processing far more efficient than expected. I wholeheartedly recommend them.",
  },
  {
    name: "Priya Sharma",
    course: "Master of Engineering — RMIT",
    initials: "PS",
    text: "The team at Grace International was incredibly helpful throughout my entire application process. They guided me step by step and made everything stress-free.",
  },
  {
    name: "Rajesh Thapa",
    course: "Bachelor of IT — La Trobe University",
    initials: "RT",
    text: "Outstanding service! Grace International helped me secure admission and my student visa without any hassle. I highly recommend them to anyone planning to study abroad.",
  },
  {
    name: "Anita Gurung",
    course: "Master of Accounting — Macquarie University",
    initials: "AG",
    text: "From the first consultation to my visa approval, Grace International was with me every step of the way. Professional, caring, and highly knowledgeable team.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef(null);
  const total = TESTIMONIALS.length;

  // Responsive: update visible card count based on window width
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset index when visibleCount changes to avoid out-of-bound slice
  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const maxIndex = total - visibleCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const visible = TESTIMONIALS.slice(currentIndex, currentIndex + visibleCount);

  const gridCols =
    visibleCount === 1
      ? "1fr"
      : visibleCount === 2
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";

  return (
    <section
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
        padding: visibleCount === 1 ? "60px 20px" : "100px 24px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          className={`transition-all duration-[800ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            textAlign: "center",
            marginBottom: visibleCount === 1 ? 40 : 64,
            transitionDelay: "200ms",
          }}
        >
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#1565C0",
              display: "block",
              marginBottom: 12,
            }}
          >
            Student Stories
          </span>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize:
                visibleCount === 1
                  ? "clamp(24px, 6vw, 32px)"
                  : "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#0A1F44",
              margin: 0,
            }}
          >
            Clients are Talking
          </h2>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              gap: visibleCount === 1 ? 0 : 24,
              transition: "all 0.4s ease",
            }}
          >
            {visible.map((t, i) => (
              <div
                key={currentIndex + i}
                className={`transition-all duration-[600ms] ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: visibleCount === 1 ? "28px 24px" : "36px 32px",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  border: "1px solid #EBF0FB",
                  display: "flex",
                  flexDirection: "column",
                  transitionDelay: `${400 + i * 150}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(21,101,192,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 20px rgba(10,31,68,0.06)";
                }}
              >
                {/* Quote icon */}
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="#BBDEFB"
                  stroke="none"
                  style={{ marginBottom: 16 }}
                >
                  <path d={ICONS.quote} />
                </svg>

                {/* Stars */}
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="#FFC107"
                      stroke="none"
                    >
                      <path d={ICONS.star} />
                    </svg>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: visibleCount === 1 ? 14 : 15,
                    lineHeight: 1.7,
                    color: "#475569",
                    marginBottom: 24,
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  "{t.text}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      minWidth: 44,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: visibleCount === 1 ? 14 : 15,
                        color: "#0A1F44",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        color: "#94A3B8",
                      }}
                    >
                      {t.course}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div
            className={`transition-all duration-[800ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              marginTop: 40,
              transitionDelay: "800ms",
            }}
          >
            {/* Prev */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: currentIndex === 0 ? "#EBF0FB" : "#fff",
                border: "2px solid",
                borderColor: currentIndex === 0 ? "#EBF0FB" : "#1565C0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(21,101,192,0.15)",
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== 0)
                  e.currentTarget.style.background = "#1565C0";
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== 0)
                  e.currentTarget.style.background = "#fff";
              }}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke={currentIndex === 0 ? "#94A3B8" : "#1565C0"}
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8 }}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: currentIndex === i ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: currentIndex === i ? "#1565C0" : "#BBDEFB",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: currentIndex === maxIndex ? "#EBF0FB" : "#fff",
                border: "2px solid",
                borderColor:
                  currentIndex === maxIndex ? "#EBF0FB" : "#1565C0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(21,101,192,0.15)",
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== maxIndex)
                  e.currentTarget.style.background = "#1565C0";
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== maxIndex)
                  e.currentTarget.style.background = "#fff";
              }}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke={currentIndex === maxIndex ? "#94A3B8" : "#1565C0"}
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}