import { Blog } from "@/app/components/Blog";
import { CTA } from "@/app/components/CTA";

export default function BlogPage() {
  return (
    <>
      <div className="h-20 bg-gradient-to-br from-navy to-brand" />
      <Blog />
      <CTA />
    </>
  );
}
