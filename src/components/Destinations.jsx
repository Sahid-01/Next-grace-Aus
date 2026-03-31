import { FadeIn } from "../components/FadeIn";

const DESTINATIONS = [
  { flag: "🇦🇺", name: "Australia", students: "12,000+", color: "#0057A8" },
  { flag: "🇬🇧", name: "United Kingdom", students: "8,500+", color: "#CC0000" },
  { flag: "🇨🇦", name: "Canada", students: "7,200+", color: "#E53935" },
  { flag: "🇺🇸", name: "USA", students: "5,800+", color: "#1A237E" },
  { flag: "🇳🇿", name: "New Zealand", students: "3,100+", color: "#006B3C" },
];

export function Destinations() {
  return (
    <section
      id="destinations"
      style={{ background: "#fff", padding: "100px 24px", width: "100%" }}
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
                color: "#1565C0",
                display: "block",
                marginBottom: 12,
              }}
            ></span>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#0A1F44",
                margin: 0,
              }}
            >
              Top Study Destinations
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {DESTINATIONS.map((d, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "36px 32px",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  border: "1px solid #EBF0FB",
                  textAlign: "center",
                  minWidth: 180,
                  flex: "1 1 160px",
                  maxWidth: 200,
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 16px 48px ${d.color}22`;
                  e.currentTarget.style.borderColor = d.color + "44";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 20px rgba(10,31,68,0.06)";
                  e.currentTarget.style.borderColor = "#EBF0FB";
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 14 }}>{d.flag}</div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#0A1F44",
                    marginBottom: 6,
                  }}
                >
                  {d.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    color: d.color,
                  }}
                >
                  {d.students} students
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
