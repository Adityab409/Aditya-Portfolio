import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase, HiCalendar, HiOfficeBuilding } from "react-icons/hi";

const experiences = [
  {
    organization: "Symbiosis Institute",
    sponsor: "Sponsored by Capgemini",
    role: "Java Full Stack Developer Trainee",
    date: "August 2026",
    color: "emerald",
    highlights: [
      "Completed rigorous training in Core Java, JDBC, Hibernate, JPA, Spring Data JPA, Spring MVC, Spring Boot, Spring Cloud, and REST APIs.",
      "Built backend applications using Spring Boot, MySQL, PostgreSQL, and clean layered architecture.",
      "Implemented CRUD operations, input validation, custom exception handling, and relational database mappings.",
    ],
    tech: ["Spring Boot", "Spring MVC", "Hibernate", "PostgreSQL", "MySQL", "REST APIs", "Spring Data JPA"],
  },
  {
    organization: "R3 System India Pvt. Ltd.",
    sponsor: "",
    role: "Java Development Trainee",
    date: "July 2025",
    color: "amber",
    highlights: [
      "Developed Java applications leveraging Core Java, Collections Framework, and JDBC for database interactions.",
      "Worked with MySQL database schemas and explored Hibernate ORM for entity persistence.",
      "Implemented CRUD operations, robust exception handling, and Spring MVC web modules following MVC architecture.",
    ],
    tech: ["Core Java", "JDBC", "Hibernate", "MySQL", "Spring MVC", "Collections"],
  },
  {
    organization: "Lloyds Banking Group",
    sponsor: "Virtual Experience",
    role: "UX Design Virtual Experience",
    date: "May 2025",
    color: "cyan",
    highlights: [
      "Applied user-centered design methodologies including wireframing, prototyping, and user journey mapping.",
      "Designed digital solutions aimed at improving accessibility and user experience across digital banking applications.",
    ],
    tech: ["Figma", "Wireframing", "User Research", "Prototyping", "UI/UX"],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0B0D14] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            03. Industry Experience & Training
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Practical Engineering Journey
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-dark-border ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.organization + exp.role}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-dark-card border-2 border-emerald-500 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors duration-300">
                <HiBriefcase className="text-sm" />
              </div>

              {/* Card Body */}
              <div className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-emerald-500/30 transition-all duration-300 shadow-xl space-y-4">
                
                {/* Card Top Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-dark-border pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mt-1">
                      <span className="flex items-center gap-1 text-slate-300">
                        <HiOfficeBuilding className="text-emerald-400" />
                        {exp.organization}
                      </span>
                      {exp.sponsor && (
                        <span className="px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-amber-300 text-[10px] font-mono">
                          {exp.sponsor}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-slate-300">
                    <HiCalendar className="text-emerald-400" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="marker:text-emerald-400">
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;