"use client";

import Link from "next/link";
import { FadeIn } from "../components/FadeIn";

export function CTA() {
  return (
    <section className="py-20 px-6 bg-surface w-full">
      <FadeIn>
        <div className="max-w-[900px] mx-auto bg-gradient-to-br from-navy to-brand rounded-[28px] py-[72px] px-12 text-center relative overflow-hidden shadow-[0_24px_80px_rgba(10,31,68,0.28)]">
          <div className="absolute -top-[20%] -right-[5%] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[250px] h-[250px] rounded-full bg-white/[0.04] pointer-events-none" />
          <div className="relative">
            <h2 className="font-poppins font-extrabold text-[clamp(28px,4vw,44px)] text-white mb-4 leading-[1.2]">
              Start Your Study Abroad
              <br />
              Journey Today
            </h2>
            <p className="font-poppins text-[17px] text-white/[0.72] mb-10 max-w-[500px] mx-auto">
              Book a free consultation with our expert advisors and take the
              first step towards your dream education.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                href="/contact"
                className="bg-white text-brand border-none cursor-pointer py-3.5 px-9 rounded-xl font-poppins font-bold text-[15px] transition-all duration-250 shadow-[0_4px_16px_rgba(0,0,0,0.15)] no-underline block hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)]"
              >
                Book Free Consultation
              </Link>
              <button className="bg-white/10 text-white border border-white/25 cursor-pointer py-3.5 px-9 rounded-xl font-poppins font-semibold text-[15px] transition-all duration-250 backdrop-blur-[8px] hover:bg-white/[0.18]">
                Call +61 (03) 9662 9020
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
