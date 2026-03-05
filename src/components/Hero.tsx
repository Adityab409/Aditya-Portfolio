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
  { icon: <SiHtml5 className="text-orange-400 text-4xl" />, style: "top-[20%] left-[20%]" },
  { icon: <SiCss3 className="text-blue-400 text-4xl" />, style: "top-[35%] right-[25%]" },
  { icon: <SiJavascript className="text-yellow-300 text-4xl" />, style: "bottom-[25%] left-[30%]" },
  { icon: <SiReact className="text-cyan-300 text-4xl" />, style: "bottom-[20%] right-[20%]" },
  { icon: <SiTailwindcss className="text-sky-300 text-4xl" />, style: "top-[55%] left-[45%]" },
  { icon: <SiC className="text-gray-300 text-4xl" />, style: "top-[45%] right-[40%]" },
  { icon: <FaFigma className="text-pink-400 text-4xl" />, style: "bottom-[15%] left-[55%]" },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6"
    >

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-20 
      bg-[radial-gradient(circle,rgba(255,115,0,0.25)_1px,transparent_1px)]
      [background-size:50px_50px]" />

      {/* floating icons */}
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute opacity-30 hover:scale-110 transition ${item.style}`}
        >
          {item.icon}
        </div>
      ))}

      {/* CENTER CONTENT */}
      <div className="text-center z-10 max-w-3xl">

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
          ADITYA
        </h1>

        <p className="text-orange-400 text-xl mt-4 tracking-widest uppercase">
          Computer Engineering Student
        </p>

        {/* buttons */}
        <div className="flex justify-center gap-6 mt-10">

          <button
            onClick={() =>
              alert(
                "📧 Email: adityabsonawane409@gmail.com\n📞 Mobile: 9309129443"
              )
            }
            className="px-8 py-3 bg-orange-500 text-black font-semibold rounded-md
            hover:bg-orange-400 transition shadow-lg"
          >
            Hire Me
          </button>

          <a
            href="/Aditya_Sonawane_CV.pdf"
            download
            className="px-8 py-3 border border-orange-500 rounded-md
            hover:bg-orange-500 hover:text-black transition"
          >
            Download CV
          </a>

        </div>

        {/* social icons */}
        <div className="flex justify-center gap-8 text-3xl mt-10">

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
            <FaGithub className="hover:text-orange-400 transition" />
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

      {/* floating image */}
      <div className="absolute bottom-10 right-10 md:right-20">

        <img
          src={Adityaimage}
          alt="Aditya"
          className="w-[220px] md:w-[300px] rounded-xl
          shadow-[0_0_40px_rgba(255,115,0,0.6)]
          hover:scale-105 transition"
        />

      </div>

    </section>
  );
};

export default Hero;