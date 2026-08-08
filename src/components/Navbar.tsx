import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#090A0F]/85 backdrop-blur-md border-b border-dark-border shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white"
        >
          {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-emerald-500/20">
            

          </span> */}
          <span className="tracking-wide">
            Aditya<span className="text-emerald-400 font-mono">.Sonawane</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#12141D]/80 border border-dark-border/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full ${isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all duration-200 shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-slate-300 hover:text-white bg-dark-card border border-dark-border rounded-lg"
        >
          {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Slideout Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#090A0F]/95 backdrop-blur-xl border-b border-dark-border px-6 pt-4 pb-6 mt-2"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-dark-card border border-transparent hover:border-dark-border transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center px-4 py-3 text-sm font-mono font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;