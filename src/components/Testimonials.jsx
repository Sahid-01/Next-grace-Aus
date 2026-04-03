import { useState, useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
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

const VISIBLE = 3;

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (total - VISIBLE + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(total - VISIBLE, i + 1));

  const visible = TESTIMONIALS.slice(currentIndex, currentIndex + VISIBLE);

  return (
    <section style={{
      background: "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
      padding: "100px 24px",
      width: "100%"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#1565C0",
              display: "block",
              marginBottom: 12
            }}>
              Student Stories
            </span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#0A1F44",
              margin: 0
            }}>
              Clients are Talking
            </h2>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            transition: "all 0.4s ease"
          }}>
            {visible.map((t, i) => (
              <div key={currentIndex + i} style={{
                background: "#fff",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                border: "1px solid #EBF0FB",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                animation: "fadeUp 0.5s ease both"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(21,101,192,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 20px rgba(10,31,68,0.06)";
              }}>
                {/* Quote icon */}
                <svg width={28} height={28} viewBox="0 0 24 24" fill="#BBDEFB" stroke="none" style={{ marginBottom: 16 }}>
                  <path d={ICONS.quote} />
                </svg>
                {/* Stars */}
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width={14} height={14} viewBox="0 0 24 24" fill="#FFC107" stroke="none">
                      <path d={ICONS.star} />
                    </svg>
                  ))}
                </div>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#475569",
                  marginBottom: 24,
                  fontStyle: "italic",
                  flex: 1
                }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#fff",
                    flexShrink: 0
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: "#0A1F44" }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#94A3B8" }}>
                      {t.course}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 40 }}>
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
                boxShadow: "0 2px 8px rgba(21,101,192,0.15)"
              }}
              onMouseEnter={(e) => { if (currentIndex !== 0) e.currentTarget.style.background = "#1565C0"; }}
              onMouseLeave={(e) => { if (currentIndex !== 0) e.currentTarget.style.background = "#fff"; }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
                stroke={currentIndex === 0 ? "#94A3B8" : "#1565C0"} strokeWidth={2.5} strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8 }}>
              {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
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
                    padding: 0
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={currentIndex === total - VISIBLE}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: currentIndex === total - VISIBLE ? "#EBF0FB" : "#fff",
                border: "2px solid",
                borderColor: currentIndex === total - VISIBLE ? "#EBF0FB" : "#1565C0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIndex === total - VISIBLE ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(21,101,192,0.15)"
              }}
              onMouseEnter={(e) => { if (currentIndex !== total - VISIBLE) e.currentTarget.style.background = "#1565C0"; }}
              onMouseLeave={(e) => { if (currentIndex !== total - VISIBLE) e.currentTarget.style.background = "#fff"; }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
                stroke={currentIndex === total - VISIBLE ? "#94A3B8" : "#1565C0"} strokeWidth={2.5} strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
