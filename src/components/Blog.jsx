import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

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
  return (
    <section
      id="blog"
      style={{ background: "#fff", padding: "100px 24px", width: "100%" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              {/* <span
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
                Insights
              </span> */}
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 800,
                  color: "#0A1F44",
                  margin: 0,
                }}
              >
                Latest Articles & News
              </h2>
            </div>
            <button
              style={{
                background: "none",
                border: "1.5px solid #BBDEFB",
                cursor: "pointer",
                padding: "10px 24px",
                borderRadius: 10,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#1565C0",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E3F2FD";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
              }}
            >
              View All Posts →
            </button>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
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
                  transition: "all 0.3s",
                  cursor: "pointer",
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
                {/* Color band */}
                <div
                  style={{
                    height: 6,
                    background: "linear-gradient(90deg, #1565C0, #42A5F5)",
                  }}
                />
                <div style={{ padding: "28px 28px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        background: "#E3F2FD",
                        color: "#1565C0",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        padding: "4px 12px",
                        borderRadius: 100,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {b.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        color: "#94A3B8",
                      }}
                    >
                      {b.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#0A1F44",
                      marginBottom: 12,
                      lineHeight: 1.4,
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "#64748B",
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {b.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#1565C0",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
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
