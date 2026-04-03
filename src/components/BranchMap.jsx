// src/sections/BranchMap.jsx
// "Our Offices Around the World" section with interactive Leaflet map + branch cards

import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ── Fix default marker icons (Vite/Webpack asset issue) ───────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// ── Custom SVG pin marker ─────────────────────────────────────────────────
function createPin(isActive = false) {
  const bg = isActive ? "#0A1F44" : "#1565C0";
  const border = isActive ? "#64B5F6" : "#fff";
  return L.divIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        width: 32px; height: 40px;
      ">
        <div style="
          width: 32px; height: 32px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          background: ${bg};
          border: 2.5px solid ${border};
          box-shadow: 0 4px 14px rgba(21,101,192,0.45);
        "></div>
        <div style="
          position: absolute;
          top: 8px; left: 8px;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: ${border};
          transform: rotate(0deg);
        "></div>
      </div>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -44],
  });
}

// ── Fly-to helper ─────────────────────────────────────────────────────────
function FlyTo({ target }) {
  const map = useMap();
  if (target) map.flyTo([target.lat, target.lng], 12, { duration: 1.2 });
  return null;
}

// ── Branch data ───────────────────────────────────────────────────────────
const BRANCHES = [
  {
    id: 1,
    name: "Adelaide Office",
    city: "Adelaide",
    address: "Suite 2, Level 1, 9A Hindley St., Adelaide, SA 5000, Australia",
    phone: "+61 (08) 7225 7892",
    hotline: null,
    email: "adelaide@graceintlgroup.com",
    lat: -34.9211,
    lng: 138.587,
    primary: false,
  },
  {
    id: 2,
    name: "Auckland Office",
    city: "Auckland",
    address:
      "Suite 202, 87-93 Queen Street, Dingwall Building, Auckland, New Zealand",
    phone: "+64 95585152",
    hotline: null,
    email: "director.nz@graceintlgroup.com",
    lat: -36.8485,
    lng: 174.7633,
    primary: false,
  },
  {
    id: 3,
    name: "Brisbane Office",
    city: "Brisbane",
    address: "Level 5, 190 Edward Street, Brisbane 4000, Australia",
    phone: "+61 (08) 0732663358",
    hotline: null,
    email: "brisbane@graceintlgroup.com",
    lat: -27.4698,
    lng: 153.0251,
    primary: false,
  },
  {
    id: 4,
    name: "Canberra Office",
    city: "Canberra",
    address: "Suite 1.04/ 17-21 University Avenue City ACT 2601, Australia",
    phone: "+61 262 471 050",
    hotline: null,
    email: "canberra@graceintlgroup.com",
    lat: -35.2809,
    lng: 149.13,
    primary: false,
  },
  {
    id: 5,
    name: "Dandenong Office",
    city: "Dandenong",
    address: "Level 10, 14 Mason Street, Dandenong, VIC 3175, Australia",
    phone: "+61 (03) 70097653, +61 (0)431794684",
    hotline: null,
    email: "dandenong@graceintlgroup.com",
    lat: -37.9847,
    lng: 145.215,
    primary: false,
  },
  {
    id: 6,
    name: "Darwin Office",
    city: "Darwin",
    address: "43 Cavenagh Street, Darwin, NT, 0800 Level 1, Australia",
    phone: "+61 411 632 575",
    hotline: null,
    email: "darwin@graceintlgroup.com",
    lat: -12.4634,
    lng: 130.8456,
    primary: false,
  },
  {
    id: 7,
    name: "Glenroy Office",
    city: "Glenroy",
    address: "Unit 3/1 Post Office Pl, Glenroy, VIC 3046, Australia",
    phone: "+61 431 715 577",
    hotline: null,
    email: "glenroy@graceintlgroup.com",
    lat: -37.7025,
    lng: 144.9311,
    primary: false,
  },
  {
    id: 8,
    name: "Haymarket Office",
    city: "Haymarket",
    address:
      "Suite 453, Level 5, 311-315 Castlereagh St, Haymarket NSW 2000, Australia",
    phone: "+61 (02) 9286 3447",
    hotline: null,
    email: "central.aus@grace.edu.np",
    lat: -33.8795,
    lng: 151.2093,
    primary: false,
  },
  {
    id: 9,
    name: "Hobart Office",
    city: "Hobart",
    address: "Suite 105, Level 1, 86 Murray Street, Hobart TAS 7000, Australia",
    phone: "03 6289 6655",
    hotline: null,
    email: "tasmania@graceintlgroup.com",
    lat: -42.8821,
    lng: 147.3272,
    primary: false,
  },
  {
    id: 10,
    name: "Melbourne Office",
    city: "Melbourne",
    address: "Level 14, 282 Collins Street, Melbourne, VIC 3000, Australia",
    phone: "+61 (03) 9662 9020",
    hotline: null,
    email: "melbourne@graceintlgroup.com",
    lat: -37.8162,
    lng: 144.9631,
    primary: false,
  },
  {
    id: 11,
    name: "Parramatta Office",
    city: "Parramatta",
    address: "109 Church Street, Parramatta, NSW 2150, Australia",
    phone: "+61 (02) 9286 3447",
    hotline: null,
    email: "parramatta@grace.edu.np",
    lat: -33.8151,
    lng: 151.0011,
    primary: false,
  },
  {
    id: 12,
    name: "Perth Office",
    city: "Perth",
    address: "383 Hay St, Perth WA 6000, Australia",
    phone: "+61 (08) 93252445",
    hotline: null,
    email: "perth@graceintlgroup.com",
    lat: -31.9505,
    lng: 115.8605,
    primary: false,
  },
  {
    id: 13,
    name: "Strathfield Office",
    city: "Strathfield",
    address: "Unit 1/14 Boulevarde, Strathfield NSW 2135, Australia",
    phone: "+61 (02) 9286 3447",
    hotline: null,
    email: "strathfield@grace.edu.np",
    lat: -33.8729,
    lng: 151.0942,
    primary: false,
  },
  {
    id: 14,
    name: "Sydney Office",
    city: "Sydney",
    address:
      "Suite 1508, Level 15, 97-99 Bathurst Street, Sydney, NSW 2000, Australia",
    phone: "+61 (02) 9286 3447",
    hotline: null,
    email: "sydney@graceintlgroup.com",
    lat: -33.8751,
    lng: 151.2065,
    primary: true,
  },
];

export function BranchMap() {
  const [activeId, setActiveId] = useState(14);
  const markerRefs = useRef({});
  const activeBranch = BRANCHES.find((b) => b.id === activeId);

  const handleCardClick = (branch) => {
    setActiveId(branch.id);
    setTimeout(() => {
      const ref = markerRefs.current[branch.id];
      if (ref) ref.openPopup();
    }, 1300);
  };

  return (
    <section className="w-full bg-surface py-[100px] px-6 box-border">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-[Poppins] font-extrabold text-[clamp(28px,4vw,46px)] text-heading m-0 mb-3.5 leading-[1.15]">
            Our Offices Around the World
          </h2>
          <p className="font-poppins text-[15px] text-body max-w-[500px] mx-auto leading-[1.7]">
            With offices across Australia and New Zealand, expert guidance is
            never far away. Click a branch to explore.
          </p>
        </div>

        {/* Body: cards + map */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 items-start">
          {/* Branch card list */}
          <div
            className="flex flex-col gap-2.5 max-h-[480px] overflow-y-auto pr-0.5 md:grid-cols-1 grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-col"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#BBDEFB #EBF4FF",
            }}
          >
            {BRANCHES.map((branch) => {
              const isActive = branch.id === activeId;
              return (
                <div
                  key={branch.id}
                  className={`rounded-[14px] py-4 px-[18px] cursor-pointer transition-all duration-[220ms] ease-in-out border-[1.5px] shadow-[0_2px_10px_rgba(10,31,68,0.05)] ${
                    isActive
                      ? "bg-gradient-to-br from-navy to-brand border-transparent shadow-[0_8px_28px_rgba(21,101,192,0.30)]"
                      : "bg-white border-surface-border hover:border-surface-bluer hover:translate-x-1 hover:shadow-[0_4px_18px_rgba(21,101,192,0.10)]"
                  }`}
                  onClick={() => handleCardClick(branch)}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="w-[9px] h-[9px] rounded-full shrink-0"
                      style={{
                        background: isActive ? "#64B5F6" : "#1565C0",
                        boxShadow: isActive
                          ? "0 0 0 3px rgba(100,181,246,0.3)"
                          : "none",
                      }}
                    />
                    <span
                      className="font-poppins font-bold text-sm"
                      style={{ color: isActive ? "#fff" : "#0A1F44" }}
                    >
                      {branch.city}
                    </span>
                    {branch.primary && (
                      <span
                        className="ml-auto font-poppins font-bold text-[9px] tracking-[1px] uppercase py-0.5 px-2 rounded-full"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.15)"
                            : "#E3F2FD",
                          color: isActive ? "#90CAF9" : "#1565C0",
                        }}
                      >
                        HQ
                      </span>
                    )}
                  </div>

                  <p
                    className="font-poppins text-xs leading-[1.5] pl-[17px] m-0"
                    style={{
                      color: isActive ? "rgba(255,255,255,0.62)" : "#64748B",
                    }}
                  >
                    {branch.address}
                  </p>

                  {isActive && (
                    <>
                      <p className="font-poppins text-[11px] pl-[17px] mt-[5px] text-brand-lightest">
                        📞 {branch.phone}
                      </p>
                      {branch.hotline && (
                        <p className="font-poppins text-[11px] pl-[17px] mt-[5px] text-brand-lighter font-semibold">
                          🔥 Hotline: {branch.hotline}
                        </p>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Leaflet map */}
          <div className="rounded-[20px] overflow-hidden border border-[#E2ECF8] shadow-[0_8px_40px_rgba(10,31,68,0.10)] h-[480px] relative">
            <MapContainer
              center={[-28, 135]}
              zoom={4}
              style={{ width: "100%", height: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              <FlyTo target={activeBranch} />

              {BRANCHES.map((branch) => (
                <Marker
                  key={branch.id}
                  position={[branch.lat, branch.lng]}
                  icon={createPin(branch.id === activeId)}
                  ref={(r) => {
                    if (r) markerRefs.current[branch.id] = r;
                  }}
                  eventHandlers={{ click: () => setActiveId(branch.id) }}
                >
                  <Popup>
                    <div className="p-4 min-w-[230px] font-poppins">
                      {/* Popup header */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                        <span className="font-bold text-[15px] text-heading">
                          {branch.name}
                        </span>
                        {branch.primary && (
                          <span className="ml-auto bg-surface-blue text-brand font-bold text-[9px] tracking-[1px] uppercase py-0.5 px-2 rounded-full">
                            HQ
                          </span>
                        )}
                      </div>

                      {/* Address */}
                      <p className="text-xs text-dark-sub mb-1.5 leading-[1.5]">
                        📍{" "}
                        <span className="text-dark-text">{branch.address}</span>
                      </p>

                      {/* Phone */}
                      <p className="text-xs text-dark-sub mb-1.5 leading-[1.5]">
                        📞{" "}
                        <span className="text-dark-text">{branch.phone}</span>
                      </p>

                      {/* Hotline */}
                      {branch.hotline && (
                        <p className="text-xs text-dark-sub mb-1.5 leading-[1.5]">
                          🔥{" "}
                          <span className="text-dark-text font-semibold">
                            Hotline: {branch.hotline}
                          </span>
                        </p>
                      )}

                      {/* Email */}
                      <p className="text-xs text-dark-sub mb-3.5 leading-[1.5]">
                        ✉️{" "}
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-brand no-underline"
                        >
                          {branch.email}
                        </a>
                      </p>

                      {/* CTA */}
                      <a
                        href={`mailto:${branch.email}`}
                        className="block bg-gradient-to-br from-brand to-brand-light text-white no-underline py-[9px] px-3.5 rounded-lg font-semibold text-xs text-center"
                      >
                        Book Consultation →
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* Hint pill */}
            <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 bg-[rgba(10,31,68,0.72)] text-white text-[11px] font-poppins py-[5px] px-3.5 rounded-full backdrop-blur-[8px] z-[500] pointer-events-none whitespace-nowrap">
              Click a card or pin to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
