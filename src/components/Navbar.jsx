import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, ICONS } from "./Icon";
import logoImg from "../assets/Grace-Logo.webp";
import GraceWhite from "../assets/GraceWhite.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = () => setOpen(false);
  const handleLogoClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/[0.97] backdrop-blur-[12px] shadow-[0_1px_24px_rgba(10,25,60,0.07)]"
            : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px] sm:h-[72px]">

          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 cursor-pointer no-underline shrink-0"
          >
            <img
              src={scrolled ? logoImg : GraceWhite}
              alt="Grace International Logo"
              className="w-[80px] h-[56px] sm:w-[100px] sm:h-[70px] object-contain"
            />
          </Link>

          {/* ── Desktop nav links (hidden below lg) ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className={`py-2 px-3.5 rounded-lg font-poppins font-medium text-sm no-underline transition-all duration-200 ${
                  scrolled
                    ? "text-[#2D3748] hover:bg-[#F0F4FF] hover:text-brand"
                    : "text-white hover:bg-white/15"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* ── Right side: CTA + hamburger ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA — shrinks text on small screens */}
            <Link
              to="/contact"
              className="bg-gradient-to-br from-brand to-navy-light text-white border-none cursor-pointer py-2 px-3 sm:py-2.5 sm:px-5 rounded-[10px] font-poppins font-semibold text-[11px] sm:text-[13px] shadow-[0_4px_16px_rgba(21,101,192,0.3)] transition-all duration-200 whitespace-nowrap no-underline block hover:-translate-y-px"
            >
              {/* Shorter label on very small screens */}
              <span className="sm:hidden">Consult</span>
              <span className="hidden sm:inline">Book Free Consultation</span>
            </Link>

            {/* Hamburger — visible below lg only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={`lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-navy hover:bg-[#F0F4FF]"
                  : "text-white hover:bg-white/15"
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

        {/* ── Mobile menu drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-4 pt-2 pb-5 shadow-[0_8px_32px_rgba(10,25,60,0.12)] flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.label}
                to={l.path}
                onClick={handleNavClick}
                className={`py-3.5 px-3 font-poppins font-medium text-[15px] text-[#2D3748] no-underline block transition-colors duration-150 hover:text-brand ${
                  i < NAV_LINKS.length - 1 ? "border-b border-[#F0F4FF]" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* Full CTA inside mobile menu */}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="mt-4 bg-gradient-to-br from-brand to-navy-light text-white text-center cursor-pointer py-3 px-5 rounded-[10px] font-poppins font-semibold text-[14px] shadow-[0_4px_16px_rgba(21,101,192,0.3)] no-underline block"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Backdrop overlay when menu is open ── */}
      {open && (
        <div
          className="fixed inset-0 z-[99] bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}