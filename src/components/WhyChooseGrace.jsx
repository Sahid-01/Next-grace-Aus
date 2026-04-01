import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

const REASONS = [
  {
    icon: "check",
    title: "19+ Years of Excellence",
    desc: "Nearly two decades of proven track record in guiding students to their dream universities worldwide.",
  },
  {
    icon: "users",
    title: "50,000+ Success Stories",
    desc: "Join thousands of satisfied students who achieved their study abroad dreams with our expert guidance.",
  },
  {
    icon: "globe",
    title: "45 Global Branches",
    desc: "Extensive network across multiple countries ensuring personalized support wherever you are.",
  },
  {
    icon: "award",
    title: "98% Visa Success Rate",
    desc: "Industry-leading visa approval rates backed by experienced migration agents and consultants.",
  },
  {
    icon: "heart",
    title: "End-to-End Support",
    desc: "From course selection to post-arrival assistance, we're with you every step of the journey.",
  },
];

export function WhyChooseGrace() {
  return (
    <section
      id="why-choose-grace"
      className="bg-gradient-to-br from-surface-bluer via-surface-blue to-surface py-[100px] px-6 w-full"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-extrabold text-heading m-0 leading-[1.15]">
              Why Choose Grace International
            </h2>
          </div>
        </FadeIn>

        {/* Grid Layout */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 items-stretch justify-items-center">
          {REASONS.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] py-10 px-8 shadow-[0_2px_20px_rgba(10,31,68,0.06)] border border-surface-border transition-all duration-300 ease-in-out cursor-default h-full w-full max-w-[350px] flex flex-col items-center justify-start hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(21,101,192,0.14)] hover:border-surface-bluer">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center mb-6 shrink-0">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={ICONS[r.icon]} />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-lg text-heading mb-3 text-center min-h-[48px] flex items-center justify-center">
                  {r.title}
                </h3>
                <p className="font-poppins text-sm text-body leading-[1.7] m-0 text-center flex-1">
                  {r.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
