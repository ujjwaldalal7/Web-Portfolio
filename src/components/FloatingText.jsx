// src/components/FloatingText.jsx
import { useRef, useEffect } from "react";

export default function FloatingText({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 20;
      const y = ((clientY - top) / height - 0.5) * 20;
      el.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <h1
      ref={ref}
      className="text-4xl md:text-6xl font-extrabold transition-transform duration-300 ease-out"
    >
      {text}
    </h1>
  );
}
