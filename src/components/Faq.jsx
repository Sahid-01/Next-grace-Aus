import { useState } from "react";
import { FadeIn } from "./FadeIn";

const FAQS = [
  {
    question: "What is a Student Visa?",
    answer:
      "A student visa allows international students to study in Australia. It is known as the Subclass 500 visa and permits you to stay in Australia for the duration of your course, plus a little extra time.",
  },
  {
    question: "What Can You Do With a Visitor Visa (Subclass 600)?",
    answer:
      "The Visitor Visa (Subclass 600) allows you to visit Australia for tourism, business, or to visit family and friends. It does not permit you to work or study for extended periods.",
  },
  {
    question: "What is a Partner Visa?",
    answer:
      "A Partner Visa allows the spouse or de facto partner of an Australian citizen, permanent resident, or eligible New Zealand citizen to live in Australia. It is processed in two stages — temporary and permanent.",
  },
  {
    question: "What is a 485 Visa?",
    answer:
      "The Temporary Graduate Visa (Subclass 485) allows international students who have recently graduated from an Australian institution to live, study, and work in Australia temporarily.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Processing times vary depending on the visa type and individual circumstances. Student visas typically take 4–6 weeks, while other visa types may take longer. Our consultants will guide you through the process.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
        padding: "100px 24px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <FadeIn>
          <div>
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
              FAQs
            </span>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                color: "#0A1F44",
                marginBottom: 40,
                lineHeight: 1.2,
              }}
            >
              Get the Answers to Common Questions
            </h2>

            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    border:
                      openIndex === i
                        ? "1.5px solid #1565C0"
                        : "1.5px solid #EBF0FB",
                    boxShadow:
                      openIndex === i
                        ? "0 4px 20px rgba(21,101,192,0.1)"
                        : "0 2px 8px rgba(10,31,68,0.05)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 20px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: openIndex === i ? "#1565C0" : "#0A1F44",
                        transition: "color 0.3s",
                      }}
                    >
                      {faq.question}
                    </span>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: openIndex === i ? "#1565C0" : "#EBF0FB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s",
                      }}
                    >
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={openIndex === i ? "#fff" : "#1565C0"}
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        style={{
                          transition: "transform 0.3s",
                          transform:
                            openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  {openIndex === i && (
                    <div
                      style={{
                        padding: "0 20px 18px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        color: "#64748B",
                        lineHeight: 1.7,
                        borderTop: "1px solid #EBF0FB",
                      }}
                    >
                      <p style={{ margin: "14px 0 0" }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — Image */}
        <FadeIn delay={0.2}>
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              height: 520,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="FAQ consultation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Overlay button */}
            <a
              href="/contact"
              style={{
                position: "absolute",
                bottom: 24,
                right: 24,
                background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 50,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 8px 24px rgba(21,101,192,0.4)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(21,101,192,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(21,101,192,0.4)";
              }}
            >
              Read More Q & A
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
