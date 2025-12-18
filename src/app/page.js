"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [chartData, setChartData] = useState([50, 75, 30, 90, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(chartData.map(() => Math.floor(Math.random() * 100)));
    }, 3000);
    return () => clearInterval(interval);
  }, [chartData]);

  const modules = [
    {
      title: 'W200 Controller',
      desc: 'The W200 is a universal machine designed for cleaning and automating milking parlor equipment. Engineered for durability and reliability, it ensures optimal performance, reduces manual labor, and maintains hygiene standards across all dairy operations. It is versatile, easy to integrate, and built to handle the demanding conditions of modern dairy farms.',
      img: '/w200.jpeg',
      link: '/w200-controller/',
      price: '$999,9'
    },
    {
      title: 'iT200 Controller',
      desc: 'The iT200 is a universal milk cooling tank system designed for adaptability across different milking parlors. Built for durability and hygiene, it can optionally integrate IoT monitoring and analytics, enabling farm managers to optimize cooling efficiency and track performance in real time.',
      img: '/cooling-agro.jpg',
      link: '/it200-controller/',
      price: '$1499,9'
    }
  ];

  const services = [
    'Embedded Development',
    'System Integration',
    'Custom Software Solutions',
    'Data Analytics & Visualization',
    'Consulting & Support'
  ];

  const technologies = ['React / Next.js', 'TailwindCSS', 'C / Embedded C', 'GCC ARM Toolchain', 'Modbus / CANbus / RS485', 'Docker / CI-CD'];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-900 text-white overflow-hidden">

{/* HERO with responsive background image */}
<section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-emerald-800">
<div className="absolute inset-0 z-0">
<img src="/agro-controll.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-30" />
</div>
<div className="absolute inset-0 bg-black/30 z-10" />
<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-20 max-w-4xl mx-auto text-center">
<div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl">
<span className="text-white font-bold text-2xl">AG</span>
</div>
<motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
Industrial Automation
<span className="block text-emerald-300 mt-2 text-2xl md:text-3xl font-medium">Two Core Modules & Expert Services</span>
</motion.h1>
<motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
Embedded systems, industrial software, and professional outsourcing for smart livestock farms.
</motion.p>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-10 flex flex-wrap justify-center gap-4">
<a href="#modules" className="px-8 py-3 rounded-full bg-pink-600 text-white font-semibold uppercase tracking-wide hover:bg-pink-800 transition shadow-md hover:shadow-lg">Explore Modules</a>
<a href="#contact" className="px-8 py-3 rounded-full border border-gray-300 text-gray-100 font-semibold uppercase tracking-wide hover:bg-gray-100 hover:text-gray-900 transition">Contact</a>
</motion.div>
</motion.div>
</section>

      {/* MODULES with side layout + Explore More + Price */}
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

      {/* OUTSOURCING + TECHNOLOGIES + Services */}
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
      </section>

      {/* LIVE CHART / TANK COOLING VIEW */}
      <section className="py-32 px-6 space-y-14 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-purple-200">Live Metrics & Tank Cooling</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <div className="space-y-6">
            <p className="text-purple-100 text-lg">Monitor real-time metrics from cooling tanks, feed systems, and IoT sensors. Data updates automatically every few seconds for accurate insights.</p>
            <div className="flex justify-center md:justify-start gap-6">
              {chartData.map((value, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: value + 50 }} transition={{ duration: 1, type: 'spring', stiffness: 120 }} className="w-12 bg-gradient-to-t from-pink-600 to-purple-600 rounded-xl shadow-xl relative">
                  <span className="absolute top-[-1.5rem] w-full text-center text-purple-200 font-bold text-sm">{value}%</span>
                </motion.div>
              ))}
            </div>
          </div>
          <img src="cow.jpg" alt="Tank Cooling" className="w-full rounded-3xl shadow-xl border border-purple-400/20" />
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
        <motion.a whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' }} href="mailto:contact@agrocontroll.com" className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition shadow-md">
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
