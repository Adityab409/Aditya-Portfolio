import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0B0B0F] text-white py-20 px-6">

      <div className="max-w-5xl mx-auto text-center mb-16">

        <h2 className="text-5xl font-bold mb-6">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Interested in collaborating or discussing a project?  
          Feel free to connect with me or send a message using the form below.
        </p>

        {/* Social links */}

        <div className="flex justify-center gap-8 text-3xl mt-8 text-gray-400">

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

      </div>

      {/* Contact form */}

      <ContactForm />

    </section>
  );
};

export default Contact;