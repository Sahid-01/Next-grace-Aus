import { Services } from "../components/Services";
import { CTA } from "../components/CTA";

export default function ServicesPage() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        }}
      />
      <Services />
      <CTA />
    </>
  );
}
