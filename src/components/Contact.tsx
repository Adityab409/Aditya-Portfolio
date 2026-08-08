import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#090A0F] text-slate-100 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            06. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            Have an idea worth building? <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Let's turn it into something real.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mt-4">
            Whether you're looking for a Java Full Stack developer, a backend engineer, or want to discuss a project — I'd love to connect.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-dark-card border border-dark-border space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:adityasonawane409@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-emerald-500/40 transition group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      adityasonawane409@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/aditya-sonawane-590166331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-blue-500/40 transition group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                      Aditya Sonawane
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/Adityab409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-purple-500/40 transition group"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <FaGithub className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">GitHub Repositories</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">
                      @Adityab409
                    </span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/adityabs_49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-pink-500/40 transition group"
                >
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                    <FaInstagram className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Instagram</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-pink-400 transition-colors">
                      @adityabs_49
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;