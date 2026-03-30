import { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email) {
      setSent(true);
    }
  };

  return (
    <section
      id="contact"
      style={{ background: "#fff", padding: "100px 24px", width: "100%" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <FadeIn>
          <div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
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
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#0A1F44",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Ready to Begin Your Journey?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: "#64748B",
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Our expert advisors are ready to guide you through every step of
              your study abroad journey.
            </p>
            {[
              { icon: "phone", label: "+61 (03) 9662 9020" },
              { icon: "mail", label: "melbourne@graceintlgroup.com.au" },
              { icon: "mappin", label: "Multiple Branches Across Australia" },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#E3F2FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1565C0"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[c.icon]} />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    color: "#334155",
                    fontWeight: 500,
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              background: "#F7F9FC",
              borderRadius: 24,
              padding: "40px",
              border: "1px solid #EBF0FB",
              boxShadow: "0 2px 20px rgba(10,31,68,0.05)",
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
                    fontFamily: "'Playfair Display', serif",
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
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#64748B",
                    fontSize: 14,
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#0A1F44",
                    marginBottom: 8,
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
                      padding: "13px 16px",
                      borderRadius: 10,
                      border: "1.5px solid #E2E8F0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "#334155",
                      background: "#fff",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1565C0";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E2E8F0";
                    }}
                  />
                ))}
                <textarea
                  placeholder="Tell us about your study plans..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 10,
                    border: "1.5px solid #E2E8F0",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "#334155",
                    background: "#fff",
                    outline: "none",
                    transition: "border-color 0.2s",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#1565C0";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E2E8F0";
                  }}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    background: "linear-gradient(135deg, #1565C0, #0A3B6B)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: "14px",
                    borderRadius: 10,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    transition: "all 0.25s",
                    boxShadow: "0 4px 16px rgba(21,101,192,0.3)",
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
    </section>
  );
}
