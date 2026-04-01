import { FadeIn } from "../components/FadeIn";

const DESTINATIONS = [
  { flag: "🇦🇺", name: "Australia", students: "12,000+", color: "#0057A8" },
  { flag: "🇬🇧", name: "United Kingdom", students: "8,500+", color: "#CC0000" },
  { flag: "🇨🇦", name: "Canada", students: "7,200+", color: "#E53935" },
  { flag: "🇺🇸", name: "USA", students: "5,800+", color: "#1A237E" },
  { flag: "🇳🇿", name: "New Zealand", students: "3,100+", color: "#006B3C" },
];

export function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-white py-[100px] px-6 w-full"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-poppins font-bold text-xs tracking-[2px] uppercase text-brand block mb-3"></span>
            <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-extrabold text-heading m-0">
              Top Study Destinations
            </h2>
          </div>
        </FadeIn>

        <div className="flex gap-5 flex-wrap justify-center">
          {DESTINATIONS.map((d, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] py-9 px-8 shadow-[0_2px_20px_rgba(10,31,68,0.06)] border border-surface-border text-center min-w-[180px] flex-[1_1_160px] max-w-[200px] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(21,101,192,0.12)]">
                <div className="text-[44px] mb-3.5">{d.flag}</div>
                <div className="font-poppins font-bold text-base text-heading mb-1.5">
                  {d.name}
                </div>
                <div
                  className="font-poppins font-semibold text-[13px]"
                  style={{ color: d.color }}
                >
                  {d.students} students
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
