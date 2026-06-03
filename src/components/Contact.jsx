import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { PERSONAL_INFO } from "../utils/constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        "YOUR_PUBLIC_KEY"
      );

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
            📬 Contact
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Have an idea, project, or opportunity?
            Feel free to reach out. I'm always open
            to discussing development, collaboration,
            and exciting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="glass rounded-2xl border border-white/10 p-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Email</h3>

                  <p className="text-gray-400">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>
            </div>


            {/* Location */}
            <div className="glass rounded-2xl border border-white/10 p-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
                >
                  <FaGithub />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-8"
          >
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition font-medium disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;