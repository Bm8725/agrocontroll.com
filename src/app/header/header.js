"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { title: "Home", href: "#hero" },
    {
      title: "Products",
      href: "#products",
      submenu: [
        { title: "PCB Controllers", href: "#pcb" },
        { title: "Firmware", href: "#firmware" },
        { title: "Analytics", href: "#analytics" },
      ],
    },
    { title: "Solutions", href: "#solutions" },
    { title: "Industries", href: "#industries" },
    { title: "About", href: "#about" },
  ];

  const social = [
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white border-b border-zinc-200 shadow-sm" : "bg-white/80 backdrop-blur"}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* BRAND */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-emerald-600/40 group-hover:ring-emerald-600 transition" />
            </div>
            <span className="font-semibold uppercase tracking-wide text-zinc-900">agro-controll.com</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link href={item.href} className="flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wide text-zinc-700 hover:text-zinc-900 rounded-full transition duration-300">
                  {item.title}
                  {item.submenu && <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {item.submenu && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300"
                    >
                      {item.submenu.map((sub, i) => (
                        <Link key={i} href={sub.href} className="block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-zinc-900 transition duration-200">
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}

            <a href="mailto:contact@agrocontroll.com" className="ml-4 px-6 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold uppercase tracking-wide hover:bg-emerald-500 transition duration-300">Contact</a>

            <div className="flex gap-3 ml-4">
              {social.map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 transition text-lg duration-300">
                  {item.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-zinc-800" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="h-16 px-6 flex items-center justify-between border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AG</span>
                </div>
                <span className="font-semibold uppercase text-zinc-900">Menu</span>
              </div>
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={26} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center gap-5 h-[calc(100%-4rem)] px-6 overflow-y-auto">
              {menuItems.map((item, idx) => (
                <div key={idx} className="w-full">
                  <button onClick={() => item.submenu && (item.open = !item.open)} className="w-full text-left flex justify-between items-center text-xl font-semibold uppercase tracking-wide text-zinc-900 px-6 py-3 rounded-full hover:bg-emerald-50 transition duration-300">
                    {item.title}
                    {item.submenu && <FiChevronDown className="transition-transform duration-300" />}
                  </button>

                  {item.submenu && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="flex flex-col items-center overflow-hidden">
                      {item.submenu.map((sub, i) => (
                        <Link key={i} href={sub.href} onClick={() => setMenuOpen(false)} className="w-full text-center text-lg text-zinc-700 px-6 py-2 rounded-full hover:bg-emerald-50 transition duration-200">
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <a href="mailto:contact@agrocontroll.com" className="mt-6 w-full px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-wide text-center transition duration-300 hover:bg-emerald-500">Contact</a>

              <div className="flex gap-4 mt-6">
                {social.map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 text-2xl transition duration-300">
                    {item.icon}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}