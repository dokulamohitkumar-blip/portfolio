import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

function Contact() {
    const sendEmail = (e) => {
    e.preventDefault();

 emailjs
    .sendForm(
      "service_kntvd9m",
      "template_t5gec38",
      e.target,
      "9lDdM4Igdv6SZ_QlE"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
      }
    );
};
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-500 font-bold tracking-[4px] uppercase text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
            Let's build something.
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl text-lg">
            Have a project, opportunity, or just want to talk about
            embedded systems? Send me a message.
          </p>
        </motion.div>

        {/* Contact Area */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">

          {/* Contact Info */}
{/* Contact Info */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="space-y-5"
>

  {/* Email */}
  <a
    href="mailto:dokulamohitkumar@gmail.com"
    className="flex items-center gap-5 p-5 bg-white border border-slate-200 rounded-2xl hover:border-cyan-400 transition"
  >
    <FaEnvelope className="text-cyan-500 text-2xl" />

    <div>
      <p className="font-bold text-slate-900">
        Email
      </p>

      <p className="text-slate-500">
        dokulamohitkumar@gmail.com
      </p>
    </div>
  </a>


  {/* GitHub */}
  <a
    href="https://github.com/dokulamohitkumar-blip"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-5 p-5 bg-white border border-slate-200 rounded-2xl hover:border-cyan-400 transition"
  >
    <FaGithub className="text-slate-800 text-2xl" />

    <div>
      <p className="font-bold text-slate-900">
        GitHub
      </p>

      <p className="text-slate-500">
        My projects and code
      </p>
    </div>
  </a>


  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/mohitkumar-dokula-b13619296/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-5 p-5 bg-white border border-slate-200 rounded-2xl hover:border-cyan-400 transition"
  >
    <FaLinkedin className="text-blue-600 text-2xl" />

    <div>
      <p className="font-bold text-slate-900">
        LinkedIn
      </p>

      <p className="text-slate-500">
        Connect with me
      </p>
    </div>
  </a>

</motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={sendEmail}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name
                </label>

                <input
  type="text"
  name="name"
  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
  type="email"
  name="email"
  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-cyan-400 transition"
                />
              </div>

            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Subject
              </label>

<input
  type="text"
  name="subject"
  placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>

<textarea
  name="message"
  rows="5"
  placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-cyan-500 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;