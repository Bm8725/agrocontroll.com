"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCogs, FaTools, FaShieldAlt } from "react-icons/fa";
import { MdWater, MdTimer, MdThermostat } from "react-icons/md";

export default function W200Solution() {
  const [temp, setTemp] = useState(45);
  const [cycle, setCycle] = useState("Idle");
  const [pump, setPump] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pump) {
        setTemp(t => Math.min(t + 2, 78));
      } else {
        setTemp(t => Math.max(t - 1, 45));
      }
    }, 800);
    return () => clearInterval(interval);
  }, [pump]);

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-28 px-6 text-white">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-300">
          W200 Stand-Alone CIP Controller
        </h1>
        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
          Industrial electronic controller for parlor washing systems:
          pump activation, detergent dosing, cycle sequencing & temperature regulation —
          engineered for reliability, not cloud dependency.
        </p>
<motion.div
  animate={{ rotate: [0, 5, -5, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="mt-10 text-9xl mx-auto text-pink-400"
>
  🧼
</motion.div>

      </motion.div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">

        {[
          {
            icon: <FaShieldAlt />,
            title: "Industrial Safety",
            desc: "Thermal + overload protection for pumps & valves."
          },
          {
            icon: <FaTools />,
            title: "Service-Friendly",
            desc: "Manual modes, diagnostic states, fault feedback."
          },
          {
            icon: <FaCogs />,
            title: "Deterministic Logic",
            desc: "Cycle sequencing and finite-state real-time control."
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-blue-800 border border-blue-600 rounded-2xl p-8 text-center shadow-2xl"
          >
            <div className="text-5xl text-cyan-300 mb-4">{box.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-200">{box.title}</h3>
            <p className="text-blue-100 text-sm">{box.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CONTROL PANEL */}
      <div className="max-w-6xl mx-auto bg-blue-800 border border-blue-600 rounded-3xl p-10 shadow-2xl mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-center text-cyan-300">
          Control Panel Simulation
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {/* Temperature */}
          <div>
            <MdThermostat className="text-5xl text-orange-300 mx-auto mb-3" />
            <p className="text-3xl font-bold">{temp}°C</p>
            <p className="text-blue-100 text-sm">Tank temperature</p>
          </div>

          {/* Pump */}
          <div>
            <MdWater className={`text-5xl mx-auto mb-3 ${pump ? "text-cyan-300" : "text-blue-500"}`} />
            <p className="text-xl font-bold">
              {pump ? "Pump Active" : "Pump Stopped"}
            </p>
            <button
              onClick={() => {
                setPump(p => !p);
                setCycle(pump ? "Idle" : "Hot Wash");
              }}
              className="mt-4 px-6 py-2 rounded-full bg-cyan-300 text-blue-900 font-semibold hover:bg-cyan-200 transition"
            >
              {pump ? "Stop Pump" : "Start Pump"}
            </button>
          </div>

          {/* Cycle */}
          <div>
            <MdTimer className="text-5xl text-cyan-300 mx-auto mb-3" />
            <p className="text-xl font-bold">{cycle}</p>
            <p className="text-blue-100 text-sm">Cycle state</p>
          </div>

        </div>
      </div>

      {/* CYCLE TYPES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-24">
        {[
          "Pre-Rinse",
          "Hot Wash + Detergent",
          "Final Rinse"
        ].map((phase, i) => (
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-blue-800 p-6 rounded-xl text-center border border-blue-600"
          >
            <p className="font-semibold text-lg text-cyan-200">{phase}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="mailto:contact@agrocontroll.com"
          className="px-10 py-4 bg-cyan-300 text-blue-900 rounded-full font-semibold hover:bg-cyan-200 transition shadow-xl"
        >
          Request Technical Sheet
        </a>
      </div>
    </section>
  );
}
