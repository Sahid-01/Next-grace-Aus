import { Link } from "react-router-dom";
import { ICONS } from "../components/Icon";

const STATS = [
  { value: "50K+", label: "Students Helped" },
  { value: "500+", label: "Education Partners" },
  { value: "19",   label: "Years of Experience" },
  { value: "45",   label: "Global Branches" },
];

export function Hero() {

  return (
    <section id="home" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", width: "100%",
    }}>
      {/* Background image with overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/src/assets/hero.webp')",
        backgroundSize: "cover", backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(10,31,68,0.75) 0%, rgba(10,59,107,0.75) 50%, rgba(21,101,192,0.7) 100%)",
      }} />
      
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%", width: 500, height: 500,
        borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", left: "-8%", width: 400, height: 400,
        borderRadius: "50%", background: "rgba(21,101,192,0.3)", pointerEvents: "none",
      }} />
      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        zIndex: 1,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
        width: "100%", position: "relative", zIndex: 2,
      }}>
        {/* Left */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.1)", borderRadius: 100,
            padding: "6px 16px", marginBottom: 28,
            border: "1px solid rgba(255,255,255,0.15)",
            animation: "fadeUp 0.8s ease both",
          }}>
            <span style={{ fontSize: 11, color: "#90CAF9", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              ✦ Trusted by 50,000+ students
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(38px, 5.5vw, 64px)",
            fontWeight: 800, lineHeight: 1.12, color: "#fff",
            marginBottom: 24, animation: "fadeUp 0.9s ease 0.1s both",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}>
            Study Abroad<br />
            <span style={{
              background: "linear-gradient(90deg, #64B5F6, #90CAF9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              with Expert
            </span><br />Guidance
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7,
            color: "rgba(255,255,255,0.95)", marginBottom: 40, maxWidth: 440,
            animation: "fadeUp 1s ease 0.2s both",
            textShadow: "0 1px 10px rgba(0,0,0,0.3)",
          }}>
            From choosing the right university to landing your visa — Grace International
            has guided 50,000+ students across Australia, UK, Canada, USA & New Zealand.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap",
            animation: "fadeUp 1s ease 0.3s both", alignItems: "center" }}>
            <Link to="/contact" style={{
              background: "linear-gradient(135deg, #1565C0, #42A5F5)",
              color: "#fff", border: "none", cursor: "pointer",
              padding: "14px 32px", borderRadius: 12,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
              boxShadow: "0 8px 32px rgba(21,101,192,0.5)", transition: "all 0.25s",
              display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
              Get Started
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d={ICONS.arrow}/></svg>
            </Link>
            <Link to="/destinations" style={{
              background: "rgba(255,255,255,0.1)", color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer",
              padding: "14px 32px", borderRadius: 12,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
              backdropFilter: "blur(8px)", transition: "all 0.25s", textDecoration: "none",
              display: "flex", alignItems: "center",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}>
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Right — stats card */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
          animation: "fadeUp 1s ease 0.4s both" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.07)", borderRadius: 16,
              padding: "28px 24px", border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800,
                fontSize: 36, color: "#64B5F6", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: "rgba(255,255,255,0.6)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M0 80L60 70C120 60 240 40 360 36.7C480 33 600 47 720 53.3C840 60 960 60 1080 53.3C1200 47 1320 33 1380 26.7L1440 20V80H0Z" fill="#F7F9FC"/>
        </svg>
      </div>
    </section>
  );
}
