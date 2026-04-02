import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import DestinationsPage from "./pages/DestinationsPage";
import ProcessPage from "./pages/ProcessPage";
import UniversitiesPage from "./pages/UniversitiesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="w-screen max-w-full overflow-x-hidden">
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
          <WhatsappButton />
      </div>
    </Router>
  );
}
