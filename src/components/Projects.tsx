import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCode, HiX, HiCheckCircle, HiStar, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import estateflowImg from "../assets/estateflow.png";
import agroconnectImg from "../assets/agroconnect.png";
import hotelwasteImg from "../assets/hotelwaste.png";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: "In Progress" | "Live" | "GitHub";
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  highlights: string[];
  architectureDetails: string[];
  image: string;
  projectUrl: string;
  isLive: boolean;
}

const projectsList: Project[] = [
  {
    id: "estateflow",
    title: "EstateFlow",
    subtitle: "Real Estate CRM Platform",
    status: "In Progress",
    featured: true,
    description: "Developing a scalable real estate management CRM platform with 15+ REST APIs using Spring Boot, Hibernate, JPA, and PostgreSQL.",
    problem: "Real estate agencies struggle with fragmented client inquiries, unorganized property listings, and manual lead tracking.",
    solution: "A unified full stack CRM solution with role-based access control, automated lead assignment, structured property entity relationships, and RESTful APIs.",
    tech: ["Spring Boot", "PostgreSQL", "React", "Hibernate", "JPA", "JWT", "REST APIs"],
    highlights: [
      "Layered architecture (Controller, Service, Repository)",
      "10+ Database Entities with relational mappings",
      "Robust CRUD operations & Validation",
      "Global Exception Handling",
      "JWT-based security authentication workflow",
    ],
    architectureDetails: [
      "REST Controllers serving JSON DTOs to React frontend",
      "Spring Data JPA repository layer connecting to PostgreSQL database",
      "Custom DTO mappers ensuring internal model encapsulation",
    ],
    image: estateflowImg,
    projectUrl: "https://github.com/Adityab409/EstatoFort.git",
    isLive: false,
  },
  {
    id: "agroconnect",
    title: "AgroConnect",
    subtitle: "Farm Equipment Rental System",
    status: "Live",
    featured: false,
    description: "Farm equipment rental platform enabling equipment listing, booking, and vendor management using a structured role-based workflow.",
    problem: "Small-scale farmers face high upfront costs for modern machinery, while equipment owners lack a direct channel to rent out idle tools.",
    solution: "An end-to-end web portal allowing farmers to browse, request, and rent equipment from verified vendors with real-time status updates.",
    tech: ["Spring MVC", "MySQL", "Hibernate", "JSP", "HTML/CSS"],
    highlights: [
      "5+ Core Business Modules",
      "10+ Database CRUD operations",
      "Equipment Listing & Search Filters",
      "Role-based Vendor & Farmer workflows",
    ],
    architectureDetails: [
      "Spring MVC Controller hierarchy managing HTTP requests",
      "Hibernate ORM handling MySQL entity persistence and relationships",
      "JSP views rendering dynamic dynamic server-side pages",
    ],
    image: agroconnectImg,
    projectUrl: "https://agroconnect-c006.onrender.com/",
    isLive: true,
  },
  {
    id: "hotel-waste",
    title: "Hotel Waste Redistribution",
    subtitle: "Surplus Food Logistics System",
    status: "GitHub",
    featured: false,
    description: "Web application for managing surplus food redistribution between hotels, food donors, and non-profit recipient organizations.",
    problem: "Massive edible food waste from commercial hotels fails to reach local shelters and NGOs efficiently due to poor coordination.",
    solution: "A centralized logistics platform bridging commercial donors and verified recipient NGOs for scheduled food collection and redistribution.",
    tech: ["Spring MVC", "MySQL", "Hibernate", "JSP"],
    highlights: [
      "6+ Operational Modules",
      "12+ CRUD workflows",
      "Donor Management Module",
      "Recipient Request & Matching Workflow",
    ],
    architectureDetails: [
      "Layered Spring MVC structure handling donor requests",
      "Relational schema mapping donors, NGOs, and food pickup logs",
    ],
    image: hotelwasteImg,
    projectUrl: "https://github.com/Adityab409/Hotel_Waste_Redistribution_System.git",
    isLive: false,
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsList.find((p) => p.featured) || projectsList[0];
  const secondaryProjects = projectsList.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#090A0F] text-slate-100 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            04. Case Studies & Software Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Real-world backend & full stack applications built with Spring Boot, Spring MVC, and relational databases.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* HERO FEATURED PROJECT SHOWCASE — EstateFlow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group rounded-3xl bg-dark-card border border-dark-border hover:border-emerald-500/40 transition-all duration-300 shadow-2xl p-6 sm:p-8 mb-12 overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                  <HiStar className="text-xs text-emerald-400" /> Featured Flagship Project
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                  {featuredProject.status}
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-emerald-400 font-mono text-sm mt-1">
                  {featuredProject.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-dark-surface border border-dark-border text-slate-200 text-xs font-mono font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights Bullet List */}
              <div className="grid sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                {featuredProject.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <HiCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={featuredProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-semibold text-slate-900 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20"
                >
                  <FaGithub className="text-base" />
                  <span>Open GitHub Repository</span>
                </a>

                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-medium text-slate-200 bg-dark-surface border border-dark-border rounded-xl hover:bg-dark-hover transition"
                >
                  <HiCode className="text-base text-emerald-400" />
                  <span>View Case Details</span>
                </button>
              </div>
            </div>

            {/* Right Project Title Cover Image */}
            <div className="lg:col-span-5 relative group/img rounded-2xl overflow-hidden border border-dark-border shadow-xl">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-72 lg:h-80 object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  {featuredProject.title} Cover
                </span>
                <a
                  href={featuredProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 transition"
                  aria-label="Open Project Link"
                >
                  <HiExternalLink size={16} />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl bg-dark-card border border-dark-border hover:border-emerald-500/30 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden border-b border-dark-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                    project.isLive
                      ? "bg-emerald-500/90 text-slate-950"
                      : "bg-dark-surface/90 border border-dark-border text-slate-200"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-slate-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-dark-border flex items-center justify-between">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-slate-900 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition"
                  >
                    {project.isLive ? <HiExternalLink className="text-sm" /> : <FaGithub className="text-sm" />}
                    <span>{project.isLive ? "Open Live Demo" : "Open GitHub Repo"}</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-white transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAILED CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#0F111A] border border-dark-border rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-dark-surface border border-dark-border text-slate-400 hover:text-white transition"
              >
                <HiX size={20} />
              </button>

              <div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  {selectedProject.status}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-emerald-400">{selectedProject.subtitle}</p>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
                  <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Problem Statement
                  </span>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Engineering Solution
                  </span>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Key Technical Features
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <HiCheckCircle className="text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-dark-surface border border-dark-border text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-dark-border flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-mono font-medium text-slate-400 hover:text-white transition"
                >
                  Close
                </button>
                <a
                  href={selectedProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono font-semibold text-slate-900 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition"
                >
                  {selectedProject.isLive ? <HiExternalLink /> : <FaGithub />}
                  <span>{selectedProject.isLive ? "Open Live Site" : "Open Repository"}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;