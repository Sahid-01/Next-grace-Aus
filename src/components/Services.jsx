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
  return (
    <section
      id="services"
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
                color: "#1565c0",
                display: "block",
                marginBottom: 12,
              }}
            >
              What We Offer
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "36px 28px",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  border: "1px solid #EBF0FB",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(21,101,192,0.14)";
                  e.currentTarget.style.borderColor = "#BBDEFB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 20px rgba(10,31,68,0.06)";
                  e.currentTarget.style.borderColor = "#EBF0FB";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg
                    width={22}
                    height={22}
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
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#0A1F44",
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "#64748B",
                    lineHeight: 1.65,
                    margin: 0,
                    textAlign: "center",
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
