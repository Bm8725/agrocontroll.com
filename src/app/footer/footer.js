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
    { title: "Consulting", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-zinc-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
            <span className="font-semibold uppercase tracking-wide text-gray-900 text-lg">
              Smart Manufacturing
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Providing industrial automation solutions, embedded systems, and analytics for smart livestock and commercial farms.
          </p>
          <div className="flex gap-4 mt-2">
            {social.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 text-xl transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Navigation</h4>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            {links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="hover:text-gray-900 transition">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            {services.map((service) => (
              <li key={service.title}>
                <Link href={service.href} className="hover:text-gray-900 transition">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
          <p className="text-gray-600 text-sm">Email: contact@smartmanufacturing.com</p>
          <p className="text-gray-600 text-sm">Phone: +1 234 567 890</p>
          <p className="text-gray-600 text-sm mt-2">123 Industrial Ave, Tech City</p>
        </div>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Smart Manufacturing. All rights reserved.
      </div>
    </footer>
  );
}