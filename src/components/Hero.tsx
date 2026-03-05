import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-6"
    >
      <div className="max-w-4xl text-center">

        <p className="text-orange-500 tracking-widest uppercase mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          Aditya <span className="text-orange-500">Sonawane</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Java Developer & UI/UX Designer
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Computer Engineering student passionate about building
          responsive web applications using Java technologies like
          Servlets, JSP, JDBC and Spring MVC while creating clean
          and user-friendly interfaces.
        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6 mt-10 flex-wrap">

          <a
            href="#projects"
            className="bg-orange-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-400 transition"
          >
            View Projects
          </a>

          <a
            href="/Aditya_Sonawane_CV.pdf"
            download
            className="border border-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition"
          >
            Download CV
          </a>

        </div>

        {/* Social Links */}

        <div className="flex justify-center gap-8 text-3xl mt-10 text-gray-400">

          <a
            href="https://github.com/Adityab409"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white transition" />
          </a>

          <a
            href="https://linkedin.com/in/aditya-sonawane-590166331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>

          <a
            href="https://instagram.com/adityabs_49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;