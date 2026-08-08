import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06070B] border-t border-dark-border py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xs">
            AS
          </div>
          <div>
            <span className="text-white font-bold tracking-wider">ADITYA SONAWANE</span>
            <span className="text-slate-500 block text-[10px]">Java Full Stack Developer</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400">
          <a href="#home" className="hover:text-emerald-400 transition">Home</a>
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
          <a href="#experience" className="hover:text-emerald-400 transition">Experience</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="#education" className="hover:text-emerald-400 transition">Education</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-base text-slate-300">
            <a
              href="https://linkedin.com/in/aditya-sonawane-590166331"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Adityab409"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/adityabs_49"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-[10px] text-slate-500">
            © {new Date().getFullYear()} Aditya Sonawane. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;