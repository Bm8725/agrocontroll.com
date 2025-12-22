"use client";

import { motion } from "framer-motion";
import { FaIndustry, FaChartLine } from "react-icons/fa";
import { GiCow, GiSprout } from "react-icons/gi";
import { useEffect, useState } from "react";

const iconMap = { GiCow, GiSprout, FaIndustry, FaChartLine };

const industries = [
  { title: "Smart Livestock Farms", desc: "Automated IoT & AI systems optimizing livestock health and productivity.", icon: "GiCow", color: "from-[#0F766E] to-[#14B8A6]" },
  { title: "Greenhouse & Crop Automation", desc: "SaaS-driven climate control and growth analytics for sustainable yield.", icon: "GiSprout", color: "from-[#065F46] to-[#10B981]" },
  { title: "Industrial Agriculture", desc: "Embedded systems with predictive maintenance for large-scale operations.", icon: "FaIndustry", color: "from-[#374151] to-[#6B7280]" },
  { title: "Data & Analytics", desc: "AI dashboards providing actionable insights and farm intelligence.", icon: "FaChartLine", color: "from-[#4F46E5] to-[#8B5CF6]" },
];

function Particle({ x, y, size, color, delay }) {
  return (
    <motion.div
      initial={{ y }}
      animate={{ y: [y, y + 20, y] }}
      transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay }}
      className={`absolute rounded-full ${color}`}
      style={{ width: size, height: size, left: x }}
    />
  );
}

export default function DarkLandingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 4,
      color: "bg-white/20",
      delay: Math.random() * 5,
    }));
    setParticles(temp);
  }, []);

  return (
    <div className="w-full bg-gray-900 text-white overflow-x-hidden relative min-h-screen">
      {/* Animated particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Gradient background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-[1200px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500 opacity-20 blur-3xl animate-pulse-slow -top-40 -left-64"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal-500 via-green-500 to-lime-400 opacity-15 blur-3xl animate-pulse-slow -bottom-64 -right-64"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Transforming Agriculture<br/>for a Smarter Future
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-3xl text-gray-300 text-lg md:text-xl mb-12">
          Leverage AI, IoT, and analytics to optimize your farm operations, increase yield, and make data-driven decisions seamlessly.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#industries" className="px-10 py-4 rounded-full bg-teal-500 text-gray-900 font-semibold hover:bg-teal-400 shadow-lg transition-all duration-300">
            Get Started
          </a>
          <a href="#learn-more" className="px-10 py-4 rounded-full border border-gray-700 text-gray-300 font-semibold hover:bg-gray-700 transition-all duration-300">
            Learn More
          </a>
        </motion.div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-32 px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-center mb-20">
          Our Solutions
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {industries.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div key={idx} initial={{ y: 40, opacity: 0, scale: 0.95 }} whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.15, duration: 0.6 }} className="relative p-8 rounded-3xl bg-gray-900/40 backdrop-blur-md border border-gray-700 shadow-lg flex flex-col items-center text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-500 group hover:shadow-teal-500/50">
                <div className={`w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={36} />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors duration-500">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gray-800 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Farm?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-gray-300 text-lg md:text-xl mb-10">
          Join hundreds of farms improving productivity with smart solutions and real-time insights.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#get-started" className="px-10 py-4 rounded-full bg-teal-500 text-gray-900 font-semibold hover:bg-teal-400 transition-all duration-300 shadow-lg">
            Get Started
          </a>
          <a href="#learn-more" className="px-10 py-4 rounded-full border border-gray-700 text-gray-300 font-semibold hover:bg-gray-700 transition-all duration-300">
            Learn More
          </a>
        </motion.div>
      </section>
    </div>
  );
}
