import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

const REASONS = [
  {
    icon: "check",
    title: "19+ Years of Excellence",
    desc: "Nearly two decades of proven track record in guiding students to their dream universities worldwide.",
  },
  {
    icon: "users",
    title: "50,000+ Success Stories",
    desc: "Join thousands of satisfied students who achieved their study abroad dreams with our expert guidance.",
  },
  {
    icon: "globe",
    title: "45 Global Branches",
    desc: "Extensive network across multiple countries ensuring personalized support wherever you are.",
  },
  {
    icon: "award",
    title: "98% Visa Success Rate",
    desc: "Industry-leading visa approval rates backed by experienced migration agents and consultants.",
  },
  {
    icon: "heart",
    title: "End-to-End Support",
    desc: "From course selection to post-arrival assistance, we're with you every step of the journey.",
  },
];

export function WhyChooseGrace() {
  return (
    <section
      id="why-choose-grace"
      style={{ 
        background: "linear-gradient(135deg, #BBDEFB 0%, #E3F2FD 50%, #F7F9FC 100%)", 
        padding: "100px 24px", 
        width: "100%" 
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            {/* <span
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
            </span> */}
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
              Why Choose Grace International
            </h2>
          </div>
        </FadeIn>

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            alignItems: "stretch",
            justifyItems: "center",
          }}
        >
          {REASONS.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "40px 32px",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  border: "1px solid #EBF0FB",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  height: "100%",
                  width: "100%",
                  maxWidth: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
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
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[r.icon]} />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#0A1F44",
                    marginBottom: 12,
                    textAlign: "center",
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    color: "#64748B",
                    lineHeight: 1.7,
                    margin: 0,
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  {r.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
