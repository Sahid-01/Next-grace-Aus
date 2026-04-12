import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Grace International Australia",
  description:
    "Grace International Australia — Expert guidance for studying abroad. Trusted by 50,000+ students across the globe for 19+ years.",
  icons: {
    icon: "/assets/Grace.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollToTop />
        <div className="w-screen max-w-full overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
          <WhatsappButton />
        </div>
      </body>
    </html>
  );
}
