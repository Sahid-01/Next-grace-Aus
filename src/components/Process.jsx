import { FadeIn } from "../components/FadeIn";

const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "One-on-one session to understand your goals, background, and best-fit options.",
  },
  {
    num: "02",
    title: "Course Selection",
    desc: "Curated shortlist of courses and universities matched to your profile.",
  },
  {
    num: "03",
    title: "Application",
    desc: "End-to-end application management ensuring accuracy and strong submissions.",
  },
  {
    num: "04",
    title: "Visa Processing",
    desc: "Document preparation and lodgement with our registered migration agents.",
  },
  {
    num: "05",
    title: "Departure Support",
    desc: "Pre-departure briefings, accommodation tips, and arrival guidance.",
  },
];

export function Process() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            {/* <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#90CAF9",
                display: "block",
                marginBottom: 12,
              }}
            >
              How It Works
            </span> */}
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#fff",
                margin: 0,
              }}
            >
              Your Journey in 5 Simple Steps
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {STEPS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ textAlign: "center", padding: "0 16px 0" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #42A5F5, #1565C0)"
                        : "rgba(255,255,255,0.08)",
                    border:
                      i === 0 ? "none" : "2px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: "#fff",
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #42A5F5, #1565C0)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      i === 0
                        ? "linear-gradient(135deg, #42A5F5, #1565C0)"
                        : "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
