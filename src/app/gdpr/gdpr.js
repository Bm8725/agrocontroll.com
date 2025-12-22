"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GDPRBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for consent
    const consent = localStorage.getItem("gdprConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-3xl w-[90%] bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p className="text-gray-300 text-sm md:text-base">
        We use cookies and similar technologies to enhance your experience and analyze site usage. By continuing, you consent to our privacy policy.
        <a href="/privacy-policy/" className="text-teal-400 underline ml-1">Learn more</a>
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleReject}
          className="px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-300"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-full bg-teal-500 text-gray-900 font-semibold hover:bg-teal-400 transition-all duration-300"
        >
          Accept
        </button>
      </div>
    </motion.div>
  );
}
