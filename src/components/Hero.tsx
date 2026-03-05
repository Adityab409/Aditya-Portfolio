import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiC,
} from "react-icons/si";
import Adityaimage from "../assets/Aditya.png";

const floatingIcons = [
  { icon: <SiHtml5 className="text-orange-500 text-5xl animate-floatX" />, style: "top-[15%] left-[10%]" },
  { icon: <SiCss3 className="text-blue-500 text-5xl animate-floatY" />, style: "top-[20%] right-[15%]" },
  { icon: <SiJavascript className="text-yellow-400 text-5xl animate-floatX-reverse" />, style: "bottom-[30%] left-[15%]" },
  { icon: <SiReact className="text-cyan-400 text-5xl animate-floatRotate" />, style: "bottom-[20%] right-[20%]" },
  { icon: <SiTailwindcss className="text-sky-400 text-5xl animate-floatX" />, style: "top-[55%] left-[35%]" },
  { icon: <SiC className="text-gray-400 text-5xl animate-floatY-reverse" />, style: "top-[40%] right-[35%]" },
  { icon: <FaFigma className="text-pink-500 text-5xl animate-floatX" />, style: "bottom-[10%] left-[45%]" },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute opacity-30 ${item.style}`}
        >
          {item.icon}
        </div>
      ))}

      {/* LEFT CONTENT */}
      <div className="max-w-xl space-y-8 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hello, <br />
          I'm <span className="text-green-400">ADITYA</span>
        </h1>

        <p className="text-gray-300 text-lg">
          Computer Engineering Student
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() =>
              alert(
                "📧 Email: adityabsonawane409@gmail.com\n📞 Mobile: 9309129443"
              )
            }
            className="bg-green-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-400 transition"
          >
            Hire Me
          </button>

          <a
            href="/Aditya_Sonawane_CV.pdf"
            download
            className="border border-gray-500 px-6 py-3 rounded-md hover:border-white hover:text-white transition"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-3xl pt-4">
          <a
            href="https://www.linkedin.com/in/aditya-sonawane-590166331/"
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
            <FaGithub className="hover:text-gray-300 transition" />
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

      {/* RIGHT IMAGE */}
      <div className="relative mt-12 md:mt-0 z-10">
        <div className="bg-gradient-to-tr from-green-500 to-cyan-400 p-[3px] rounded-xl shadow-2xl">
          <div className="bg-black rounded-xl p-3">
            <img
              src={Adityaimage}
              alt="Aditya"
              className="w-[320px] md:w-[420px] rounded-lg hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;