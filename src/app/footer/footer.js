"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaDog, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const links = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/" },
    { title: "Features", href: "/outsourcing-datails/" },
    { title: "Industries", href: "/industries" },
    { title: "Contact", href: "/contact" },
  ];

  const social = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon :  <FaTiktok/>, href: "/" },
  ];

  const services = [
    { title: "Terms and conditions", href: "/404/" },
    { title: "Policy of company", href: "/404/" },
    { title: "About", href: "/about/" },
    { title: "Consulting", href: "/outsourcing-datails/" },
  ];

  return (
    <footer className="bg-white text-blue-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <span className="font-semibold uppercase tracking-wide text-blue-900 text-xl">
              AgroControl Industries
            </span>
          </div>
          <p className="text-blue-700 text-sm leading-6 max-w-sm">
            Delivering advanced industrial automation, embedded systems, and analytics empowering smart manufacturing.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition duration-300 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">Navigation</h4>
          <ul className="flex flex-col gap-3 text-blue-700 text-sm">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-blue-900 transition duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">Company</h4>
          <ul className="flex flex-col gap-3 text-blue-700 text-sm">
            {services.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="hover:text-blue-900 transition duration-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">Contact</h4>
          <p className="text-blue-700 text-sm">123 Industrial Park, Romania</p>
          <p className="text-blue-700 text-sm">Phone: +49 234 567 890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-blue-200 pt-6 text-center text-blue-700 text-xs">
        &copy; {new Date().getFullYear()} AgroControl Industries. All rights reserved.
      </div>
    </footer>
  );
}
