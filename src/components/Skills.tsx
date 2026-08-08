import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiSpring,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
  SiSwagger,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";


interface SkillCategory {
  id: string;
  label: string;
  skills: {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java (8, 17, 21)", description: "Core Java, OOP, Collections, Multithreading, Lambdas & Streams", icon: FaJava, color: "text-amber-500" },
      { name: "C", description: "Procedural programming, Memory allocation, Structures", icon: VscCode, color: "text-blue-400" },
      { name: "TypeScript", description: "Type-safe Web Application Logic", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript (ES6+)", description: "DOM Manipulation, Async/Await, Web APIs", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", description: "Auto-configuration, REST APIs, Microservices, Security", icon: SiSpring, color: "text-emerald-400" },
      { name: "Spring MVC", description: "Layered architecture, Controllers, View Resolvers", icon: SiSpring, color: "text-emerald-500" },
      { name: "Hibernate / JPA", description: "ORM Entity mapping, Criteria Queries, Lazy loading", icon: SiHibernate, color: "text-amber-400" },
      { name: "Spring Data JPA", description: "Repository Interfaces, JPQL, Custom queries", icon: SiSpring, color: "text-teal-400" },
      { name: "JDBC", description: "Direct Database connectivity, PreparedStatements", icon: FaJava, color: "text-red-400" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", description: "Relational Schema, Complex Joins, Indexing, Transactions", icon: SiPostgresql, color: "text-sky-400" },
      { name: "MySQL", description: "Relational DB design, Foreign keys, Stored procedures", icon: SiMysql, color: "text-blue-400" },
    ],
  },
  {
    id: "web",
    label: "Web Technologies",
    skills: [
      { name: "Angular", description: "Components, Services, RxJS Streams, Routing", icon: SiAngular, color: "text-red-500" },
      { name: "HTML5", description: "Semantic markup, Accessibility, SEO structures", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", description: "Flexbox, CSS Grid, Custom animations, Responsive UI", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", description: "Modern ES6+ frontend interactivity", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    skills: [
      { name: "Postman", description: "API endpoint testing, Collections, Environment variables", icon: SiPostman, color: "text-orange-500" },
      { name: "Swagger / OpenAPI", description: "Interactive REST API documentation", icon: SiSwagger, color: "text-emerald-400" },
      { name: "Git & GitHub", description: "Version control, Branching workflows, PR reviews", icon: FaGitAlt, color: "text-orange-600" },
      { name: "IntelliJ IDEA", description: "Primary Java & Spring Boot IDE environment", icon: SiIntellijidea, color: "text-pink-500" },
      { name: "Eclipse / VS Code", description: "Development environments & debugging tools", icon: SiEclipseide, color: "text-purple-400" },
    ],
  },
  {
    id: "design",
    label: "UI/UX & Design",
    skills: [
      { name: "Figma", description: "High-fidelity component design & UI systems", icon: FaFigma, color: "text-pink-400" },
      { name: "Wireframing", description: "Low-fidelity UX structure & user flow mapping", icon: VscCode, color: "text-indigo-400" },
      { name: "Prototyping", description: "Interactive application visual mockups", icon: VscCode, color: "text-amber-400" },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 bg-[#090A0F] text-slate-100 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            02. Tech Stack & Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Technical Skillset Matrix
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Core technologies, frameworks, and engineering tools categorized by functional domain.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Category Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-mono font-medium rounded-xl border transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-950/40"
                    : "bg-dark-card border-dark-border text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {currentCategory.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative p-5 rounded-xl bg-dark-card border border-dark-border hover:border-emerald-500/30 hover:bg-dark-hover transition-all duration-300 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-dark-surface border border-dark-border group-hover:scale-110 transition-transform duration-200">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-semibold text-white text-base group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;