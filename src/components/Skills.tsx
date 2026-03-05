import { FaFigma, FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiC,
  SiMysql
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0B0B0F] text-white py-20 px-6">

      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-12 text-center text-5xl">

        <div className="text-red-500 font-bold text-3xl hover:scale-110 transition">
  Java
</div>
        <SiC className="text-gray-300 hover:scale-110 transition" title="C"/>

        <SiMysql className="text-blue-400 hover:scale-110 transition" title="SQL"/>

        <SiHtml5 className="text-orange-500 hover:scale-110 transition" title="HTML"/>
        <SiCss3 className="text-blue-500 hover:scale-110 transition" title="CSS"/>

        <SiJavascript className="text-yellow-400 hover:scale-110 transition" title="JavaScript"/>

        <SiReact className="text-cyan-400 hover:scale-110 transition" title="React"/>

        <SiTailwindcss className="text-sky-400 hover:scale-110 transition" title="Tailwind"/>

        <FaFigma className="text-pink-400 hover:scale-110 transition" title="Figma"/>

        <FaGithub className="text-white hover:scale-110 transition" title="GitHub"/>

      </div>

    </section>
  );
};

export default Skills;