"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "./FadeIn";
import { ICONS } from "./Icon";

const BLOGS = [
  {
    tag: "Visa",
    date: "May 14, 2025",
    title: "Partner Visa (Subclass 820/801) — Complete Guide",
    excerpt:
      "Everything you need to know about applying for a Partner Visa in Australia, from eligibility to processing timelines.",
  },
  {
    tag: "Students",
    date: "Feb 20, 2025",
    title: "Student Visa Subclass 500 — What You Need to Know",
    excerpt:
      "The Subclass 500 visa lets you study full-time in Australia. Here's a step-by-step breakdown of the process.",
  },
  {
    tag: "Migration",
    date: "Dec 02, 2024",
    title: "TSS Visa (SC 482) — Filling Australia's Skills Gap",
    excerpt:
      "Understand how the Temporary Skill Shortage visa works and how employers can sponsor overseas workers.",
  },
];

export function Blog() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="blog"
      style={{
        background: "#fff",
        padding: isMobile ? "60px 20px" : "100px 24px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header row */}
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: isMobile ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 16 : 20,
              marginBottom: isMobile ? 32 : 56,
            }}
          >
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: isMobile ? "clamp(22px, 6vw, 30px)" : "clamp(28px, 4vw, 48px)",
                color: "#0A1F44",
                margin: 0,
              }}
            >
              Latest Articles & News
            </h2>

            <button
              style={{
                background: "none",
                border: "1.5px solid #BBDEFB",
                cursor: "pointer",
                padding: isMobile ? "9px 20px" : "10px 24px",
                borderRadius: 10,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? 13 : 14,
                color: "#1565C0",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                alignSelf: isMobile ? "flex-start" : "auto",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#E3F2FD")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              View All Posts →
            </button>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: isMobile ? 20 : 24,
          }}
        >
          {BLOGS.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 2px 20px rgba(10,31,68,0.06)",
                  border: "1px solid #EBF0FB",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 48px rgba(21,101,192,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 20px rgba(10,31,68,0.06)";
                }}
              >
                {/* Color band — top on desktop, left on mobile */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                    ...(isMobile
                      ? { width: 5, flexShrink: 0 }
                      : { height: 6 }),
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    padding: isMobile ? "18px 18px 18px 20px" : "28px 28px 32px",
                    flex: 1,
                  }}
                >
                  {/* Tag + date */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        background: "#E3F2FD",
                        color: "#1565C0",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 99,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {b.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 11,
                        color: "#94A3B8",
                      }}
                    >
                      {b.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? 14 : 17,
                      color: "#0A1F44",
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                  >
                    {b.title}
                  </h3>

                  {/* Excerpt — hide on mobile to keep cards compact */}
                  {!isMobile && (
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 13,
                        color: "#64748B",
                        lineHeight: 1.65,
                        marginBottom: 20,
                      }}
                    >
                      {b.excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#1565C0",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: isMobile ? 8 : 0,
                    }}
                  >
                    Read More
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1565C0"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    >
                      <path d={ICONS.arrow} />
                    </svg>
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}