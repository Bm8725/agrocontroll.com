"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const links = [
    { title: "Home", href: "#hero" },
    { title: "Products", href: "#products" },
    { title: "Features", href: "#features" },
    { title: "Industries", href: "#industries" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const social = [
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  const services = [
    { title: "Embedded Systems", href: "#products" },
    { title: "Industrial Firmware", href: "#products" },
    { title: "Analytics & Software", href: "#products" },
    { title: "Consulting", href: "#products" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <span className="font-semibold uppercase tracking-wide text-white text-xl">
              AgroControl Industries
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-6 max-w-sm">
            Delivering advanced industrial automation, embedded systems, and powerful analytics empowering smart manufacturing.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Navigation</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-emerald-400 transition duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            {services.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="hover:text-emerald-400 transition duration-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
          <p className="text-gray-400 text-sm">123 Industrial Park, Smart City</p>
          <p className="text-gray-400 text-sm">Email: info@agrocontrol.com</p>
          <p className="text-gray-400 text-sm">Phone: +01 234 567 890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} AgroControl Industries. All rights reserved.
      </div>
    </footer>
  );
}
