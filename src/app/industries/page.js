"use client";

import { motion } from "framer-motion";
import { FaIndustry, FaChartLine } from "react-icons/fa";
import { GiCow, GiSprout } from "react-icons/gi";

export default function Industries() {
  const industries = [
    {
      title: "Smart Livestock Farms",
      desc: "Automated monitoring and control systems using ARM Cortex-M controllers and IoT connectivity for livestock health, feeding, and environment management.",
      icon: <GiCow size={32} className="text-emerald-500" />,
    },
    {
      title: "Greenhouse & Crop Automation",
      desc: "SaaS-driven software solutions to optimize irrigation, climate control, and growth analytics, ensuring maximum yield and sustainability.",
      icon: <GiSprout size={32} className="text-green-500" />,
    },
    {
      title: "Industrial Agriculture",
      desc: "Scalable embedded systems and industrial firmware for large-scale farming operations, enabling remote monitoring and predictive maintenance.",
      icon: <FaIndustry size={32} className="text-blue-500" />,
    },
    {
      title: "Data & Analytics",
      desc: "Comprehensive dashboards and reporting tools for farm management, leveraging collected sensor data and AI-driven insights.",
      icon: <FaChartLine size={32} className="text-indigo-500" />,
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 px-6 bg-gradient-to-b from-purple-800 via-gray-50 to-gray-50 text-gray-900 overflow-hidden"
    >
      {/* Top subtle wave/gradient decoration */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-900 to-transparent pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-16 text-white md:text-purple-100"
      >
        Industries & Solutions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
        {industries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="p-8 bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 shadow-md">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}
