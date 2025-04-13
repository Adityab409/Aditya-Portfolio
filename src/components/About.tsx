import { FaFigma } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiC,
} from 'react-icons/si';

const About = () => {
  return (
    <section
      id="about"
      className="bg-blue-600 text-white px-10 py-16 rounded-xl mx-4 my-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
       {/* Image */}
<div className="bg-teal-400 p-6 rounded-xl shadow-xl w-[350px] h-[450px] flex items-center justify-center transition hover:shadow-2xl hover:shadow-white">
  <img
    src="src/assets/Aditya2.png"
    alt="Aditya"
    className="w-80 h-80 object-cover rounded-full"
  />
</div>


        {/* Content */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-2xl mb-6 leading-relaxed text-justify">
  Hey there! I’m Aditya Balwantrao Sonawane, a curious mind and a
  Computer Engineering student based in Shirpur. I’m deeply
  interested in the world of UI/UX design and passionate about
  creating seamless, user-friendly digital experiences.
</p>


          {/* Download CV Button */}
          <a
            href="/Aditya_Sonawane_CV.pdf"
            download
            className="inline-block bg-black text-white px-5 py-2 rounded-lg font-semibold transition border border-black hover:bg-white hover:text-black"
>
          
            Download CV
          </a>

          <hr className="my-6 border-black" />

          <p className="font-extrabold mb-4">SKILLS</p>
          <div className="flex flex-wrap gap-6 text-5xl" data-aos="zoom-in">
            <SiHtml5 title="HTML5" className="text-orange-500" />
            <SiCss3 title="CSS3" className="text-blue-500" />
            <SiJavascript title="JavaScript" className="text-yellow-400" />
            <SiReact title="React" className="text-cyan-400" />
            <SiTailwindcss title="Tailwind CSS" className="text-sky-400" />
            <SiC title="C Language" className="text-gray-300" />
            <FaFigma title="Figma" className="text-pink-400" />
          </div>

          <p className="text-1xl mt-2">Wireframing and Prototyping</p>
        </div>
      </div>
    </section>
  );
};

export default About;
