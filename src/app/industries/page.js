"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaChartLine } from "react-icons/fa";
import { GiCow, GiSprout } from "react-icons/gi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function Industries() {
  const industries = [
    {
      title: "Smart Livestock Farms",
      desc: "Automated monitoring and control systems using ARM Cortex-M controllers and IoT connectivity for livestock health, feeding, and environment management.",
      icon: <GiCow size={36} className="text-emerald-500" />,
    },
    {
      title: "Greenhouse & Crop Automation",
      desc: "SaaS-driven software solutions to optimize irrigation, climate control, and growth analytics, ensuring maximum yield and sustainability.",
      icon: <GiSprout size={36} className="text-green-500" />,
    },
    {
      title: "Industrial Agriculture",
      desc: "Scalable embedded systems and industrial firmware for large-scale farming operations, enabling remote monitoring and predictive maintenance.",
      icon: <FaIndustry size={36} className="text-blue-500" />,
    },
    {
      title: "Data & Analytics",
      desc: "Comprehensive dashboards and reporting tools for farm management, leveraging collected sensor data and AI-driven insights.",
      icon: <FaChartLine size={36} className="text-indigo-500" />,
    },
  ];

  // Live chart data simulation
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 12 }, (_, i) => `Hour ${i + 1}`),
    datasets: [
      {
        label: "Milk Production (L)",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50 + 50)),
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.3,
      },
      {
        label: "Revenue ($)",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000 + 2000)),
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => ({
        ...prev,
        datasets: prev.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data
            .slice(1)
            .concat(Math.floor(Math.random() * (dataset.label.includes("Milk") ? 50 : 1000) + (dataset.label.includes("Milk") ? 50 : 2000))),
        })),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-purple-900 via-purple-700 to-gray-50 overflow-hidden">
      {/* Top decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-800 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-700 opacity-30 blur-3xl pointer-events-none -z-20" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-indigo-600 opacity-30 blur-3xl pointer-events-none -z-20" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
      >
        Industries & Solutions
      </motion.h2>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {industries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 shadow-lg mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-purple-200 opacity-20 blur-xl pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Live Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-32 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
          Live Monitoring
        </h3>
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              tooltip: { mode: "index", intersect: false },
            },
            interaction: {
              mode: "nearest",
              axis: "x",
              intersect: false,
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </motion.div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none -z-10" />
    </section>
  );
}
