import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 px-6 md:px-20 py-4 transition-colors ${darkMode ? "bg-black/70 text-white" : "bg-white/80 text-black"} backdrop-blur-md`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          Ujjwal Dalal
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r from-blue-400 to-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-xs transition hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
