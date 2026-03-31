// src/sections/Footer.jsx
// Fully responsive footer — works cleanly on desktop, tablet, and mobile

import { Link } from "react-router-dom";
import { ICONS } from "../components/Icon";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Study Abroad", path: "/destinations" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const SERVICES = [
  { title: "University Admission" },
  { title: "Visa Assistance" },
  { title: "IELTS / PTE Coaching" },
  { title: "Career Counselling" },
  { title: "Scholarship Guidance" },
];

const CONTACT_INFO = [
  { icon: "phone", text: "+61 (03) 9662 9020" },
  { icon: "mail", text: "melbourne@graceintlgroup.com" },
  { icon: "mappin", text: "Melbourne, Sydney & 45 branches" },
];

const SOCIAL = ["facebook", "twitter", "linkedin"];

// ── Responsive breakpoints via injected <style> ──────────────────────────
const FOOTER_STYLES = `
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 56px;
  }

  /* Tablet: 2 columns */
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
  }

  /* Mobile: single column */
  @media (max-width: 520px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    /* Force every column to left-align on mobile */
    .footer-grid > div {
      text-align: left !important;
    }
    .footer-grid > div p,
    .footer-grid > div span {
      text-align: left !important;
    }
    .footer-grid > div img {
      margin-left: 0 !important;
      margin-right: auto !important;
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media (max-width: 520px) {
    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
  }

  .footer-link {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.2s;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  .footer-link:hover { color: #64B5F6; }

  .footer-service-item {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.2s;
    text-align: left;
  }
  .footer-service-item:hover { color: #64B5F6; }

  .footer-social-btn {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
  }
  .footer-social-btn:hover {
    background: #1565C0;
    border-color: #1565C0;
  }
`;

export function Footer() {
  return (
    <footer
      style={{
        background: "#0A1F44",
        padding: "72px 24px 32px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <style>{FOOTER_STYLES}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* ── 4-column grid (collapses on smaller screens) ─────────────── */}
        <div className="footer-grid">
          {/* Brand column */}
          <div style={{ textAlign: "left" }}>
            {/* Logo */}
            <div style={{ marginBottom: 20 }}>
              <img
                src="../src/assets/G.png"
                alt="Grace International Logo"
                style={{
                  width: 90,
                  height: 90,
                  objectFit: "contain",
                  display: "block",
                  marginLeft: 0,
                }}
              />
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: 24,
                maxWidth: 280,
                textAlign: "left",
              }}
            >
              Where we connect life &amp; learning. Trusted by 50,000+ students
              across the globe for 19+ years.
            </p>

            {/* Social icons */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {SOCIAL.map((s) => (
                <button key={s} className="footer-social-btn" aria-label={s}>
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[s]} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            {NAV_LINKS.map((l) => (
              <Link key={l.label} to={l.path} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            {SERVICES.map((s) => (
              <div key={s.title} className="footer-service-item">
                {s.title}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            {CONTACT_INFO.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 16,
                  alignItems: "flex-start",
                }}
              >
                {/* Icon container — fixed size so it never squishes */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(100,181,246,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64B5F6"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[c.icon]} />
                  </svg>
                </div>

                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                    paddingTop: 6,
                    wordBreak: "break-word",
                  }}
                >
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider line ─────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
          }}
        >
          <div className="footer-bottom">
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              © 2025 Grace International Group. All rights reserved.
            </span>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              MARA Registered Migration Agents
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
