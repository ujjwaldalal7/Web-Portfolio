import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-[#0a0f1a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-cyan-400"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          I'm a passionate Full Stack Developer from India, who enjoys crafting
          clean, efficient, and user-friendly web applications. With a deep
          curiosity for new tech and a love for design, I bridge the gap between
          development and UX.
        </motion.p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Education</h3>
            <p className="text-gray-300">
              B.E. in Computer Engineering<br />
              XYZ University, 2021–2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Skills</h3>
            <p className="text-gray-300">
              JavaScript, React, Node.js, Express, MongoDB, Tailwind, Git, REST APIs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Strengths</h3>
            <p className="text-gray-300">
              Fast learner, attention to detail, strong problem-solving skills, and a collaborative mindset.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Interests</h3>
            <p className="text-gray-300">
              UI/UX design, open-source contributions, AI tools, and building side projects for fun.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
