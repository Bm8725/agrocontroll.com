"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaIndustry, FaChartLine } from "react-icons/fa";
import { GiCow, GiSprout } from "react-icons/gi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// Helper functions for chart data
const generateMilkData = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 50 + 50));
const generateRevenueData = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000 + 2000));

// Icon map for dynamic rendering
const iconMap = {
  GiCow: GiCow,
  GiSprout: GiSprout,
  FaIndustry: FaIndustry,
  FaChartLine: FaChartLine,
};

// Industry data
const industries = [
  {
    title: "Smart Livestock Farms",
    desc: "Automated monitoring and control systems with IoT and AI, optimizing livestock health and productivity.",
    icon: "GiCow",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    title: "Greenhouse & Crop Automation",
    desc: "SaaS-driven systems for irrigation, climate control, and growth analytics to maximize yield sustainably.",
    icon: "GiSprout",
    gradient: "from-lime-400 to-green-600",
  },
  {
    title: "Industrial Agriculture",
    desc: "Embedded systems and industrial firmware for large-scale farming, with remote monitoring and predictive maintenance.",
    icon: "FaIndustry",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    title: "Data & Analytics",
    desc: "AI-powered dashboards and reporting tools for actionable insights and data-driven farm management.",
    icon: "FaChartLine",
    gradient: "from-indigo-400 to-purple-600",
  },
];

export default function Industries() {
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 12 }, (_, i) => `Hour ${i + 1}`),
    datasets: [
      {
        label: "Milk Production (L)",
        data: generateMilkData(),
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
      {
        label: "Revenue ($)",
        data: generateRevenueData(),
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  });

  // Chart live update
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => ({
        ...prev,
        datasets: prev.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data
            .slice(1)
            .concat(
              Math.floor(
                Math.random() *
                  (dataset.label.includes("Milk") ? 50 : 1000) +
                  (dataset.label.includes("Milk") ? 50 : 2000)
              )
            ),
        })),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 bg-gray-50 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 opacity-30 blur-3xl pointer-events-none -z-20" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-600 opacity-30 blur-3xl pointer-events-none -z-20" />

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
      >
        Industries & Solutions
      </motion.h2>

      {/* Industry cards with dynamic gradient */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {industries.map((item, idx) => {
          const IconComponent = iconMap[item.icon];
          return (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative p-8 rounded-3xl shadow-xl bg-gradient-to-br ${item.gradient} text-white flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                <IconComponent size={36} />
              </div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-white/20 blur-xl pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Live Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-32 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Live Monitoring</h3>
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
            animation: { duration: 500, easing: "easeInOutQuad" },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "#E5E7EB" },
              },
              x: {
                grid: { color: "#E5E7EB" },
              },
            },
          }}
        />
      </motion.div>
    </section>
  );
}
