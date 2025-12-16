"use client";

import { motion } from "framer-motion";

export default function Home() {
  const products = [
    {
      title: "PCB Controllers",
      desc: "Industrial-grade PCB controllers with IoT connectivity for livestock automation.",
    },
    {
      title: "ARM Cortex-M Firmware",
      desc: "Reliable embedded firmware for real-time control and monitoring systems.",
    },
    {
      title: "Software & Analytics",
      desc: "Web and desktop applications for visualization, reporting and diagnostics.",
    },
  ];

  const features = [
    {
      title: "Industrial Reliability",
      desc: "Designed for harsh farm environments and continuous operation.",
    },
    {
      title: "Scalable Architecture",
      desc: "From small farms to large industrial installations.",
    },
    {
      title: "Professional Support",
      desc: "Engineering support throughout the entire lifecycle.",
    },
  ];

  return (
    <main className="flex flex-col overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-emerald-800 bg-[length:200%_200%] z-0"
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Subtle animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] animate-pulse-slow z-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-30 max-w-4xl mx-auto text-center"
        >
          {/* Brand badge */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">SM</span>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
          >
            Industrial Automation
            <span className="block text-emerald-300 mt-2">
              for Smart Livestock Farms
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto"
          >
            Embedded systems, ARM Cortex-M firmware, and industrial software engineered for reliable, scalable farm automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#products"
              className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition shadow-md hover:shadow-lg"
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-gray-300 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6 bg-zinc-900 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16 text-emerald-300"
        >
          Products & Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="p-8 bg-zinc-800 border border-zinc-700 rounded-xl hover:shadow-2xl transition hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-4 text-emerald-300">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 bg-zinc-950 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16 text-emerald-300"
        >
          Why Choose Smart Manufacturing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="p-8 border border-zinc-700 rounded-xl hover:shadow-xl transition hover:scale-105"
            >
              <h4 className="text-lg font-semibold mb-3 text-emerald-300">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-black text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-emerald-300"
        >
          Let’s Build Reliable Automation
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10 text-gray-400 max-w-2xl mx-auto"
        >
          Contact us for embedded development, system integration, or custom industrial automation solutions.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
          href="mailto:contact@agrocontroll.com"
          className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition shadow-lg"
        >
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
