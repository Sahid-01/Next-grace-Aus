import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, ICONS } from "./Icon";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Study Abroad", path: "/destinations" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(10,25,60,0.07)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #0A3B6B 0%, #1565C0 100%)",
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
              color: "#0A1F44",
              letterSpacing: "-0.3px",
            }}
          >
            Grace<span style={{ color: "#1565C0" }}>Intl</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            "@media(max-width:768px)": { display: "none" },
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: scrolled ? "#2D3748" : "#fff",
                transition: "all 0.2s",
                textDecoration: "none",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = scrolled
                  ? "#F0F4FF"
                  : "rgba(255,255,255,0.15)";
                e.target.style.color = scrolled ? "#1565C0" : "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.color = scrolled ? "#2D3748" : "#fff";
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            to="/contact"
            style={{
              background: "linear-gradient(135deg, #1565C0, #0A3B6B)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              padding: "10px 20px",
              borderRadius: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              boxShadow: "0 4px 16px rgba(21,101,192,0.3)",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              textDecoration: "none",
              display: "block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book Free Consultation
          </Link>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#0A1F44" : "#fff",
              padding: 4,
              display: "none",
              "@media(max-width:768px)": { display: "block" },
            }}
          >
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d={open ? ICONS.close : ICONS.menu} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#fff",
            padding: "12px 24px 20px",
            boxShadow: "0 8px 32px rgba(10,25,60,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              onClick={handleNavClick}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "12px 8px",
                borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: "#2D3748",
                borderBottom: "1px solid #F0F4FF",
                textDecoration: "none",
                display: "block",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
