import Adityaimage2 from "../assets/Aditya2.png";

const About = () => {
  return (
    <section id="about" className="bg-[#0B0B0F] text-white py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={Adityaimage2}
            alt="Aditya Sonawane"
            className="w-72 rounded-xl border border-gray-700 shadow-lg"
          />
        </div>

        {/* Content */}
        <div>

          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a Computer Engineering student at R. C. Patel Institute of Technology,
            Shirpur. My primary interest lies in building full-stack web applications
            using Java technologies such as Servlets, JSP, JDBC and Spring MVC.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Along with backend development, I enjoy UI/UX design and frequently
            work with Figma to create wireframes and prototypes focused on
            user-centered design.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I enjoy solving real-world problems through technology and continuously
            learning new tools that improve both development and design workflows.
          </p>

          {/* Download CV */}

          <a
            href="/Aditya_Sonawane_CV.pdf"
            download
            className="bg-orange-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-400 transition"
          >
            Download CV
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;