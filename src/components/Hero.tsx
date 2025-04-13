
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaFigma } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiC,
  
} from 'react-icons/si';
import Adityaimage from '../assets/Aditya.png'

const floatingIcons = [
    { icon: <SiHtml5 className="text-orange-500 text-6xl animate-floatX" />, style: 'top-[10%] left-[30%]' },
    { icon: <SiCss3 className="text-blue-500 text-6xl animate-floatY" />, style: 'top-[20%] right-[35%]' },
    { icon: <SiJavascript className="text-yellow-400 text-6xl animate-floatX-reverse" />, style: 'top-[50%] left-[40%]' },
    { icon: <SiReact className="text-cyan-400 text-6xl animate-floatRotate" />, style: 'top-[70%] right-[30%]' },
    { icon: <SiTailwindcss className="text-sky-400 text-6xl animate-floatX" />, style: 'top-[60%] left-[50%]' },
    { icon: <SiC className="text-gray-700 text-6xl animate-floatY-reverse" />, style: 'top-[30%] right-[20%]' },
    { icon: <FaFigma className="text-pink-500 text-6xl animate-floatX" />, style: 'top-[40%] left-[25%]' },
   
  ];
  
  


const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-yellow-300 px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* Random Floating Icons Centered */}
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute text-4xl animate-float z-0 ${item.style}`}
        >
          {item.icon}
        </div>
      ))}

      {/* Left Content */}
      <div className="space-y-6 max-w-xl z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black">
          Hello, <br /> I’m <span className="text-black">ADITYA</span>
        </h1>
        <p className="text-gray-900 text-lg">A Computer Engineer diving into UI/UX</p>
        <div className="flex space-x-4">
        <button
  onClick={() => alert('📧 Email: adityabsonawane409@gmail.com\n📞 Mobile: 9309129443')}
  className="bg-black text-white border border-white font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
>
  Hire me
</button>

<a
  href="/Aditya_Sonawane_CV.pdf"
  download
  className="bg-black text-white border border-white font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
>
  Download CV
</a>
        </div>
        <div className="flex space-x-6 text-4xl pt-4">
          <a
            href="https://www.linkedin.com/in/aditya-sonawane-590166331/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-800" />
          </a>
          <a
            href="https://github.com/Adityab409"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer hover:text-gray-800" />
          </a>
          <a
            href="https://instagram.com/adityabs_49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 md:mt-0 z-10">
        <div className="bg-cyan-400 p-4 rounded-xl shadow-2xl">
          <img
            src={Adityaimage}
            alt="Aditya"
            className="w-[350px] md:w-[420px] h-auto object-cover rounded-lg hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
