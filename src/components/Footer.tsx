import Link from "next/link";
import Logo from "@/components/Logo";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Careers", href: "#" },
  ],
  Services: [
    { label: "Home Cleaning", href: "/services" },
    { label: "Plumbing", href: "/services" },
    { label: "Electrical", href: "/services" },
    { label: "HVAC & Heating", href: "/services" },
    { label: "Home Repairs", href: "/services" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Book a Service", href: "/book" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="container-xl px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 block">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner for all home services. We connect you with
              certified professionals for a better, more comfortable home—right
              when you need it.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 123 Main Street, New York, NY 10001</p>
              <p>📞 +1 (800) 555-DOOR</p>
              <p>✉️ hello@doorstephome.com</p>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-5 font-poppins">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-brand-teal transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-xl px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Doorstep Inc. All rights reserved.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-teal transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
