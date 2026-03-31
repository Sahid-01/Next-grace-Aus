// src/sections/BranchesMap.jsx
//
// Split-layout section:
//   LEFT  — scrollable list of branch cards (click to fly to on map)
//   RIGHT — interactive Leaflet map with custom markers & popups
//
// Dependencies (add to package.json):
//   npm install leaflet react-leaflet
//
// Leaflet's default marker icons break with Vite — we create custom
// SVG-based DivIcons instead, so no image imports are needed.

import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/leaflet-fix.css";

import FadeIn from "../components/FadeIn";
import SectionLabel from "../components/SectionLabel";
import { BRANCHES } from "../data/branches";

// ── Australia bounding box — map opens showing the whole country ──────────
const AUS_CENTER = [-25.5, 133.5];
const AUS_ZOOM = 4;

// ── Custom SVG marker factory ─────────────────────────────────────────────
function createMarkerIcon(isPrimary = false, isActive = false) {
  const bg = isActive ? "#0A1F44" : isPrimary ? "#1565C0" : "#fff";
  const ring = isActive ? "#64B5F6" : isPrimary ? "#42A5F5" : "#1565C0";
  const dot = isActive ? "#64B5F6" : isPrimary ? "#fff" : "#1565C0";
  const size = isPrimary ? 38 : 32;

  return L.divIcon({
    className: "",
    html: `
      <div style="
        width:${size}px; height:${size}px;
        border-radius:50% 50% 50% 0;
        transform: rotate(-45deg);
        background:${bg};
        border: 2.5px solid ${ring};
        box-shadow: 0 4px 16px rgba(21,101,192,0.35);
        display:flex; align-items:center; justify-content:center;
        transition: all 0.2s;
      ">
        <div style="
          width:9px; height:9px; border-radius:50%;
          background:${dot};
          transform: rotate(45deg);
        "></div>
      </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size - 4],
  });
}

// ── Helper: fly map to a branch when a card is clicked ───────────────────
function FlyToController({ target }) {
  const map = useMap();
  if (target) {
    map.flyTo([target.lat, target.lng], 13, { duration: 1.2 });
  }
  return null;
}

export default function BranchesMap() {
  const [activeId, setActiveId] = useState(BRANCHES[0].id);
  const markerRefs = useRef({});

  const activeBranch = BRANCHES.find((b) => b.id === activeId);

  const handleCardClick = (branch) => {
    setActiveId(branch.id);
    // Open the popup on the marker
    const markerRef = markerRefs.current[branch.id];
    if (markerRef) {
      setTimeout(() => markerRef.openPopup(), 400); // wait for flyTo
    }
  };

  return (
    <section
      id="branches"
      style={{ background: "#F7F9FC", padding: "100px 0", width: "100%" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Heading ──────────────────────────────────────────────────── */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Our Offices</SectionLabel>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#0A1F44",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Find a Grace International Branch
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                color: "#64748B",
                marginTop: 14,
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.65,
              }}
            >
              With 45 branches across Australia, expert advice is always nearby.
              Click a branch to locate it on the map.
            </p>
          </div>
        </FadeIn>

        {/* ── Split layout ─────────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "340px 1fr",
              gap: 24,
              alignItems: "stretch",
              minHeight: 560,
            }}
            className="map-grid"
          >
            {/* ── LEFT: Branch card list ──────────────────────────────── */}
            <div
              style={{
                overflowY: "auto",
                maxHeight: 560,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                paddingRight: 4,
                // Custom scrollbar
                scrollbarWidth: "thin",
                scrollbarColor: "#BBDEFB #F0F4FF",
              }}
            >
              {BRANCHES.map((branch) => {
                const isActive = branch.id === activeId;
                return (
                  <div
                    key={branch.id}
                    onClick={() => handleCardClick(branch)}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #0A1F44, #1565C0)"
                        : "#fff",
                      borderRadius: 14,
                      padding: "18px 20px",
                      border: `1.5px solid ${isActive ? "transparent" : "#EBF0FB"}`,
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow: isActive
                        ? "0 8px 28px rgba(21,101,192,0.28)"
                        : "0 2px 12px rgba(10,31,68,0.05)",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#BBDEFB";
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(21,101,192,0.12)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#EBF0FB";
                        e.currentTarget.style.boxShadow =
                          "0 2px 12px rgba(10,31,68,0.05)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }
                    }}
                  >
                    {/* City row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      {/* Pin dot */}
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: isActive ? "#64B5F6" : "#1565C0",
                          flexShrink: 0,
                          boxShadow: isActive
                            ? "0 0 0 3px rgba(100,181,246,0.3)"
                            : "none",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: isActive ? "#fff" : "#0A1F44",
                        }}
                      >
                        {branch.city}
                      </span>
                      {branch.primary && (
                        <span
                          style={{
                            marginLeft: "auto",
                            background: isActive
                              ? "rgba(255,255,255,0.15)"
                              : "#E3F2FD",
                            color: isActive ? "#90CAF9" : "#1565C0",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: 10,
                            letterSpacing: "0.8px",
                            textTransform: "uppercase",
                            padding: "3px 8px",
                            borderRadius: 100,
                          }}
                        >
                          HQ
                        </span>
                      )}
                    </div>

                    {/* Address */}
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        color: isActive ? "rgba(255,255,255,0.65)" : "#64748B",
                        margin: 0,
                        lineHeight: 1.5,
                        paddingLeft: 20,
                      }}
                    >
                      {branch.address}
                    </p>

                    {/* Phone — only show on active */}
                    {isActive && (
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 12,
                          color: "#90CAF9",
                          marginTop: 6,
                          paddingLeft: 20,
                        }}
                      >
                        {branch.phone}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── RIGHT: Leaflet map ──────────────────────────────────── */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(10,31,68,0.12)",
                border: "1px solid #EBF0FB",
                minHeight: 560,
                position: "relative",
              }}
            >
              <MapContainer
                center={AUS_CENTER}
                zoom={AUS_ZOOM}
                style={{ width: "100%", height: "100%", minHeight: 560 }}
                scrollWheelZoom={false}
                zoomControl={true}
              >
                {/* OpenStreetMap tile layer — free, no API key needed */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Fly-to controller — re-centers map when activeId changes */}
                <FlyToController target={activeBranch} />

                {/* Branch markers */}
                {BRANCHES.map((branch) => (
                  <Marker
                    key={branch.id}
                    position={[branch.lat, branch.lng]}
                    icon={createMarkerIcon(
                      branch.primary,
                      branch.id === activeId,
                    )}
                    ref={(ref) => {
                      if (ref) markerRefs.current[branch.id] = ref;
                    }}
                    eventHandlers={{
                      click: () => setActiveId(branch.id),
                    }}
                  >
                    <Popup>
                      {/* Custom popup card */}
                      <div
                        style={{
                          padding: "16px 18px",
                          minWidth: 220,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {/* Header */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 10,
                          }}
                        >
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: "#1565C0",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: 15,
                              color: "#0A1F44",
                            }}
                          >
                            {branch.city}
                          </span>
                          {branch.primary && (
                            <span
                              style={{
                                marginLeft: "auto",
                                background: "#E3F2FD",
                                color: "#1565C0",
                                fontWeight: 700,
                                fontSize: 10,
                                letterSpacing: "0.8px",
                                textTransform: "uppercase",
                                padding: "2px 8px",
                                borderRadius: 100,
                              }}
                            >
                              HQ
                            </span>
                          )}
                        </div>

                        {/* Address */}
                        <p
                          style={{
                            fontSize: 12,
                            color: "#64748B",
                            marginBottom: 8,
                            lineHeight: 1.5,
                          }}
                        >
                          📍 {branch.address}
                        </p>

                        {/* Phone */}
                        <p
                          style={{
                            fontSize: 12,
                            color: "#475569",
                            marginBottom: 4,
                          }}
                        >
                          📞{" "}
                          <a
                            href={`tel:${branch.phone}`}
                            style={{ color: "#1565C0", textDecoration: "none" }}
                          >
                            {branch.phone}
                          </a>
                        </p>

                        {/* Email */}
                        <p
                          style={{
                            fontSize: 12,
                            color: "#475569",
                            marginBottom: 14,
                          }}
                        >
                          ✉️{" "}
                          <a
                            href={`mailto:${branch.email}`}
                            style={{ color: "#1565C0", textDecoration: "none" }}
                          >
                            {branch.email}
                          </a>
                        </p>

                        {/* CTA */}
                        <a
                          href={`mailto:${branch.email}`}
                          style={{
                            display: "block",
                            background:
                              "linear-gradient(135deg, #1565C0, #42A5F5)",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "9px 14px",
                            borderRadius: 8,
                            fontWeight: 600,
                            fontSize: 12,
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

              {/* Scroll-wheel hint overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(10,31,68,0.72)",
                  color: "#fff",
                  fontSize: 11,
                  fontFamily: "'Poppins', sans-serif",
                  padding: "5px 12px",
                  borderRadius: 100,
                  pointerEvents: "none",
                  backdropFilter: "blur(8px)",
                  zIndex: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Use buttons to zoom · Click a pin for details
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Responsive grid collapse */}
      <style>{`
        @media (max-width: 900px) {
          .map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
