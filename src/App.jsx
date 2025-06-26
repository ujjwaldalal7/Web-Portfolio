import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
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
    </div>
  );
}

export default App;
