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
    <main className="flex flex-col overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* SM badge */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">SM</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight">
            Industrial Automation
            <span className="block text-emerald-600">
              for Smart Livestock Farms
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
            Embedded systems, ARM Cortex-M firmware and industrial software
            engineered for reliable, scalable farm automation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#products"
              className="px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition"
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-zinc-300 text-zinc-800 font-semibold uppercase tracking-wide hover:bg-zinc-100 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6 bg-zinc-50">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-zinc-900">
          Products & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 bg-white border border-zinc-200 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-zinc-900">
                {item.title}
              </h3>
              <p className="text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-zinc-900">
          Why Smart Manufacturing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 border border-zinc-200 rounded-xl"
            >
              <h4 className="text-lg font-semibold mb-3 text-zinc-900">
                {item.title}
              </h4>
              <p className="text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
          Let’s Build Reliable Automation
        </h2>
        <p className="mb-10 text-zinc-400 max-w-2xl mx-auto">
          Contact us for embedded development, system integration or custom
          industrial automation solutions.
        </p>
        <a
          href="mailto:contact@agrocontroll.com"
          className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
