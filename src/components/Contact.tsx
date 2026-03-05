import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0B0B0F] text-white py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Let's <span className="text-orange-500">Connect</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Interested in collaborating or discussing a project?
          Feel free to reach out.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-3xl mb-12">

          <a href="https://linkedin.com/in/aditya-sonawane-590166331">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>

          <a href="https://github.com/Adityab409">
            <FaGithub className="hover:text-white transition" />
          </a>

          <a href="https://instagram.com/adityabs_49">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>

        </div>

      </div>

      {/* Contact form */}
      <ContactForm />

    </section>
  );
};

export default Contact;