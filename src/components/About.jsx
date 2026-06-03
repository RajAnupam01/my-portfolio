import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../utils/constants";

const About = () => {
  const personalInfo = [
    {
      icon: <FaUser />,
      label: "Name",
      value: "Anupam Raj",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "anupam.r2301@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "India",
    },
    {
      icon: <IoMdTime />,
      label: "Availability",
      value: "Open to Work",
      highlight: true,
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
            👤 About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-5">
              Passionate Full-Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I am a passionate full-stack developer who enjoys building
              end-to-end applications. I specialize in React Native for
              mobile development and Node.js for creating scalable backend
              systems and APIs.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              I love solving real-world problems, designing scalable
              architectures, and writing clean, maintainable code that
              delivers great user experiences.
            </p>

            <button className="px-6 py-3 rounded-xl border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
              Know More About Me →
            </button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass border border-white/10 rounded-2xl p-8"
          >
            <div className="space-y-8">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/5 pb-4"
                >
                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-purple-400 text-lg">
                      {item.icon}
                    </span>

                    <span>{item.label}</span>
                  </div>

                  <div
                    className={`font-medium ${
                      item.highlight
                        ? "text-green-400"
                        : "text-white"
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Glow */}
            <div className="absolute"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;