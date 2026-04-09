"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { ICONS } from "./Icon";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleSubmit = () => {
    if (form.name && form.email) setSent(true);
  };

  // 1 col on mobile, 3 cols on tablet+
  const infoGridCols = isMobile ? "1fr" : "repeat(3, 1fr)";

  return (
    <section
      id="contact"
      style={{
        background:
          "linear-gradient(135deg, #BBDEFB 0%, #E3F2FD 50%, #F7F9FC 100%)",
        padding: isMobile ? "60px 20px" : "100px 24px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <FadeIn>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? 40 : 64,
            }}
          >
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
            >
              Get in Touch
            </span>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: isMobile
                  ? "clamp(22px, 6vw, 30px)"
                  : "clamp(28px, 3.5vw, 44px)",
                color: "#0A1F44",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Ready to Begin Your Journey?
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? 14 : 16,
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Our expert advisors are ready to guide you through every step of
              your study abroad journey.
            </p>
          </div>
        </FadeIn>

        {/* Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: infoGridCols,
            gap: isMobile ? 16 : 24,
            marginBottom: isMobile ? 40 : 64,
          }}
        >
          {[
            { icon: "phone", label: "Phone", value: "+61 (03) 9662 9020" },
            {
              icon: "mail",
              label: "Email",
              value: "melbourne@graceintlgroup.com.au",
            },
            {
              icon: "mappin",
              label: "Location",
              value: "Multiple Branches Across Australia",
            },
          ].map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: isMobile ? "20px 16px" : "28px 24px",
                  border: "1px solid #EBF0FB",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  // On mobile, switch to a horizontal row layout
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  alignItems: "center",
                  justifyContent: isMobile ? "flex-start" : "center",
                  gap: isMobile ? 16 : 0,
                  minHeight: isMobile ? "auto" : 180,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(21,101,192,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 20px rgba(10,31,68,0.06)";
                }}
              >
                <div
                  style={{
                    width: isMobile ? 44 : 56,
                    height: isMobile ? 44 : 56,
                    minWidth: isMobile ? 44 : 56,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: isMobile ? 0 : "0 auto 16px",
                  }}
                >
                  <svg
                    width={isMobile ? 20 : 24}
                    height={isMobile ? 20 : 24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[c.icon]} />
                  </svg>
                </div>

                <div style={{ textAlign: isMobile ? "left" : "center" }}>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1565C0",
                      marginBottom: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {c.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: isMobile ? 13 : 14,
                      color: "#0A1F44",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {c.value}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Form */}
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn delay={0.3}>
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: isMobile ? "24px 20px" : 40,
                border: "1px solid #EBF0FB",
                boxShadow: "0 4px 30px rgba(10,31,68,0.08)",
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    >
                      <path d={ICONS.check} />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "#0A1F44",
                      marginBottom: 8,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "#64748B",
                      fontSize: 14,
                    }}
                  >
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? 18 : 20,
                      color: "#0A1F44",
                      marginBottom: 4,
                    }}
                  >
                    Book Free Consultation
                  </h3>

                  {[
                    { key: "name", placeholder: "Full Name", type: "text" },
                    { key: "email", placeholder: "Email Address", type: "email" },
                    { key: "phone", placeholder: "Phone Number", type: "tel" },
                  ].map((f) => (
                    <input
                      key={f.key}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({ ...form, [f.key]: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: isMobile ? "12px 14px" : "13px 16px",
                        borderRadius: 10,
                        border: "1.5px solid #E2E8F0",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        color: "#0A1F44",
                        background: "#fff",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#1565C0")}
                      onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                    />
                  ))}

                  <textarea
                    placeholder="Tell us about your study plans..."
                    rows={isMobile ? 3 : 4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: isMobile ? "12px 14px" : "13px 16px",
                      borderRadius: 10,
                      border: "1.5px solid #E2E8F0",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "#0A1F44",
                      background: "#fff",
                      outline: "none",
                      transition: "border-color 0.2s",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1565C0")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                  />

                  <button
                    onClick={handleSubmit}
                    style={{
                      background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      padding: isMobile ? "13px 0" : "14px 0",
                      borderRadius: 10,
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? 14 : 15,
                      transition: "all 0.25s",
                      boxShadow: "0 4px 16px rgba(21,101,192,0.3)",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(21,101,192,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(21,101,192,0.3)";
                    }}
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}