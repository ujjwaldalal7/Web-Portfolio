import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-sm text-white/60 font-mono tracking-widest absolute top-4 right-6 z-20">
      {time.toLocaleTimeString()}
    </p>
  );
}
