
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_nvid1ij",
          "template_usjmr98",
          formRef.current,
          "LPP5cFo_6C9q5ySvU"
        )
        .then(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          formRef.current?.reset();
        })
        .catch((err) => {
          setIsSubmitting(false);
          setErrorMsg("Failed to send message. Please try emailing adityasonawane409@gmail.com directly.");
          console.error(err);
        });
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-dark-border shadow-2xl relative">
      <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
      <p className="text-xs text-slate-400 mb-6">
        Fill out the form below to deliver a message straight to my inbox.
      </p>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
          <HiCheckCircle className="text-4xl text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-xs text-slate-300">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 px-4 py-2 text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
              <input
                type="text"
                name="user_name"
                placeholder="Aditya Sonawane"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
              <input
                type="email"
                name="user_email"
                placeholder="name@domain.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Your Message *</label>
            <textarea
              name="message"
              placeholder="Tell me about your project, idea, or role opportunity..."
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition resize-none"
            />
          </div>

          {errorMsg && (
            <p className="text-xs font-mono text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Message...</span>
            ) : (
              <>
                <HiPaperAirplane className="text-sm rotate-45" />
                <span>Submit Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

