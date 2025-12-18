"use client";

import { useState, useEffect } from "react";

export default function AboutTypingWithSignature() {
  const lines = [
    "From blinking LEDs to complex IoT systems...",
    "Years of embedded C programming, microcontrollers, and real-time systems...",
    "Building dashboards in Next.js and React for smart farm monitoring...",
    "Integrating sensors, cooling systems, and livestock tracking into seamless solutions...",
    "Optimizing farms with automation, digitalization, and cloud-connected systems...",
    "Turning ideas into reliable, industrial-grade smart farm technologies.",
    "— BM, CEO", // Signature at the end
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return; // Stop when all lines are done

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);
      if (charIndex < lines[lineIndex].length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        // Move to next line after a short delay
        setCharIndex(0);
        setDisplayedText((prev) => prev + "\n");
        setLineIndex(lineIndex + 1);
      }
    }, 50); // Typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black px-6">
      <pre className="text-white text-2xl md:text-3xl font-semibold whitespace-pre-wrap text-center">
        {displayedText}
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
}
