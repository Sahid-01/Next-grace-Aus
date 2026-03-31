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

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000); // Change slide every 3 seconds

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
      style={{
        background:
          "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
        padding: "100px 24px",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#1565c0",
                display: "block",
                marginBottom: 12,
              }}
            >
              What We Offer
            </span>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#0A1F44",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Comprehensive Study Abroad Services
            </h2>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "0 60px",
          }}
        >
          {/* Carousel Track */}
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  minWidth: "100%",
                  padding: "0 12px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "48px 40px",
                    boxShadow: "0 4px 30px rgba(10,31,68,0.1)",
                    border: "1px solid #EBF0FB",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: 600,
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 18,
                      background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 28,
                    }}
                  >
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
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#0A1F44",
                      marginBottom: 16,
                      textAlign: "center",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      color: "#64748B",
                      lineHeight: 1.8,
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              background: "#fff",
              border: "2px solid #1565C0",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(21,101,192,0.2)",
              transition: "all 0.3s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1565C0";
              e.currentTarget.querySelector("svg").style.stroke = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.querySelector("svg").style.stroke = "#1565C0";
            }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1565C0"
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{ transition: "stroke 0.3s" }}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              background: "#fff",
              border: "2px solid #1565C0",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(21,101,192,0.2)",
              transition: "all 0.3s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1565C0";
              e.currentTarget.querySelector("svg").style.stroke = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.querySelector("svg").style.stroke = "#1565C0";
            }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1565C0"
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{ transition: "stroke 0.3s" }}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 40,
          }}
        >
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: currentIndex === i ? 32 : 10,
                height: 10,
                borderRadius: 5,
                background: currentIndex === i ? "#1565C0" : "#BBDEFB",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
