import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";

export function CTA() {
  return (
    <section
      style={{ padding: "80px 24px", background: "#F7F9FC", width: "100%" }}
    >
      <FadeIn>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
            borderRadius: 28,
            padding: "72px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(10,31,68,0.28)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-5%",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-5%",
              width: 250,
              height: 250,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#fff",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Start Your Study Abroad
              <br />
              Journey Today
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                color: "rgba(255,255,255,0.72)",
                marginBottom: 40,
                maxWidth: 500,
                margin: "0 auto 40px",
              }}
            >
              Book a free consultation with our expert advisors and take the
              first step towards your dream education.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/contact"
                style={{
                  background: "#fff",
                  color: "#1565C0",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 36px",
                  borderRadius: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  transition: "all 0.25s",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  textDecoration: "none",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.15)";
                }}
              >
                Book Free Consultation
              </Link>
              <button
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  padding: "14px 36px",
                  borderRadius: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  transition: "all 0.25s",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
              >
                Call +61 (03) 9662 9020
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
