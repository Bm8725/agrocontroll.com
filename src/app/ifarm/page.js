"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";

export default function IoTDashboardPresentation() {
  // Dummy data
  const [tempData, setTempData] = useState([
    { time: "08:00", temp: 22 },
    { time: "10:00", temp: 24 },
    { time: "12:00", temp: 26 },
    { time: "14:00", temp: 25 },
    { time: "16:00", temp: 24 },
    { time: "18:00", temp: 23 },
  ]);

  const [tankLevelData, setTankLevelData] = useState([
    { tank: "A", level: 78 },
    { tank: "B", level: 65 },
    { tank: "C", level: 50 },
    { tank: "D", level: 90 },
  ]);

  const stats = [
    { title: "Temperature", value: "24°C", change: "+2°C", color: "cyan" },
    { title: "Tank Level Avg", value: "71%", change: "-3%", color: "blue" },
    { title: "Active Pumps", value: "3", change: "", color: "green" },
    { title: "Alerts", value: "1", change: "+1", color: "red" },
  ];

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTempData((prev) =>
        prev.map((d) => ({ ...d, temp: d.temp + (Math.random() > 0.5 ? 1 : -1) }))
      );
      setTankLevelData((prev) =>
        prev.map((d) => ({ ...d, level: Math.min(100, Math.max(0, d.level + (Math.random() > 0.5 ? 1 : -1))) }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-8 py-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center mb-12 drop-shadow-lg">
        IoT Cooling Tank Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
            className={`bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center shadow-xl transition`}
          >
            <p className="text-gray-400 uppercase text-sm mb-2">{stat.title}</p>
            <p className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</p>
            {stat.change && <p className={`text-${stat.color}-300 text-sm`}>{stat.change}</p>}
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl mb-16">
        {/* Temperature Line Chart */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-4 text-center">Temperature Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={tempData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2c2c2c" />
              <XAxis dataKey="time" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#00ffff" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Tank Levels Bar Chart */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-4 text-center">Tank Levels</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tankLevelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2c2c2c" />
              <XAxis dataKey="tank" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="level" fill="#00ffff" barSize={40} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>


      {/* Dashboard Info */}
      <div className="max-w-4xl text-center text-gray-300 space-y-4">
        <p>
          This dashboard presents a real-time overview of IoT-enabled cooling tanks. It shows temperature trends, tank levels, active pumps, and alerts in a visually intuitive way.
        </p>
        <p>
          Data is updated continuously to simulate live monitoring. The dashboard is fully responsive, so it adapts to any device size while keeping the layout clean and readable.
        </p>
        <p>
          Future features can include historical trend analysis, predictive maintenance, and automated notifications for anomalies.
        </p>
      </div>
    </main>
  );
}
