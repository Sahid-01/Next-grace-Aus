"use client";

import { useState, useEffect } from "react";
import { BRANCHES } from "@/data/branches";

const ICONS = {
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.38 1.61.75 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.33 6.33l1.27-1.27a2 2 0 0 1 2.11-.45c.75.37 1.55.63 2.36.75a2 2 0 0 1 1.72 2z",
  mail: "M4 4h16v16H4z",
  location: "M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z",
};

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function OurBranch() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const width = useWindowWidth();

  // Responsive columns
  const getColumns = () => {
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  };
  const columns = getColumns();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        #our-branches * {
          box-sizing: border-box;
        }

        .branch-grid {
          display: grid;
          gap: 20px;
        }

        .branch-card {
          padding: 20px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #EBF0FB;
          box-shadow: 0 2px 20px rgba(10,31,68,0.06);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .branch-card:hover {
          box-shadow: 0 12px 40px rgba(21,101,192,0.15);
          transform: translateY(-4px);
        }

        .branch-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #EBF0FB;
        }

        .branch-flag {
          width: 48px;
          height: 32px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #E2E8F0;
          flex-shrink: 0;
        }

        .branch-country {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 2px 0;
        }

        .branch-office {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #1565C0;
          margin: 0;
        }

        .branch-info-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .branch-info-row:last-child {
          margin-bottom: 0;
        }

        .branch-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .branch-address {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: #64748B;
          margin: 0;
          line-height: 1.6;
          flex: 1;
          padding-top: 6px;
        }

        .branch-contact {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: #0A1F44;
          margin: 0;
          font-weight: 500;
          padding-top: 6px;
          word-break: break-word;
        }

        .branch-email {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: #1565C0;
          margin: 0;
          font-weight: 500;
          word-break: break-word;
          padding-top: 8px;
        }

        /* Mobile tweaks */
        @media (max-width: 639px) {
          #our-branches {
            padding: 60px 16px !important;
          }
          .branch-card {
            padding: 16px;
          }
          .branch-country {
            font-size: 14px;
          }
        }

        /* Tablet tweaks */
        @media (min-width: 640px) and (max-width: 1023px) {
          #our-branches {
            padding: 80px 20px !important;
          }
        }
      `}</style>

      <section
        id="our-branches"
        style={{
          padding: "100px 24px",
          background: "linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              Our Global Presence
            </span>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: "#0A1F44",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Our Branches Worldwide
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                color: "#64748B",
                marginTop: 12,
                marginBottom: 0,
              }}
            >
              {BRANCHES.length} offices across the globe
            </p>
          </div>

          {/* Branches Grid */}
          <div
            className="branch-grid"
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
          >
            {BRANCHES.map((branch, i) => (
              <div
                key={i}
                className="branch-card"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Flag & Header */}
                <div className="branch-card-header">
                  <img
                    src={branch.flag}
                    alt={`${branch.country} flag`}
                    className="branch-flag"
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="branch-country">{branch.country}</h3>
                    <p className="branch-office">{branch.office}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="branch-info-row">
                  <div className="branch-icon-box">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d={ICONS.location} />
                    </svg>
                  </div>
                  <p className="branch-address">{branch.address}</p>
                </div>

                {/* Contact */}
                <div className="branch-info-row">
                  <div className="branch-icon-box">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d={ICONS.phone} />
                    </svg>
                  </div>
                  <p className="branch-contact">{branch.phone}</p>
                </div>

                {/* Email */}
                <div className="branch-info-row">
                  <div className="branch-icon-box">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <polyline points="4,4 12,13 20,4" />
                    </svg>
                  </div>
                  <p className="branch-email">{branch.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}