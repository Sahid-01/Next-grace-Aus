import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

const TESTIMONIALS = [
  {
    name: "Dibika Darshandari",
    course: "Master of International Nursing — UOW",
    initials: "DD",
    text: "Grace International cleared my dilemma, taking full responsibility from briefing me on course details to selecting the best university and city. Truly life-changing guidance.",
  },
  {
    name: "Nisha Baniya",
    course: "MBA — CSU",
    initials: "NB",
    text: "I'm glad I chose Grace International. Their support, administration, and welcoming office environment are truly impressive. Everything was completed right on time.",
  },
  {
    name: "Sanjeet Parajuli",
    course: "Bachelor of Business — Torrens University",
    initials: "SP",
    text: "I feel fortunate to be associated with Grace International. Their support made my processing far more efficient than expected. I wholeheartedly recommend them.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-[100px] px-6 w-full">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-extrabold text-heading m-0">
              Clients are Talking
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] py-9 px-8 shadow-[0_2px_20px_rgba(10,31,68,0.06)] border border-surface-border transition-all duration-300 h-full hover:shadow-[0_12px_40px_rgba(21,101,192,0.12)] hover:-translate-y-1">
                {/* Quote icon */}
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="#BBDEFB"
                  stroke="none"
                  className="mb-4"
                >
                  <path d={ICONS.quote} />
                </svg>
                {/* Stars */}
                <div className="flex gap-[3px] mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="#FFC107"
                      stroke="none"
                    >
                      <path d={ICONS.star} />
                    </svg>
                  ))}
                </div>
                <p className="font-poppins text-[15px] leading-[1.7] text-dark-sub mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center font-poppins font-bold text-sm text-white shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-[15px] text-heading">
                      {t.name}
                    </div>
                    <div className="font-poppins text-xs text-muted">
                      {t.course}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
