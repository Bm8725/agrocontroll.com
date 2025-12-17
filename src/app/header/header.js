"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Products",
      href: "#products",
      submenu: [
        { title: "w200 ECO WASH CONTROLLER", href: "/w200-controller/" },
        { title: "iT200 ECO SMART TANK CONTROLLER", href: "/it200-controller/" },
        { title: "iFARM MANAGEMENT ", href: "/404/" },
      ],
    },
    { title: "Solutions", href: "/404/" },
    { title: "Industries", href: "/industries/" },
    { title: "About", href: "/" },
  ];

  const social = [
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -150 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] lg:w-[70%] rounded-3xl backdrop-blur-md shadow-lg transition-all duration-300 ${
          scrolled ? "bg-white border border-gray-200" : "bg-white/80"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          <Brand />
          <div className="hidden md:flex items-center gap-4">
            <DesktopMenu menuItems={menuItems} social={social} />
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="h-16 px-6 flex items-center justify-between border-b border-gray-200">
              <Brand label="Menu" />
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={26} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-start justify-start gap-2 mt-6 px-6">
              {menuItems.map((item, idx) => (
                <MobileMenuItem key={idx} item={item} setMenuOpen={setMenuOpen} />
              ))}

              <a
                href="mailto:contact@agrocontroll.com"
                className="mt-6 w-full px-6 py-3 rounded-full bg-blue-600 text-white font-semibold uppercase tracking-wide text-center hover:bg-blue-500 transition duration-300"
              >
                connect
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Brand
function Brand({ label }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">AG</span>
        </div>
        <div className="absolute inset-0 rounded-full ring-1 ring-indigo-600/40 group-hover:ring-indigo-600 transition" />
      </div>
      <span className="font-semibold uppercase tracking-wide text-gray-900">
        {label || "agro-controll.com"}
      </span>
    </Link>
  );
}

// Desktop Menu
function DesktopMenu({ menuItems, social }) {
  return (
    <nav className="flex items-center gap-4">
      {menuItems.map((item, idx) => (
        <div key={idx} className="relative group">
          <Link
            href={item.href}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-gray-900 rounded-full transition duration-300"
          >
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
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300"
              >
                {item.submenu.map((sub, i) => (
                  <Link
                    key={i}
                    href={sub.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-gray-900 transition duration-200"
                  >
                    {sub.title}
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      ))}

      <a
        href="mailto:contact@agrocontroll.com"
        className="ml-4 px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold uppercase tracking-wide hover:bg-blue-500 transition duration-300"
      >
        connect
      </a>
    </nav>
  );
}

// Mobile Menu Item
function MobileMenuItem({ item, setMenuOpen }) {
  const [open, setOpen] = useState(false);

  if (item.submenu) {
    return (
      <div className="w-full">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left flex justify-between items-center text-lg font-semibold uppercase tracking-wide text-gray-900 px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          {item.title}
          <FiChevronDown
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col pl-6 overflow-hidden"
            >
              {item.submenu.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left text-base text-gray-700 px-4 py-2 rounded-md hover:bg-blue-50 transition duration-200"
                >
                  {sub.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={() => setMenuOpen(false)}
      className="w-full block text-left text-lg font-semibold uppercase tracking-wide text-gray-900 px-6 py-3 rounded-full hover:bg-blue-50 transition duration-200"
    >
      {item.title}
    </Link>
  );
}
