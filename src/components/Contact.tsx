<<<<<<< HEAD
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-yellow-400 py-16 text-center text-black px-4">
      {/* Signature */}
      <h2 className="text-4xl font-arizonia text-black ">Aditya Sonawane</h2>

      {/* Invitation */}
      
      <p className=" font-semibold mb-6 text-4xl">
        Let’s build something awesome together<br />your ideas are always welcome!
      </p>

      {/* Contact Me Button */}
      <button
  onClick={() => alert('📧 Email: adityabsonawane409@gmail.com\n📞 Mobile: 9309129443')}
  className="bg-black text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg transition border border-black hover:bg-white hover:text-black"
>
  Contact me
</button>


      {/* Social Icons */}
     {/* Social Icons */}
<div className="flex justify-center items-center gap-6 mt-10 text-4xl">
  <a
    href="https://www.linkedin.com/in/aditya-sonawane-590166331/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="hover:text-blue-700 transition" />
  </a>
  <a
    href="https://github.com/Adityab409"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="hover:text-gray-800 transition" />
  </a>
  <a
    href="https://instagram.com/adityabs_49"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="hover:text-pink-600 transition" />
  </a>
</div>


      {/* Email */}<b>
      <p className="mt-6 text-1xl ">@adityabsonawane409@gmail.com</p></b>
    </section>
  );
};

export default Contact;
=======
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-yellow-400 py-16 text-center text-black px-4">
      {/* Signature */}
      <h2 className="text-4xl font-arizonia text-black ">Aditya Sonawane</h2>

      {/* Invitation */}
      
      <p className=" font-semibold mb-6 text-4xl">
        Let’s build something awesome together<br />your ideas are always welcome!
      </p>

      {/* Contact Me Button */}
      <button
  onClick={() => alert('📧 Email: adityabsonawane409@gmail.com\n📞 Mobile: 9309129443')}
  className="bg-black text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg transition border border-black hover:bg-white hover:text-black"
>
  Contact me
</button>


      {/* Social Icons */}
     {/* Social Icons */}
<div className="flex justify-center items-center gap-6 mt-10 text-4xl">
  <a
    href="https://www.linkedin.com/in/aditya-sonawane-590166331/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="hover:text-blue-700 transition" />
  </a>
  <a
    href="https://github.com/Adityab409"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="hover:text-gray-800 transition" />
  </a>
  <a
    href="https://instagram.com/adityabs_49"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="hover:text-pink-600 transition" />
  </a>
</div>


      {/* Email */}<b>
      <p className="mt-6 text-1xl ">@adityabsonawane409@gmail.com</p></b>
    </section>
  );
};

export default Contact;
>>>>>>> 66e454aa58709f26bbf3ebca4694e4b0f15c94f9
