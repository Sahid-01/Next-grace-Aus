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

export function Footer() {
  return (
    <footer
      style={{
        background: "#0A1F44",
        padding: "72px 24px 32px",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d={ICONS.globe} />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                Grace<span style={{ color: "#64B5F6" }}>Intl</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 280,
              }}
            >
              Where we connect life & learning. Trusted by 50,000+ students
              across the globe for 19+ years.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["facebook", "twitter", "linkedin"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1565C0";
                    e.currentTarget.style.borderColor = "#1565C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
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
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 10,
                  cursor: "pointer",
                  transition: "color 0.2s",
                  textDecoration: "none",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#64B5F6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            {SERVICES.map((s) => (
              <div
                key={s.title}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 10,
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#64B5F6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {s.title}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            {[
              { icon: "phone", text: "+61 (03) 9662 9020" },
              { icon: "mail", text: "melbourne@graceintlgroup.com" },
              { icon: "mappin", text: "Melbourne, Sydney & 45 branches" },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 14,
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(100,181,246,0.8)"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginTop: 2, flexShrink: 0 }}
                >
                  <path d={ICONS[c.icon]} />
                </svg>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © 2025 Grace International Group. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            MARA Registered Migration Agents
          </span>
        </div>
      </div>
    </footer>
  );
}
