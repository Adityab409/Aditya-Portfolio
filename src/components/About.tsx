import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiColorSwatch, HiLightningBolt, HiAcademicCap } from "react-icons/hi";

const pillars = [
  {
    title: "BUILD",
    icon: HiCode,
    color: "text-emerald-400",
    border: "hover:border-emerald-500/50",
    bg: "bg-emerald-500/10",
    description: "Developing robust backend APIs and scalable relational database models using Spring Boot, Hibernate, and SQL.",
  },
  {
    title: "DESIGN",
    icon: HiColorSwatch,
    color: "text-amber-400",
    border: "hover:border-amber-500/50",
    bg: "bg-amber-500/10",
    description: "Creating intuitive user interfaces and wireframes in Figma to ensure cohesive user experience across web applications.",
  },
  {
    title: "SOLVE",
    icon: HiLightningBolt,
    color: "text-cyan-400",
    border: "hover:border-cyan-500/50",
    bg: "bg-cyan-500/10",
    description: "Solving real-world industry problems by applying layered design patterns, object-oriented principles, and clean code.",
  },
  {
    title: "LEARN",
    icon: HiAcademicCap,
    color: "text-indigo-400",
    border: "hover:border-indigo-500/50",
    bg: "bg-indigo-500/10",
    description: "Constantly expanding knowledge across microservices, cloud deployments, and advanced frontend frameworks.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0D14] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering Mindset & Developer Identity
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Narrative Biography Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
        >
          <h3 className="text-xl sm:text-3xl font-bold text-white leading-snug">
            Building robust backend architectures with clean code and human-centered design.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I am a Computer Engineering student at R.C. Patel Institute of Technology specializing in building enterprise-ready backend services and full stack applications. My expertise revolves around Core Java, Spring Boot, Spring MVC, JPA/Hibernate, and relational database management.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            I believe backend development is about more than just database tables and endpoints — it's about system predictability, performance, security, and crafting intuitive developer/user workflows.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group p-6 rounded-2xl bg-dark-card border border-dark-border transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${pillar.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${pillar.bg} ${pillar.color}`}>
                    <Icon className="text-xl" />
                  </div>
                  <h4 className="font-mono text-base font-bold tracking-wider text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;