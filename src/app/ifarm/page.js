"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IT200DashboardPlans() {
  const plans = [
    {
      name: "IT200 + 180€",
      price: "180€",
      features: ["Basic IoT Monitoring", "Embedded System Support", "Email Support"],
    },
    {
      name: "IT200 + 299€",
      price: "299€",
      features: ["Advanced IoT & Analytics", "Full Embedded & Firmware Support", "Priority Support"],
      highlight: true,
    },
  ];

  const [sensors, setSensors] = useState({
    tiltX: 0,
    tiltY: 0,
    tiltZ: 0,
  });

  const [historyX, setHistoryX] = useState(Array(10).fill(0));
  const [historyY, setHistoryY] = useState(Array(10).fill(0));
  const [historyZ, setHistoryZ] = useState(Array(10).fill(0));

  useEffect(() => {
    function handleMotion(event) {
      const x = event.accelerationIncludingGravity?.x ?? 0;
      const y = event.accelerationIncludingGravity?.y ?? 0;
      const z = event.accelerationIncludingGravity?.z ?? 0;

      setSensors({ tiltX: x, tiltY: y, tiltZ: z });
      setHistoryX((prev) => [...prev.slice(-9), x]);
      setHistoryY((prev) => [...prev.slice(-9), y]);
      setHistoryZ((prev) => [...prev.slice(-9), z]);
    }

    if (typeof window !== "undefined" && window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleMotion);
    }

    return () => {
      if (typeof window !== "undefined" && window.DeviceMotionEvent) {
        window.removeEventListener("devicemotion", handleMotion);
      }
    };
  }, []);

  const renderBars = (data, color) =>
    data.map((v, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: Math.min(Math.abs(v) * 10, 100) }}
        transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
        className={`flex-1 ${color} rounded`}
      />
    ));

  const safeToFixed = (value) => (value != null ? value.toFixed(2) : "0.00");

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 text-center mb-12">
        IT200 Plans & Live Demo
      </h1>

      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mb-16">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 24px rgba(0,255,255,0.4)" }}
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
                <li key={idx} className="before:content-['✓'] before:text-green-400 before:mr-2">
                  {f}
                </li>
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

      {/* Live sensor demo */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Live Phone Sensor Demo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-4 rounded-3xl shadow-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Tilt X</h3>
            <p className="text-2xl font-bold text-cyan-400 mb-4">{safeToFixed(sensors.tiltX)}</p>
            <div className="w-full h-32 flex items-end gap-1">{renderBars(historyX, "bg-cyan-500")}</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-3xl shadow-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Tilt Y</h3>
            <p className="text-2xl font-bold text-cyan-400 mb-4">{safeToFixed(sensors.tiltY)}</p>
            <div className="w-full h-32 flex items-end gap-1">{renderBars(historyY, "bg-magenta-500")}</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-3xl shadow-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Tilt Z</h3>
            <p className="text-2xl font-bold text-cyan-400 mb-4">{safeToFixed(sensors.tiltZ)}</p>
            <div className="w-full h-32 flex items-end gap-1">{renderBars(historyZ, "bg-green-400")}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
