import { Blog } from "../components/Blog";
import { CTA } from "../components/CTA";

export default function BlogPage() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        }}
      />
      <Blog />
      <CTA />
    </>
  );
}
