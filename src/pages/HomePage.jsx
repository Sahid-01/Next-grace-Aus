import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { CTA } from "../components/CTA";
import { Testimonials } from "../components/Testimonials";
import { Destinations } from "../components/Destinations";
import { Process } from "../components/Process";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { BranchMap } from "../components/BranchMap";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Process />
      <Testimonials />
      <Blog />
      <BranchMap />
      <CTA />
      <Contact />
    </>
  );
}
