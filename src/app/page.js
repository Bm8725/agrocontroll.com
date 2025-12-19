"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const modules = [
    {
      title: "W200 Controller",
      desc: "The W200 is a universal machine (controller)  designed for cleaning and automating milking parlor equipment. Engineered for durability and reliability, it ensures optimal performance, reduces manual labor, and maintains hygiene standards across all dairy operations. It is versatile, easy to integrate, and built to handle the demanding conditions of modern dairy farms.",
      img: "/w200.jpeg",
      link: "/w200-controller/",
      price: "$999,9",
    },
    {
      title: "iT200 Controller",
      desc: "The iT200 is a universal milk cooling tank system designed for adaptability across different milking parlors. Built for durability and hygiene, it can optionally integrate IoT monitoring and analytics, enabling farm managers to optimize cooling efficiency and track performance in real time.",
      img: "/cooling-agro.jpg",
      link: "/it200-controller/",
      price: "$1499,9",
    },
  ];

  const services = [
    "Embedded Development",
    "System Integration",
    "Custom Software Solutions",
    "Data Analytics & Visualization",
    "Consulting & Support",
  ];

  const technologies = [
    "React / Next.js",
    "TailwindCSS",
    "C / Embedded C",
    "GCC ARM Toolchain",
    "Modbus / CANbus / RS485",
    "Docker / CI-CD",
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-900 text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-emerald-800">
        <div className="absolute inset-0 z-0">
          <img src="/agro-controll1.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-2xl">AG</span>
          </div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Industrial Automation
            <span className="block text-emerald-300 mt-2 text-2xl md:text-3xl font-medium">Smart livestock farms solutions.</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Automation solutions for farms, management and embedded systems enhancing productivity, efficiency, and sustainability in modern agriculture.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/outsourcing-datails/" className="px-8 py-3 rounded-full bg-pink-600 text-white font-semibold uppercase tracking-wide hover:bg-pink-800 transition shadow-md hover:shadow-lg">Explore services</a>
            <a href="/contact/" className="px-8 py-3 rounded-full border border-gray-300 text-gray-100 font-semibold uppercase tracking-wide hover:bg-gray-100 hover:text-gray-900 transition">Contact us</a>
          </motion.div>
        </motion.div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-32 px-6 space-y-32 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-purple-200 text-center mb-16">Our Core Modules</h2>
        {modules.map((mod, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
            <img src={mod.img} alt={mod.title} className="w-full md:w-1/2 rounded-3xl shadow-xl border border-purple-400/20" />
            <div className="md:w-1/2 text-left space-y-6">
              <h3 className="text-3xl font-bold text-purple-300">{mod.title}</h3>
              <p className="text-purple-100 text-lg">{mod.desc}</p>
              <span className="px-4 py-2 text-sm bg-purple-800/50 rounded-full">Price: {mod.price}</span>
              <span className="px-4 py-2 text-sm bg-purple-800/50 rounded-full">Universal Machine | Dairy Hygiene | Automation</span>
              <a href={mod.link} className="inline-block mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-800 text-white font-semibold rounded-full shadow-md transition">Explore More</a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* IoT PLANS */}
      <section id="iot-plans" className="py-32 px-6 space-y-14 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-purple-200 mb-16">IT200 IoT Plans</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              name: "IoT extension Basic/month",
              price: "$28",
              features: [
                "Real-time tank monitoring",
                "Basic IoT analytics",
                "Email support",
              ],
            },
            {
              name: "IoT extension Advanced/month",
              price: "$38",
              features: [
                "Real-time tank monitoring",
                "Advanced IoT analytics",
                "Remote management dashboard",
                "Priority support",
                "Custom alerts & notifications",
              ],
              highlight: true,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0px 12px 24px rgba(0,255,255,0.3)" }}
              className={`p-8 rounded-3xl shadow-lg flex flex-col justify-between ${
                plan.highlight ? "border-cyan-400 border-2 bg-gray-900" : "border-gray-700 bg-gray-800"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-4xl font-extrabold text-cyan-400">{plan.price}</p>
              </div>
              <ul className="mb-6 space-y-2 text-gray-300">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="before:content-['✓'] before:text-green-400 before:mr-2">{f}</li>
                ))}
              </ul>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/connect-it200"
                className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg transition"
              >
                Connect IT200
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUTSOURCING + TECHNOLOGIES */}
      <section className="py-32 px-6 bg-gray-900 space-y-14 text-center">
        <h2 className="text-5xl font-bold text-purple-200">Outsourcing & Technologies</h2>
        <p className="text-purple-300 max-w-2xl mx-auto text-lg">We provide professional embedded development, system integration, custom software solutions, and industrial automation services.</p>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          {services.map((srv, i) => (
            <span key={i} className="px-6 py-3 bg-purple-800/60 rounded-xl border border-purple-500/30">{srv}</span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-lg mt-6">
          {technologies.map((tech, i) => (
            <span key={i} className="px-6 py-3 bg-purple-800/60 rounded-xl border border-purple-500/30">{tech}</span>
          ))}
        </div>
        <div className="mt-8">
          <a href="/outsourcing-datails/" className="inline-block px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-800 transition">More Details</a>
        </div>
      </section>
<section className="py-20 px-4 sm:px-8 bg-white text-slate-900 border-t border-blue-200">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-700 tracking-tight mb-12 sm:mb-16"
  >
    Smart Milk Cooling Automation
  </motion.h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative flex justify-center"
    >
      <div className="absolute inset-0 rounded-xl border-2 sm:border-4 border-blue-200 pointer-events-none"></div>

      <img
        src="/tank.jpg"
        className="rounded-xl shadow-lg border border-blue-100 w-full max-w-[480px] sm:max-w-full object-cover"
        alt="Cooling Unit"
      />

      <span className="absolute bottom-3 right-3 bg-white/90 border border-blue-300 px-2 sm:px-3 py-1 text-[9px] sm:text-xs text-blue-700 rounded">
        Cooling Tank
      </span>
    </motion.div>

    {/* TEXT + PARAMETERS */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-6 sm:space-y-8 text-center lg:text-left"
    >
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-8 max-w-xl mx-auto lg:mx-0">
        The IT200 milk cooling system optimizes temperature regulation, agitator
        timing, and energy usage — ensuring hygiene and milk preservation
        through industrial-grade automation. iT200 board electronic controller is compatible with variety of systems like DeLaval, GEA, and more systems. Just remove old controller and adapt our systems.
      </p>

      <div className="grid grid-cols-3 gap-3 sm:gap-6">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 sm:p-6 rounded-lg border border-blue-300 text-center shadow-sm"
        >
          <h3 className="text-blue-700 text-xl sm:text-2xl font-bold">4°C</h3>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1">TARGET</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 sm:p-6 rounded-lg border border-blue-300 text-center shadow-sm"
        >
          <h3 className="text-green-600 text-xl sm:text-2xl font-bold">ON</h3>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1">AGITATOR</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 sm:p-6 rounded-lg border border-blue-300 text-center shadow-sm"
        >
          <h3 className="text-blue-700 text-xl sm:text-2xl font-bold">98%</h3>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1">EFFICIENCY</p>
        </motion.div>
      </div>

      <motion.a
        href="/it200-controller/"
        whileHover={{ scale: 1.04 }}
        className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
      >
        Explore IT200 Control
      </motion.a>
    </motion.div>

  </div>
</section>



      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-center text-gray-100">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-semibold mb-6">
          Let’s Build Reliable Automation
        </motion.h2>
        <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="mb-10 max-w-2xl mx-auto text-gray-300">
          Contact us for embedded development, system integration, custom software, or industrial automation solutions.
        </motion.p>
        <motion.a whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' }} href="mailto:Lexsnowsrl@gmail.com" className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition shadow-md">
          Email Us Now
        </motion.a>
      </section>
    </main>
  );
}
