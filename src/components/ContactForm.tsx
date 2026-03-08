
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_nvid1ij', // 🔁 Replace with your actual service ID
          'template_usjmr98', // 🔁 Replace with your actual template ID
          formRef.current,
          'LPP5cFo_6C9q5ySvU'   // 🔁 Replace with your public EmailJS key
        )
        .then(() => {
          alert('Form submitted!');
          formRef.current?.reset();
        })
        .catch((err) => {
          alert('Failed to send message. Please try again.');
          console.error(err);
        });
    }
  };

  return (
    <section className="bg-[#0B0B0F] flex justify-center items-center px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-[#111111] w-full max-w-2xl p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl transition-all"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Connect with me</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="flex-1 px-4 py-2 bg-[#0B0B0F] border border-gray-700 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="flex-1 px-4 py-2 bg-[#0B0B0F] border border-gray-700 rounded-md focus:outline-none"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          rows={2}
          required
          className="flex-1 w-full py-2 bg-[#0B0B0F] border border-gray-700 rounded-md focus:outline-none"
        />

        <input type="file" name="attachment" className="mb-6" />

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-3 rounded-md transition hover:bg-white hover:text-black border border-black"
        >
          Submit now 🚀
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
