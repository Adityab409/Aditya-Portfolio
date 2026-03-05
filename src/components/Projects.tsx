import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const projects = [
  {
    title: "PetCare – Grooming & Veterinary Booking System",
    description:
      "An appointment-based platform for pet grooming and veterinary consultations built using Java technologies.",
    tech: ["Servlets", "JSP", "JDBC", "HTML", "CSS"],
    image: image1,
    link: "#",
  },
  {
    title: "Hotel Waste Redistribution System",
    description:
      "A system designed to collect surplus food from hotels and redistribute it to NGOs efficiently.",
    tech: ["Spring MVC", "Hibernate", "MySQL", "JSP"],
    image: image2,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0B0B0F] text-white py-20 px-6">

      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-orange-500">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500 transition"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-orange-400 transition"
              >
                View Project
              </a>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;