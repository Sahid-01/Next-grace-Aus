import { Destinations } from "../components/Destinations";
import { CTA } from "../components/CTA";

export default function DestinationsPage() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        }}
      />
      <Destinations />
      <CTA />
    </>
  );
}
