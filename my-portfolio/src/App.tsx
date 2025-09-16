import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Talks from "./pages/Talks";


export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Outras rotas: */}
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/talks" element={<Talks />} />
      </Routes>
      <Footer />
    </div>
  );
}
