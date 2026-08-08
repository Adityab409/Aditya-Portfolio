import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiCalendar, HiLocationMarker } from "react-icons/hi";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0B0D14] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            05. Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Education & Qualification
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-2xl bg-dark-card border border-dark-border hover:border-emerald-500/30 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-dark-border pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <HiAcademicCap className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  B.Tech in Computer Engineering
                </h3>
              </div>
              <p className="text-sm font-semibold text-emerald-400 pl-11">
                R.C. Patel Institute of Technology
              </p>
            </div>

            <div className="space-y-1 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-slate-300">
                <HiCalendar className="text-emerald-400" />
                <span>2023 – Present</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-xs text-slate-400 font-mono">
                <HiLocationMarker className="text-amber-400" />
                <span>Shirpur, Maharashtra</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            Pursuing Computer Engineering coursework focusing on Object-Oriented Software Engineering, Data Structures & Algorithms, Relational Database Management Systems (RDBMS), Operating Systems, and Web Technologies.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Data Structures", "Database Management", "Object-Oriented Programming", "Software Engineering", "Web Development"].map((course) => (
              <span key={course} className="px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono">
                {course}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
