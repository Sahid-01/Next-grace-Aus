import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

export default function TestimonialsPage() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        }}
      />
      <Testimonials />
      <CTA />
    </>
  );
}
