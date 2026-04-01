import { FadeIn } from "../components/FadeIn";
import { ICONS } from "../components/Icon";

const BLOGS = [
  {
    tag: "Visa",
    date: "May 14, 2025",
    title: "Partner Visa (Subclass 820/801) — Complete Guide",
    excerpt:
      "Everything you need to know about applying for a Partner Visa in Australia, from eligibility to processing timelines.",
  },
  {
    tag: "Students",
    date: "Feb 20, 2025",
    title: "Student Visa Subclass 500 — What You Need to Know",
    excerpt:
      "The Subclass 500 visa lets you study full-time in Australia. Here's a step-by-step breakdown of the process.",
  },
  {
    tag: "Migration",
    date: "Dec 02, 2024",
    title: "TSS Visa (SC 482) — Filling Australia's Skills Gap",
    excerpt:
      "Understand how the Temporary Skill Shortage visa works and how employers can sponsor overseas workers.",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="bg-white py-[100px] px-6 w-full"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between mb-14 flex-wrap gap-5">
            <div>
              <span className="font-poppins font-bold text-xs tracking-[2px] uppercase text-brand block mb-3">
                Insights
              </span>
              <h2 className="font-poppins text-[clamp(32px,4vw,48px)] font-extrabold text-heading m-0">
                Latest Articles & News
              </h2>
            </div>
            <button className="bg-none border-[1.5px] border-surface-bluer cursor-pointer py-2.5 px-6 rounded-[10px] font-poppins font-semibold text-sm text-brand transition-all duration-200 hover:bg-surface-blue">
              View All Posts →
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {BLOGS.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(10,31,68,0.06)] border border-surface-border transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(21,101,192,0.12)]">
                {/* Color band */}
                <div className="h-1.5 bg-gradient-to-r from-brand to-brand-light" />
                <div className="pt-7 px-7 pb-8">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="bg-surface-blue text-brand font-poppins font-bold text-[11px] py-1 px-3 rounded-full tracking-[0.5px]">
                      {b.tag}
                    </span>
                    <span className="font-poppins text-xs text-muted">
                      {b.date}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-[17px] text-heading mb-3 leading-[1.4]">
                    {b.title}
                  </h3>
                  <p className="font-poppins text-sm text-body leading-[1.65] mb-5">
                    {b.excerpt}
                  </p>
                  <span className="font-poppins font-bold text-[13px] text-brand flex items-center gap-1.5">
                    Read More
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1565C0"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    >
                      <path d={ICONS.arrow} />
                    </svg>
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
