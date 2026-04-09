import { Destinations } from "@/app/components/Destinations";
import { CTA } from "@/app/components/CTA";

export default function DestinationsPage() {
  return (
    <>
      <div className="h-20 bg-gradient-to-br from-navy to-brand" />
      <Destinations />
      <CTA />
    </>
  );
}
