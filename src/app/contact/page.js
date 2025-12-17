"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPageDark() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(form);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-800 rounded-3xl shadow-xl p-10 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Send us a message and we will get back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-300">
                Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="p-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-8">
          <div className="bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">Contact Info</h3>
            <div className="flex items-center gap-4 text-gray-300">
              <FaEnvelope size={20} />
              <span>contact@agrocontroll.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaPhoneAlt size={20} />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaMapMarkerAlt size={20} />
              <span>123 Industrial Ave, Tech City</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6 text-gray-300 text-2xl">
              <a href="#" className="hover:text-blue-500 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                GitHub
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
