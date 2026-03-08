import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] border-t border-gray-800 text-gray-400 py-10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          Aditya <span className="text-orange-500">Sonawane</span>
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-6">

          <a
            href="https://linkedin.com/in/aditya-sonawane-590166331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>

          <a
            href="https://github.com/Adityab409"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white transition" />
          </a>

          <a
            href="https://instagram.com/adityabs_49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Aditya Sonawane. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;