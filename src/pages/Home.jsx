import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "💻 Full Stack Developer",
  "🎨 UI/UX Designer",
  "🧠 Tech Explorer",
  "🧩 Problem Solver",
];

const quotes = [
  "Code never lies, comments sometimes do.",
  "Make it work, make it right, make it fast.",
  "Design adds value faster than it adds costs.",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000); // switch quote every 7s (typing takes time)

    return () => {
      clearInterval(roleTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  useEffect(() => {
  let index = 0;
  const currentQuote = quotes[quoteIndex];
  setTypedText("");

  // ✅ Safety check
  if (!currentQuote) return;

  const typing = setInterval(() => {
    index++;
    setTypedText(currentQuote.slice(0, index));

    // Stop when complete
    if (index >= currentQuote.length) {
      clearInterval(typing);
    }
  }, 50);

  return () => clearInterval(typing);
}, [quoteIndex]);


  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-12 relative z-10"
    >
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-md"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ujjwal Dalal
          </span>
        </h1>

        {/* Roles (Dynamic) */}
        <AnimatePresence mode="wait">
          <motion.p
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl text-cyan-400 mt-4 h-[32px]"
          >
            {roles[roleIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Typewriter Quote */}
        <p className="italic text-gray-400 mt-6 h-[40px]">
          “{typedText}
          <span className="animate-pulse">|</span>”
        </p>
      </motion.div>

      {/* Right Profile */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl opacity-30 animate-pulse" />
          <img
            src="/profile.jpg"
            alt="Ujjwal Dalal"
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
