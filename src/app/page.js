"use client";

import { motion } from "framer-motion";

export default function Home() {
  const modules = [
    {
      title: "W200 Controller",
      desc: "Industrial IoT controller for livestock automation, engineered for high reliability and scalability.",
      img: "/agro-controll-iot.jpg",
      tags: ["IoT", "Embedded", "Industrial Automation"],
    },
    {
      title: "iT200 Controller",
      desc: "Smart IoT tank controller for monitoring and automation, optimizing farm efficiency and productivity.",
      img: "/agro-controll.com.png",
      tags: ["IoT", "Embedded", "Industrial Automation"],
    },
  ];

  const services = [
    {
      title: "Embedded Development",
      desc: "Custom firmware and embedded solutions tailored to your industrial automation needs.",
      icon: "⚡",
    },
    {
      title: "System Integration",
      desc: "Seamless integration of hardware and software modules for optimized farm operations.",
      icon: "🔧",
    },
    {
      title: "Data Analytics & Visualization",
      desc: "Analyze and optimize processes using actionable insights from your farm data.",
      icon: "📊",
    },
    {
      title: "Consulting & Support",
      desc: "Expert guidance and professional support to ensure smooth, scalable automation.",
      icon: "🤝",
    },
  ];

  const features = [
    { title: "Industrial Reliability", desc: "High uptime and robust performance under demanding conditions.", img: "/path/to/feature1.jpg" },
    { title: "Scalable Architecture", desc: "Easily integrate and expand automation solutions across multiple facilities.", img: "/path/to/feature2.jpg" },
    { title: "Professional Support", desc: "Expert guidance and quick response to ensure smooth operations.", img: "/path/to/feature3.jpg" },
  ];

  return (
    <main className="flex flex-col font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-blue-900 via-indigo-900 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-2xl">AG</span>
          </div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Industrial Automation
            <span className="block text-emerald-300 mt-2 text-2xl md:text-3xl font-medium">
              Two Core Modules & Expert Services
            </span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Delivering reliable embedded systems, industrial software, and professional outsourcing services for smart livestock farms.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#modules" className="px-8 py-3 rounded-full bg-pink-600 text-white font-semibold uppercase tracking-wide hover:bg-pink-800 transition shadow-md hover:shadow-lg">Explore Modules</a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-gray-300 text-gray-100 font-semibold uppercase tracking-wide hover:bg-gray-100 hover:text-gray-900 transition">Contact</a>
          </motion.div>
        </motion.div>
      </section>

      {/* MODULES SECTION */}
      <section id="modules" className="py-32 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Our Core Modules</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {modules.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.3, duration: 0.8 }} className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs uppercase tracking-wide text-gray-400 bg-gray-100 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Outsourcing & Consulting Services</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2, duration: 0.8 }} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Key Advantages</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.3, duration: 0.8 }} className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-center text-gray-100">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-semibold mb-6">
          Let’s Build Reliable Automation
        </motion.h2>
        <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="mb-10 max-w-2xl mx-auto text-gray-300">
          Contact us for embedded development, system integration, or custom industrial automation solutions.
        </motion.p>
        <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }} href="mailto:contact@agrocontroll.com" className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition shadow-md">
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
