import { FadeIn } from "./FadeIn";

const universities = [
  {
    id: 1,
    name: "La Trobe University",
    code: "(CRICOS 00115M)",
    logo: "",
  },
  {
    id: 2,
    name: "University of Tasmania",
    code: "(CRICOS 00586B)",
    logo: "",
  },
  {
    id: 3,
    name: "Charles Sturt University",
    code: "(CRICOS 00005F)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%232ECC71' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECSU%3C/text%3E%3C/svg%3E",
  },
  {
    id: 4,
    name: "Torrens University",
    code: "(CRICOS 03389E)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%23F39C12' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETorrens%3C/text%3E%3C/svg%3E",
  },
  {
    id: 5,
    name: "RMIT University",
    code: "(CRICOS 00122F)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%239B59B6' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERMIT%3C/text%3E%3C/svg%3E",
  },
  {
    id: 6,
    name: "Macquarie University",
    code: "(CRICOS 00002J)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%231ABC9C' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMacquarie%3C/text%3E%3C/svg%3E",
  },
];

export function Universities() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div
              style={{
                display: "inline-block",
                // background: "linear-gradient(135deg, #1565C0, #0A3B6B)",
                padding: "8px 20px",
                borderRadius: 30,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  color: "#0025faff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Our Partners
              </span>
            </div>
            <h1
              style={{
                fontSize: "50px",
                fontWeight: 800,
                color: "#0A1F44",
                marginBottom: 20,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Educational Partners
            </h1>
            <p
              style={{
                fontSize: "19px",
                color: "#64748B",
                maxWidth: 650,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Partner with world-leading universities and unlock your global
              education journey
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
            width: "100%",
          }}
        >
          {universities.map((uni, idx) => (
            <div
              key={uni.id}
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "36px 32px",
                textAlign: "center",
                boxShadow: "0 10px 40px rgba(10,25,60,0.08)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: 360,
                border: "1px solid rgba(226,232,240,0.8)",
                position: "relative",
                overflow: "visible",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(21,101,192,0.18)";
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.borderColor = "rgba(21,101,192,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(10,25,60,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(226,232,240,0.8)";
              }}
            >
              {/* Top decorative line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #1565C0, #22C55E)",
                  borderRadius: "0 0 4px 4px",
                }}
              />

              {/* Logo container */}
              <div
                style={{
                  width: "100%",
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                  marginTop: 8,
                }}
              >
                <div
                  style={{
                    width: 160,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #F8FAFC, #EFF6FF)",
                    borderRadius: 16,
                    padding: 20,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #EFF6FF, #DBEAFE)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #F8FAFC, #EFF6FF)";
                  }}
                >
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>

              {/* University name */}
              <div style={{ marginBottom: 32, flex: 1, width: "100%" }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#0A1F44",
                    marginBottom: 12,
                    lineHeight: 1.3,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {uni.name}
                </h3>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "#EFF6FF",
                    padding: "8px 16px",
                    borderRadius: 24,
                    border: "1px solid #BFDBFE",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      color: "#1565C0",
                      fontWeight: 600,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {uni.code}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                  color: "#fff",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  width: "100%",
                  boxShadow: "0 8px 24px rgba(34,197,94,0.25)",
                  letterSpacing: "0.3px",
                  fontFamily: "'Poppins', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #16A34A 0%, #15803D 100%)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(34,197,94,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(34,197,94,0.25)";
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
