"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BusinessContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

const [submitting, setSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setStatus({ type: "loading", msg: "Sending request..." });

  try {
    const res = await fetch(
      "https://api.doxer.ro/api/request_contact.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    if (res.ok && data.success) {
      setStatus({ type: "success", msg: "Message sent successfully!" });
      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    } else {
      setStatus({ type: "error", msg: data.message || "Server error. Try again." });
    }
  } catch (error) {
    setStatus({ type: "error", msg: "Server unreachable. Try again later." });
  }

  setSubmitting(false);
};


  return (
    <section className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 py-24">

      <div className="w-full max-w-xl bg-white border border-blue-200 rounded-3xl shadow-2xl p-10 space-y-10">

        <h2 className="text-3xl font-extrabold text-blue-700 text-center">
          Business Inquiry Form
        </h2>

        {/* STATUS MESSAGES */}
        {status.type === "loading" && (
          <p className="text-center text-blue-600 font-semibold">
            Sending request...
          </p>
        )}

        {status.type === "success" && (
          <p className="text-center text-green-600 font-semibold bg-green-100 p-2 rounded-xl border border-green-300">
            {status.msg}
          </p>
        )}

        {status.type === "error" && (
          <p className="text-center text-red-600 font-semibold bg-red-100 p-2 rounded-xl border border-red-300">
            {status.msg}
          </p>
        )}

        {/* Progress UI */}
        <div className="flex justify-between items-center text-sm font-semibold text-blue-700">
          <span className={step >= 1 ? "text-blue-700" : "text-gray-400"}>Info</span>
          <span className={step >= 2 ? "text-blue-700" : "text-gray-400"}>Service</span>
          <span className={step >= 3 ? "text-blue-700" : "text-gray-400"}>Details</span>
        </div>

        <div className="h-2 bg-blue-100 rounded-full">
          <div
            className={`h-2 bg-blue-600 rounded-full transition-all`}
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Step 1 */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <input
                name="name"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-4 p-4 border border-blue-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <input
                name="company"
                placeholder="Company (optional)"
                value={form.company}
                onChange={handleChange}
                className="w-full mt-4 p-4 border border-blue-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button
                type="button"
                onClick={next}
                className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Next →
              </button>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select service type…</option>
                <option value="purchase">Purchase Modules (IT200/W200)</option>
                <option value="outsourcing">Embedded Outsourcing</option>
                <option value="automation">Industrial Automation</option>
                <option value="custom">Custom Embedded Development</option>
                <option value="consulting">Technical Consulting</option>
                <option value="partnership">Collaboration / Partnership</option>
              </select>

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-xl mt-4 focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Budget (optional)</option>
                <option value="5k">Under $5,000</option>
                <option value="5-20k">$5,000 - $20,000</option>
                <option value="20-50k">$20,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>

              <div className="flex justify-between mt-6">
                <button
                  onClick={prev}
                  type="button"
                  className="px-6 py-3 border border-blue-400 rounded-xl text-blue-700 font-semibold hover:bg-blue-50"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Project description / requirements / questions…"
                value={form.message}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-600 outline-none resize-none"
              />

              <div className="flex justify-between mt-6">
                <button
                  onClick={prev}
                  type="button"
                  className="px-6 py-3 border border-blue-400 rounded-xl text-blue-700 font-semibold hover:bg-blue-50"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
                >
                  Submit Inquiry
                </button>
              </div>
            </motion.div>
          )}

        </form>

      </div>
    </section>
  );
}
