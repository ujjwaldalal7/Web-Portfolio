import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import Certifications from "./pages/Certifications";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative text-white scroll-smooth">
      <ParticlesBackground />
      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="certifications">
        <Certifications />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Analytics />
    </div>
  );
}

export default App;
