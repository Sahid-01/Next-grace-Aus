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
];

export function Testimonials() {
  return (
    <section
      style={{ background: "#F7F9FC", padding: "100px 24px", width: "100%" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
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
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#0A1F44",
                margin: 0,
              }}
            >
              Clients are Talking
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "36px 32px",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  border: "1px solid #EBF0FB",
                  transition: "all 0.3s",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(21,101,192,0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 20px rgba(10,31,68,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
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
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#475569",
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0A1F44",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: "#94A3B8",
                      }}
                    >
                      {t.course}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
