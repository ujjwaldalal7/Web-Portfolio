// src/pages/Hero.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../components/Background";

const roles = [
  "💻 Web Developer",
  "🎨 UI/UX Designer",
  "🧠 Tech Explorer",
  "🧩 Problem Solver",
];

const quotes = [
  "Code never lies, comments sometimes do.",
  "Make it work, make it right, make it fast.",
  "Design adds value faster than it adds costs.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => {
      clearInterval(roleTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <Background>
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-20 py-20 overflow-hidden gap-10 min-h-screen">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left z-10"
        >
          <div className="relative group bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/20 shadow-xl hover:scale-[1.01] transition-all duration-500">
            {/* Floating Name */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
            >
              Hi, I am <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
                Ujjwal Dalal
              </span>
            </motion.h1>

            {/* Animated Role */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mt-4"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>

            {/* Typewriter-style quote */}
            <motion.p
              key={quotes[quoteIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white/60 italic text-sm mt-6 h-6"
            >
              “{quotes[quoteIndex]}”
            </motion.p>
          </div>
        </motion.div>

        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mb-12 md:mb-0 z-10"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 group hover:scale-105 transition duration-300">
            <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition" />
            <img
              src="/profile.jpg"
              alt="Ujjwal Dalal"
              className="rounded-full object-cover w-full h-full border-4 border-white shadow-xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </Background>
  );
}
