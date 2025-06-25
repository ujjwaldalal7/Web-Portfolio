import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      style={{
        minHeight: "60vh",
        background: "linear-gradient(120deg, #232526 0%, #1a2980 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 1rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.18)",
          padding: "2.5rem 2rem",
          maxWidth: 500,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#ffeb3b", marginBottom: "1rem", fontWeight: 700 }}>About Me</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          Hi! I'm Ujjwal, a Computer Science undergraduate passionate about software development, AI, and creative coding. I enjoy turning ideas into reality through code and design, and I'm always eager to learn new technologies and collaborate on exciting projects.
        </p>
      </motion.div>
    </section>
  );
}