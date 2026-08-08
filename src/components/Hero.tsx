import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiDocumentDownload, HiChevronDown, HiTerminal, HiCheckCircle } from "react-icons/hi";
import { SiSpring, SiPostgresql, SiMysql, SiAngular, SiHibernate } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techStack = [
  { name: "Java 17/21", icon: FaJava, color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "Spring Boot", icon: SiSpring, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { name: "Spring MVC", icon: SiSpring, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { name: "Hibernate / JPA", icon: SiHibernate, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { name: "Angular", icon: SiAngular, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
];

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"terminal" | "stats">("terminal");

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#090A0F] text-slate-100 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column — Developer Identity & Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col text-left space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-slate-300 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Java Full Stack & Backend Engineer</span>
          </div>

          {/* Main Hero Header */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            ADITYA <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              SONAWANE
            </span>
          </h1>

          {/* Strong Positioning Statement */}
          <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Java Full Stack Developer building scalable backend systems, RESTful microservices, and thoughtful digital experiences.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Focused on robust layered architectures (Spring Boot / MVC), efficient database models (PostgreSQL & MySQL), and clean user interfaces.
          </p>

          {/* Visual Tech Stack Tags */}
          <div className="pt-2">
            <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-3">
              Core Tech Ecosystem
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${tech.bg} text-xs font-mono font-medium transition-transform duration-200 hover:scale-105`}
                  >
                    <Icon className={`text-sm ${tech.color}`} />
                    <span className="text-slate-200">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20 group"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="/Aditya_Sonawane_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono font-medium text-slate-200 bg-dark-card border border-dark-border rounded-xl hover:bg-dark-hover hover:border-slate-600 transition-all duration-200"
            >
              <HiDocumentDownload className="text-base text-emerald-400" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column — Interactive Developer Terminal & System Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md rounded-2xl bg-[#0C0E17] border border-dark-border p-5 shadow-2xl shadow-emerald-950/20 font-mono text-xs">
            
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-dark-border pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1 bg-dark-surface p-1 rounded-lg border border-dark-border text-[11px]">
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`px-2.5 py-0.5 rounded transition ${
                    activeTab === "terminal" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  terminal.sh
                </button>
                <button
                  onClick={() => setActiveTab("stats")}
                  className={`px-2.5 py-0.5 rounded transition ${
                    activeTab === "stats" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  metrics.json
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {activeTab === "terminal" ? (
              <div className="space-y-3 py-2 text-slate-300">
                <div className="flex items-center gap-2 text-slate-400">
                  <HiTerminal className="text-emerald-400 text-sm" />
                  <span>aditya@dev-workstation:~$</span>
                </div>

                <div className="p-3 rounded-xl bg-[#07080E] border border-dark-border space-y-1.5 text-[11px]">
                  <div className="text-emerald-400 font-bold">$ whoami</div>
                  <div className="text-slate-300">"Aditya Sonawane - Java Full Stack Developer"</div>
                  
                  <div className="text-emerald-400 font-bold pt-2">$ cat stack.config</div>
                  <div className="text-amber-300">Frameworks: [Spring Boot, Spring MVC, Hibernate]</div>
                  <div className="text-sky-300">Databases: [PostgreSQL, MySQL]</div>
                  <div className="text-emerald-300">Frontend: [Angular, JavaScript, HTML5/CSS3]</div>

                  <div className="text-emerald-400 font-bold pt-2">$ systemctl status backend-service</div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>● Active (running) - Listening on port 8080</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
                  <span>Status: Ready for Opportunities</span>
                  <span className="text-emerald-400">Spring Boot 3.x</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 py-2 text-slate-300">
                <div className="p-3 rounded-xl bg-[#07080E] border border-dark-border space-y-2 text-[11px]">
                  <div className="flex justify-between items-center text-slate-400 border-b border-dark-border pb-1.5">
                    <span>ENGINEERING CAPABILITY</span>
                    <span className="text-emerald-400">VERIFIED</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">RESTful APIs Built:</span>
                    <span className="text-amber-300 font-bold">15+ Endpoints</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Relational Entities:</span>
                    <span className="text-sky-300 font-bold">10+ Mapped Tables</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Architecture:</span>
                    <span className="text-emerald-400 font-bold">Layered MVC / DTO</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Security Model:</span>
                    <span className="text-purple-300 font-bold">JWT Authentication</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
                  <HiCheckCircle className="text-base text-emerald-400 flex-shrink-0" />
                  <span>Clean Engineering & Scalable Backend Focus</span>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <HiChevronDown className="text-lg text-emerald-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;