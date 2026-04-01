import { FadeIn } from "../components/FadeIn";

const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "One-on-one session to understand your goals, background, and best-fit options.",
  },
  {
    num: "02",
    title: "Course Selection",
    desc: "Curated shortlist of courses and universities matched to your profile.",
  },
  {
    num: "03",
    title: "Application",
    desc: "End-to-end application management ensuring accuracy and strong submissions.",
  },
  {
    num: "04",
    title: "Visa Processing",
    desc: "Document preparation and lodgement with our registered migration agents.",
  },
  {
    num: "05",
    title: "Departure Support",
    desc: "Pre-departure briefings, accommodation tips, and arrival guidance.",
  },
];

export function Process() {
  return (
    <section className="bg-gradient-to-br from-navy to-brand py-[100px] px-6 relative overflow-hidden w-full">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <FadeIn>
          <div className="text-center mb-[72px]">
            <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-extrabold text-white m-0">
              Your Journey in 5 Simple Steps
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-0 relative">
          {STEPS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="text-center px-4">
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-poppins font-extrabold text-[22px] text-white transition-all duration-300 cursor-default hover:bg-gradient-to-br hover:from-brand-light hover:to-brand hover:scale-110 ${
                    i === 0
                      ? "bg-gradient-to-br from-brand-light to-brand border-none"
                      : "bg-white/[0.08] border-2 border-white/15"
                  }`}
                >
                  {s.num}
                </div>
                <h3 className="font-poppins font-bold text-[15px] text-white mb-2">
                  {s.title}
                </h3>
                <p className="font-poppins text-[13px] text-white/60 leading-[1.6] m-0">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
