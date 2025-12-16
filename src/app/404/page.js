"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-lg"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="text-6xl md:text-8xl font-bold text-emerald-600 mb-6"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-600 mb-8"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(16,185,129,0.3)" }}
          className="inline-block"
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-500 transition"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Optional subtle animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-blue-100/30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </main>
  );
}
