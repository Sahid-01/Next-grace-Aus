"use client";

// src/sections/BranchMap.jsx
// "Our Offices Around the World" section with interactive Leaflet map + branch cards

import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BRANCHES as ALL_BRANCHES } from "@/data/branches";

// Filter to only branches that have map coordinates
const MAP_BRANCHES = ALL_BRANCHES.filter((b) => b.lat != null && b.lng != null);
const DEFAULT_ID = MAP_BRANCHES.find((b) => b.primary)?.id || MAP_BRANCHES[0]?.id;

// ── Fix default marker icons ───────────────────────────────────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// ── Custom SVG pin marker ──────────────────────────────────────────────────
function createPin(isActive = false) {
  const bg = isActive ? "#0A1F44" : "#1565C0";
  const border = isActive ? "#64B5F6" : "#fff";
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;width:32px;height:40px;">
        <div style="
          width:32px;height:32px;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          background:${bg};
          border:2.5px solid ${border};
          box-shadow:0 4px 14px rgba(21,101,192,0.45);
        "></div>
        <div style="
          position:absolute;top:8px;left:8px;
          width:12px;height:12px;
          border-radius:50%;
          background:${border};
        "></div>
      </div>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -44],
  });
}

// ── Fly-to helper ──────────────────────────────────────────────────────────
function FlyTo({ target }) {
  const map = useMap();
  if (target) map.flyTo([target.lat, target.lng], 12, { duration: 1.2 });
  return null;
}



export function BranchMap() {
  const [activeId, setActiveId] = useState(DEFAULT_ID);
  const [isMobile, setIsMobile] = useState(false);
  const [showMap, setShowMap] = useState(false); // mobile tab toggle
  const markerRefs = useRef({});
  const activeBranch = MAP_BRANCHES.find((b) => b.id === activeId);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Breakpoint detection
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (branch) => {
    setActiveId(branch.id);
    // On mobile: switch to map tab automatically
    if (isMobile) setShowMap(true);
    setTimeout(() => {
      const ref = markerRefs.current[branch.id];
      if (ref) ref.openPopup();
    }, 1300);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        background: "var(--surface, #F7F9FC)",
        padding: isMobile ? "60px 20px" : "100px 24px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 56 }}>
          <h2
            className={`transition-all duration-[800ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: isMobile ? "clamp(22px, 6vw, 30px)" : "clamp(28px, 4vw, 46px)",
              color: "#0A1F44",
              margin: "0 0 12px",
              lineHeight: 1.15,
              transitionDelay: "200ms",
            }}
          >
            Our Offices Around the World
          </h2>
          <p
            className={`transition-all duration-[800ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? 13 : 15,
              color: "#64748B",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
              transitionDelay: "400ms",
            }}
          >
            With offices across Australia and New Zealand, expert guidance is
            never far away. Click a branch to explore.
          </p>
        </div>

        {/* ── Mobile: Tab switcher ── */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              background: "#EBF0FB",
              borderRadius: 12,
              padding: 4,
              marginBottom: 20,
              gap: 4,
            }}
          >
            {["Branches", "Map"].map((label, i) => {
              const active = (label === "Map") === showMap;
              return (
                <button
                  key={label}
                  onClick={() => setShowMap(label === "Map")}
                  style={{
                    flex: 1,
                    padding: "10px 0",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    background: active
                      ? "linear-gradient(135deg, #1565C0, #42A5F5)"
                      : "transparent",
                    color: active ? "#fff" : "#64748B",
                    transition: "all 0.25s",
                    boxShadow: active ? "0 4px 12px rgba(21,101,192,0.25)" : "none",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* ── Body: cards + map ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "320px 1fr",
            gap: isMobile ? 0 : 24,
            alignItems: "start",
          }}
        >
          {/* Branch card list — hidden on mobile when map tab active */}
          {(!isMobile || !showMap) && (
            <div
              className={`transition-all duration-[800ms] ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                maxHeight: isMobile ? 420 : 480,
                overflowY: "auto",
                paddingRight: 2,
                scrollbarWidth: "thin",
                scrollbarColor: "#BBDEFB #EBF4FF",
                transitionDelay: "600ms",
              }}
            >
              {MAP_BRANCHES.map((branch, index) => {
                const isActive = branch.id === activeId;
                return (
                  <div
                    key={branch.id}
                    className={`transition-all duration-[500ms] ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      borderRadius: 14,
                      padding: isMobile ? "12px 14px" : "16px 18px",
                      cursor: "pointer",
                      border: "1.5px solid",
                      borderColor: isActive ? "transparent" : "#EBF0FB",
                      background: isActive
                        ? "linear-gradient(135deg, #0A1F44, #1565C0)"
                        : "#fff",
                      boxShadow: isActive
                        ? "0 8px 28px rgba(21,101,192,0.30)"
                        : "0 2px 10px rgba(10,31,68,0.05)",
                      transitionDelay: `${700 + index * 40}ms`,
                      transform: "translateX(0)",
                    }}
                    onClick={() => handleCardClick(branch)}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.transform = "translateX(4px)";
                        e.currentTarget.style.boxShadow = "0 4px 18px rgba(21,101,192,0.10)";
                        e.currentTarget.style.borderColor = "#BBDEFB";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.boxShadow = "0 2px 10px rgba(10,31,68,0.05)";
                        e.currentTarget.style.borderColor = "#EBF0FB";
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <div
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: isActive ? "#64B5F6" : "#1565C0",
                          boxShadow: isActive ? "0 0 0 3px rgba(100,181,246,0.3)" : "none",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: isActive ? "#fff" : "#0A1F44",
                        }}
                      >
                        {branch.city}
                      </span>
                      {branch.primary && (
                        <span
                          style={{
                            marginLeft: "auto",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: 9,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            padding: "2px 8px",
                            borderRadius: 99,
                            background: isActive ? "rgba(255,255,255,0.15)" : "#E3F2FD",
                            color: isActive ? "#90CAF9" : "#1565C0",
                          }}
                        >
                          HQ
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 11,
                        lineHeight: 1.5,
                        paddingLeft: 17,
                        margin: 0,
                        color: isActive ? "rgba(255,255,255,0.62)" : "#64748B",
                      }}
                    >
                      {branch.address}
                    </p>

                    {isActive && (
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 11,
                          paddingLeft: 17,
                          marginTop: 5,
                          marginBottom: 0,
                          color: "#90CAF9",
                        }}
                      >
                        📞 {branch.phone}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Leaflet map — hidden on mobile when branch tab active */}
          {(!isMobile || showMap) && (
            <div
              className={`transition-all duration-[800ms] ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid #E2ECF8",
                boxShadow: "0 8px 40px rgba(10,31,68,0.10)",
                height: isMobile ? 380 : 480,
                position: "relative",
                transitionDelay: "600ms",
              }}
            >
              <MapContainer
                center={[-28, 135]}
                zoom={isMobile ? 3 : 4}
                style={{ width: "100%", height: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <FlyTo target={activeBranch} />
                {MAP_BRANCHES.map((branch) => (
                  <Marker
                    key={branch.id}
                    position={[branch.lat, branch.lng]}
                    icon={createPin(branch.id === activeId)}
                    ref={(r) => { if (r) markerRefs.current[branch.id] = r; }}
                    eventHandlers={{ click: () => setActiveId(branch.id) }}
                  >
                    <Popup>
                      <div style={{ padding: 12, minWidth: 200, fontFamily: "'Poppins', sans-serif" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1565C0", flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, fontSize: 14, color: "#0A1F44" }}>
                            {branch.office}
                          </span>
                          {branch.primary && (
                            <span style={{
                              marginLeft: "auto",
                              background: "#E3F2FD",
                              color: "#1565C0",
                              fontWeight: 700,
                              fontSize: 9,
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                              padding: "2px 8px",
                              borderRadius: 99,
                            }}>
                              HQ
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: 11, color: "#64748B", marginBottom: 6, lineHeight: 1.5 }}>📍 {branch.address}</p>
                        <p style={{ fontSize: 11, color: "#64748B", marginBottom: 6 }}>📞 {branch.phone}</p>
                        <p style={{ fontSize: 11, color: "#64748B", marginBottom: 12 }}>
                          ✉️ <a href={`mailto:${branch.email}`} style={{ color: "#1565C0", textDecoration: "none" }}>{branch.email}</a>
                        </p>
                        <a
                          href={`mailto:${branch.email}`}
                          style={{
                            display: "block",
                            background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "8px 12px",
                            borderRadius: 8,
                            fontWeight: 600,
                            fontSize: 11,
                            textAlign: "center",
                          }}
                        >
                          Book Consultation →
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* Hint pill */}
              <div
                className={`transition-all duration-[600ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(10,31,68,0.72)",
                  color: "#fff",
                  fontSize: 11,
                  fontFamily: "'Poppins', sans-serif",
                  padding: "5px 14px",
                  borderRadius: 99,
                  backdropFilter: "blur(8px)",
                  zIndex: 500,
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                  transitionDelay: "1200ms",
                }}
              >
                {isMobile ? "Tap a pin to explore" : "Click a card or pin to explore"}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}