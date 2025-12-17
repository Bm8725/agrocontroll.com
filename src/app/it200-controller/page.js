"use client";

import { motion } from "framer-motion";
import { FaThermometerHalf, FaBluetooth, FaWifi, FaMobileAlt, FaBolt } from "react-icons/fa";
import { MdAcUnit, MdSecurity } from "react-icons/md";
import { IoCloudOutline, IoShieldCheckmark } from "react-icons/io5";
import { GiMilkCarton } from "react-icons/gi";

export default function IT200CoolingController() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">

      {/* Hero Glow */}
      <div className="absolute -top-10 -right-10 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/25 blur-[130px] sm:blur-[160px] rounded-full" />

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6 tracking-tight"
      >
        IT-200 Cooling Controller
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto text-blue-100 mb-10 sm:mb-14 text-base sm:text-lg px-2"
      >
        Advanced milk cooling controller designed for modern dairy farms. IT-200 delivers precision
        thermal management, energy-optimized compressor control, and optional IoT connectivity.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

        {/* PRODUCT HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 border border-blue-300/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-xl sm:shadow-2xl"
        >
          <div className="text-7xl sm:text-8xl md:text-9xl text-pink-400 text-center">
            ❄️
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 mb-3 text-center">
            Precision Cooling & Milk Preservation
          </h3>

          <p className="text-blue-100 text-center text-sm sm:text-base leading-relaxed">
            Maintains optimal cooling cycles to protect milk quality, reduce bacterial growth
            and meet dairy hygiene regulations.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 text-pink-300 text-xs sm:text-sm font-semibold uppercase tracking-wide">
            <span>HACCP</span>
            <span>Energy-Smart</span>
            <span>IoT-Ready</span>
          </div>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          {features.map((f, i) => (
            <Feature key={i} {...f} />
          ))}
        </motion.div>
      </div>

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="mx-auto mt-10 sm:mt-14 px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-pink-500 text-sm sm:text-lg text-white font-semibold shadow-lg w-fit"
      >
        IoT Ready • Cloud Analytics • Mobile App 🚀
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: <FaThermometerHalf size={26} />,
    title: "Automated Temperature Control",
    desc: "High-accuracy sensors and compressor logic maintain optimal cooling.",
  },
  {
    icon: <MdAcUnit size={26} />,
    title: "Compressor & Agitator Sequencing",
    desc: "Smart cycles reduce energy usage and extend lifespan.",
  },
  {
    icon: <FaBluetooth size={26} />,
    title: "Stand-Alone Operation",
    desc: "Ideal for farms without connectivity needs.",
  },
  {
    icon: <FaWifi size={26} />,
    title: "Optional IoT Upgrade",
    desc: "Live alerts & analytics through mobile and cloud.",
  },
  {
    icon: <IoCloudOutline size={26} />,
    title: "Cloud Integration",
    desc: "Secure remote access and trend reporting.",
  },
  {
    icon: <FaBolt size={26} />,
    title: "Energy Optimization",
    desc: "Up to 30% energy savings.",
  },
  {
    icon: <MdSecurity size={26} />,
    title: "Fail-Safe Alarms",
    desc: "Power and temperature deviation alerts.",
  },
  {
    icon: <GiMilkCarton size={26} />,
    title: "Milk Quality Protection",
    desc: "Supports hygiene standards and cooling curves.",
  },
  {
    icon: <IoShieldCheckmark size={26} />,
    title: "Compliance Ready",
    desc: "Regulatory support for dairy audits.",
  },
];

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 sm:gap-5 items-start bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-300/10 hover:bg-white/10 transition">
      <div className="text-pink-400">{icon}</div>
      <div>
        <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
        <p className="text-xs sm:text-sm text-blue-100">{desc}</p>
      </div>
    </div>
  );
}
