"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Team } from "@/components/Team";
import { WhyChooseGrace } from "@/components/WhyChooseGrace";
import { Faq } from "@/components/Faq";

const BranchMap = dynamic(() => import("@/components/BranchMap").then((mod) => mod.BranchMap), {
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
