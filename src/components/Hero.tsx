import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-6 overflow-hidden text-center"
    >
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20
        bg-[radial-gradient(circle,rgba(249,115,22,0.2)_1px,transparent_1px)]
        [background-size:50px_50px]"
      />

      <div className="relative z-10 max-w-3xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight"
        >
          Hi, I'm <span className="text-orange-500">Aditya</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <TypeAnimation
            sequence={[
              "Java Developer",
              1500,
              "UI Designer",
              1500,
              "UX Designer",
              1500,
              "Web Developer",
              1500,
              "Backend Developer",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-gray-300 font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Crafting backend systems with logic and designing
          intuitive digital experiences. Passionate about building
          meaningful web applications using Java and modern UI tools.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-10 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-orange-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-orange-400 transition"
          >
            Explore My Work
          </a>

          <a
            href="/Aditya_Sonawane_CV.pdf"
            className="border border-orange-500 px-8 py-3 rounded-md hover:bg-orange-500 hover:text-black transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mt-20 text-gray-400 text-xl"
        >
          ↓
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;