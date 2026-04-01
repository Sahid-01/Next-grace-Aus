import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, ICONS } from "./Icon";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Study Abroad", path: "/destinations" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "Universities", path: "/universities" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-400 ease-in-out ${
        scrolled
          ? "bg-white/[0.97] backdrop-blur-[12px] shadow-[0_1px_24px_rgba(10,25,60,0.07)]"
          : "bg-transparent backdrop-blur-none shadow-none"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 cursor-pointer no-underline"
        >
          <img
            src="../src/assets/G.png"
            alt="Grace International Logo"
            className="w-[100px] h-[65px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav flex items-center gap-1"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              className={`bg-none border-none cursor-pointer py-2 px-3.5 rounded-lg font-poppins font-medium text-sm no-underline block transition-all duration-200 ${
                scrolled
                  ? "text-[#2D3748] hover:bg-[#F0F4FF] hover:text-brand"
                  : "text-white hover:bg-white/15 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger row */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-gradient-to-br from-brand to-navy-light text-white border-none cursor-pointer py-2.5 px-5 rounded-[10px] font-poppins font-semibold text-[13px] shadow-[0_4px_16px_rgba(21,101,192,0.3)] transition-all duration-200 whitespace-nowrap no-underline block hover:-translate-y-px"
          >
            Book Free Consultation
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className={`bg-none border-none cursor-pointer p-1 hidden mobile-menu-btn ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d={open ? ICONS.close : ICONS.menu} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-white px-6 pt-3 pb-5 shadow-[0_8px_32px_rgba(10,25,60,0.12)] flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              onClick={handleNavClick}
              className="bg-none border-none cursor-pointer text-left py-3 px-2 rounded-lg font-poppins font-medium text-[15px] text-[#2D3748] border-b border-[#F0F4FF] no-underline block"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
