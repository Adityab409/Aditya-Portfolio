const Experience = () => {
  return (
    <section id="experience" className="bg-[#0B0B0F] text-white py-20 px-6">

      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-orange-500">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Experience 1 */}

        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition">

          <h3 className="text-2xl font-semibold text-orange-500">
            Java Training — R3sys Pvt Ltd
          </h3>

          <p className="text-gray-400 mb-4">July 2025</p>

          <p className="text-gray-300 leading-relaxed">
            Completed training in Core Java, Advanced Java and Spring Framework.
            Built full-stack web applications using Servlets, JSP, JDBC and Hibernate.
          </p>

        </div>

        {/* Experience 2 */}

        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition">

          <h3 className="text-2xl font-semibold text-orange-500">
            UX Design Virtual Experience — Lloyds Banking Group
          </h3>

          <p className="text-gray-400 mb-4">May 2025</p>

          <p className="text-gray-300 leading-relaxed">
            Worked on user-centered design methods including wireframing and
            prototyping. Designed solutions aimed at improving digital banking
            user experiences.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Experience;