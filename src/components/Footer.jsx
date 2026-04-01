import { Link } from "react-router-dom";
import { ICONS } from "../components/Icon";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Study Abroad", path: "/destinations" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const SERVICES = [
  { title: "University Admission" },
  { title: "Visa Assistance" },
  { title: "IELTS / PTE Coaching" },
  { title: "Career Counselling" },
  { title: "Scholarship Guidance" },
];

const CONTACT_INFO = [
  { icon: "phone", text: "+61 (03) 9662 9020" },
  { icon: "mail", text: "melbourne@graceintlgroup.com" },
  { icon: "mappin", text: "Melbourne, Sydney & 45 branches" },
];

const SOCIAL = ["facebook", "twitter", "linkedin"];

export function Footer() {
  return (
    <footer className="bg-navy pt-[72px] px-6 pb-8 w-full box-border">
      <div className="max-w-[1200px] mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-14">
          {/* Brand column */}
          <div className="text-left">
            {/* Logo */}
            <div className="mb-5">
              <img
                src="../src/assets/G.png"
                alt="Grace International Logo"
                className="w-[90px] h-[90px] object-contain block ml-0"
              />
            </div>

            {/* Tagline */}
            <p className="font-poppins text-sm text-white/55 leading-[1.75] mb-6 max-w-[280px] text-left">
              Where we connect life &amp; learning. Trusted by 50,000+ students
              across the globe for 19+ years.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 flex-wrap justify-start">
              {SOCIAL.map((s) => (
                <button
                  key={s}
                  aria-label={s}
                  className="w-9 h-9 rounded-[10px] bg-white/[0.07] flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/10 shrink-0 hover:bg-brand hover:border-brand"
                >
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[s]} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-xs text-white mb-5 tracking-[1.5px] uppercase">
              Quick Links
            </h4>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className="font-poppins text-sm text-white/50 mb-2.5 cursor-pointer transition-colors duration-200 no-underline block text-left hover:text-brand-lighter"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-xs text-white mb-5 tracking-[1.5px] uppercase">
              Services
            </h4>
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="font-poppins text-sm text-white/50 mb-2.5 cursor-pointer transition-colors duration-200 text-left hover:text-brand-lighter"
              >
                {s.title}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-xs text-white mb-5 tracking-[1.5px] uppercase">
              Contact
            </h4>
            {CONTACT_INFO.map((c, i) => (
              <div key={i} className="flex gap-3 mb-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-lighter/[0.12] flex items-center justify-center shrink-0">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64B5F6"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[c.icon]} />
                  </svg>
                </div>
                <span className="font-poppins text-[13px] text-white/55 leading-[1.6] pt-1.5 break-words">
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/[0.08] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-2.5">
            <span className="font-poppins text-xs text-white/30">
              © 2025 Grace International Group. All rights reserved.
            </span>
            <span className="font-poppins text-xs text-white/30">
              MARA Registered Migration Agents
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
