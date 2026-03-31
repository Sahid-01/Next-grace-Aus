import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import DestinationsPage from "./pages/DestinationsPage";
import ProcessPage from "./pages/ProcessPage";
import UniversitiesPage from "./pages/UniversitiesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { scroll-behavior: smooth; width: 100%; max-width: 100%; overflow-x: hidden; margin: 0 !important; padding: 0 !important; }
        body { font-family: 'Poppins', sans-serif; }
        #root { width: 100%; max-width: 100%; margin: 0 !important; padding: 0 !important; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          footer > div > div[style*="grid-template-columns: 2fr"] { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <Router>
        <div style={{ width: "100vw", maxWidth: "100%", overflowX: "hidden" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
