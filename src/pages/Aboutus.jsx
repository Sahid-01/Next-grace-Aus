import { Team } from "../components/Team";
import { CTA } from "../components/CTA";

export default function AboutusPage() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        }}
      />
      <Team />
      <CTA />
    </>
  );
}
