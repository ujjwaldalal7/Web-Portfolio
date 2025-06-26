import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sign Language Detection",
    description:
      "A gesture recognition system to classify 20+ signs and improve accessibility.",
    tech: ["Python", "TensorFlow", "MediaPipe", "NumPy"],
    source: "https://github.com/ujjwaldalal7/AI-Project",
    demo: "#", // or real deployment link
  },
  {
    title: "PEN-COPY : E-Commerce Website",
    description:
      "A scalable MERN-stack shopping site with admin dashboard, user auth, and order tracking.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    source: "https://github.com/ujjwaldalal7/PEN-COPY",
    demo: "https://pen-copy.vercel.app/",
  },
  {
    title: "Jan-Seva-Setu : NGO Bridge",
    description:
      "A platform that connects NGOs and volunteers. Built with secure login and dashboard features.",
    tech: ["MongoDB", "React", "Node.js", "JWT"],
    source: "https://github.com/ujjwaldalal7/jan-seva-setu",
    demo: "https://jan-seva-setu.vercel.app/",
  },
  {
    title: "Air Yatra : Ticket Reservation System",
    description:
      "A platform for booking and managing flight tickets with real-time availability. Secure user authentication and admin dashboard.",
    tech: ["SQL", "React", "Node.js", "Tailwind"],
    source: "https://github.com/ujjwaldalal7/Air-Yatra",
    demo: "#",
  },
  {
    title: "Hand written Digit Recognition",
    description:
      "A machine learning project to recognize handwritten digits using neural networks.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
    source: "https://github.com/ujjwaldalal7/ELC-III",
    demo: "#",
  },
  {
  title: "Real-Time Cartoonify",
  description:
    "A live webcam-based system that applies cartoon effects to real-time video using adaptive contrast, edge detection, and quantization techniques.",
  tech: ["MATLAB", "Image Processing", "Canny Edge", "Bilateral Filter"],
  source: "https://github.com/ujjwaldalal7/ELC-IV",
  demo: "#",
}];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 min-h-screen px-6 md:px-20 py-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col"
>
  <div>
    <h3 className="text-2xl font-bold text-cyan-300 mb-2 line-clamp-2">
      {project.title}
    </h3>
    <p className="text-gray-300 mb-4 line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.slice(0, 4).map((tech, i) => (
        <span
          key={i}
          className="bg-cyan-600/20 border border-cyan-500 text-sm px-3 py-1 rounded-full text-cyan-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
  <div className="mt-auto flex space-x-4">
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-full font-medium flex items-center space-x-2"
    >
      <FaGithub />
      <span>View Source</span>
    </a>
    {project.demo !== "#" && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm bg-white/10 hover:bg-white/20 border border-white px-4 py-2 rounded-full font-medium flex items-center space-x-2"
      >
        <FaExternalLinkAlt />
        <span>Live Demo</span>
      </a>
    )}
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
