"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { CTA } from "@/app/components/CTA";
import { Testimonials } from "@/app/components/Testimonials";
import { Process } from "@/app/components/Process";
import { Blog } from "@/app/components/Blog";
import { Contact } from "@/app/components/Contact";
import { Team } from "@/app/components/Team";
import { WhyChooseGrace } from "@/app/components/WhyChooseGrace";
import { Faq } from "@/app/components/Faq";

const BranchMap = dynamic(() => import("@/app/components/BranchMap").then((mod) => mod.BranchMap), {
  ssr: false,
  loading: () => <div style={{ height: 400 }} />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseGrace />
      <BranchMap />
      <Services />
      <Team />
      <Process />
      <Testimonials />
      <Blog />
      <Faq />
      <CTA />
      <Contact />
    </>
  );
}
