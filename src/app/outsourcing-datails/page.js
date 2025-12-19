"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function DevOutsourcingDark() {
  const services = [
    { title: "Embedded Systems", desc: "Low-level embedded software for IoT sensors, controllers, and automation systems.", color: "from-pink-500 to-pink-700" },
    { title: "Web & Mobile Apps", desc: "Custom dashboards, web & mobile apps for farm operations and visualization.", color: "from-indigo-500 to-indigo-700" },
    { title: "IoT Solutions", desc: "Integration of IoT sensors for livestock monitoring, environment tracking, and automation.", color: "from-green-500 to-green-700" },
    { title: "Data Analytics", desc: "Analytics and visualization to optimize farm efficiency and predictive maintenance.", color: "from-yellow-500 to-yellow-700" },
    { title: "Cloud Integration", desc: "Secure cloud platforms for monitoring and analyzing farm data anywhere.", color: "from-purple-500 to-purple-700" },
    { title: "Farm Management", desc: "Digital management of livestock, feed, water, and milking schedules.", color: "from-orange-500 to-orange-700" },
    { title: "Farm Digitalization", desc: "Transforming traditional farms into smart, connected operations.", color: "from-teal-500 to-teal-700" },
    { title: "Smart Livestock Monitoring", desc: "Real-time monitoring of animal health, behavior, and productivity.", color: "from-red-500 to-red-700" },
  ];

  const technologies = [
    "C / C++ / Embedded C",
    "Next.js / React",
    "Python / Django",
    "Docker / Kubernetes",
    "MQTT / Modbus / CANbus",
    "Git / CI-CD",
    "IoT Dashboards",
    "Realtime Sensor Networks",
  ];

const codeLines = [
  "#include <stdio.h>",
  "#include \"Sensors.h\"",
  "#include \"Cloud.h\"",
  "",
  "// Setup function runs once at startup",
  "void setup(void) {",
  "    // Initialize serial communication at 9600 baud",
  "    Serial.begin(9600);",
  "",
  "    // Initialize sensors (temperature, humidity, etc.)",
  "    initSensors();",
  "",
  "    // Connect to cloud platform for monitoring",
  "    connectCloud();",
  "}",
  "",
  "// Main loop runs repeatedly",
  "void loop(void) {",
  "    // Read temperature from sensor",
  "    float temp = readTemperature();",
  "",
  "    // Monitor livestock health and behavior",
  "    monitorLivestock();",
  "",
  "    // Control cooling system based on temperature",
  "    controlCooling(temp);",
  "",
  "    // Wait for 1 second before next iteration",
  "    delay(1000);",
  "}",
];


  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < codeLines.length ? prev + 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Smart Farm & Dev Outsourcing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
        >
          Innovative solutions for embedded systems, IoT, farm digitalization, and modern dashboards. Automate, monitor, and optimize efficiently.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-400">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-r ${srv.color}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-100">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-700 via-pink-700 to-indigo-700 rounded-xl shadow-md p-6 text-center font-semibold text-white"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Code Terminal */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-400">Live C / Embedded Code</h2>
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(255, 0, 255,0.3)" }}
          className="bg-gray-900 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-pink-700"
        >
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-300 text-lg">
              Observe live code for smart farm sensors, cooling systems, and livestock monitoring.
            </p>
            <div className="bg-black rounded-lg p-4 shadow-inner h-48 overflow-y-auto font-mono text-pink-500">
              <AnimatePresence>
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <a
              href="/outsourcing-details"
              className="inline-block mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-400 rounded-full text-white font-semibold shadow-md transition"
            >
              More Details
            </a>
          </div>
          <img
            src="/agro-controll-iot.jpg"
            alt="Smart Farm Illustration"
            className="md:w-1/2 rounded-2xl shadow-xl border border-pink-700"
          />
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-purple-800 via-pink-700 to-indigo-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Ready to Digitize Your Farm?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-gray-300"
        >
          Contact us for embedded development, IoT integration, farm management, and smart digitalization solutions.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:Lexsnowsrl@gmail.com"
          className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-400 text-white font-semibold rounded-full shadow-md transition"
        >
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
