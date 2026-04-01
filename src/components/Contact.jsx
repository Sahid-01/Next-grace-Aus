import { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email) {
      setSent(true);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-[100px] px-6 w-full"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <div>
            <span className="font-poppins font-bold text-xs tracking-[2px] uppercase text-brand block mb-3">
              Get in Touch
            </span>
            <h2 className="font-poppins font-extrabold text-[clamp(28px,3.5vw,44px)] text-heading mb-5 leading-[1.2]">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-poppins text-base text-body leading-[1.7] mb-10">
              Our expert advisors are ready to guide you through every step of
              your study abroad journey.
            </p>
            {[
              { icon: "phone", label: "+61 (03) 9662 9020" },
              { icon: "mail", label: "melbourne@graceintlgroup.com.au" },
              { icon: "mappin", label: "Multiple Branches Across Australia" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-surface-blue flex items-center justify-center shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#676664"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[c.icon]} />
                  </svg>
                </div>
                <span className="font-poppins text-[15px] text-dark-text font-medium">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-surface rounded-3xl p-10 border border-surface-border shadow-[0_2px_20px_rgba(10,31,68,0.05)]">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center mx-auto mb-5">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  >
                    <path d={ICONS.check} />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-[22px] text-heading mb-2">
                  Message Sent!
                </h3>
                <p className="font-poppins text-body text-sm">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins font-bold text-xl text-heading mb-2">
                  Book Free Consultation
                </h3>
                {[
                  { key: "name", placeholder: "Full Name", type: "text" },
                  { key: "email", placeholder: "Email Address", type: "email" },
                  { key: "phone", placeholder: "Phone Number", type: "tel" },
                ].map((f) => (
                  <input
                    key={f.key}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) =>
                      setForm({ ...form, [f.key]: e.target.value })
                    }
                    className="w-full py-[13px] px-4 rounded-[10px] border-[1.5px] border-[#E2E8F0] font-poppins text-sm text-dark-text bg-white outline-none transition-colors duration-200 box-border focus:border-brand"
                  />
                ))}
                <textarea
                  placeholder="Tell us about your study plans..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full py-[13px] px-4 rounded-[10px] border-[1.5px] border-[#E2E8F0] font-poppins text-sm text-dark-text bg-white outline-none transition-colors duration-200 resize-none box-border focus:border-brand"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-br from-brand to-navy-light text-white border-none cursor-pointer py-3.5 rounded-[10px] font-poppins font-bold text-[15px] transition-all duration-250 shadow-[0_4px_16px_rgba(21,101,192,0.3)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(21,101,192,0.4)]"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
