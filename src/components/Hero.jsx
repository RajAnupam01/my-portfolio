import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { PERSONAL_INFO } from "../utils/constants";
import profile from "../assets/images/profile.jpeg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm">
              👋 Hi, I'm
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              {PERSONAL_INFO.name}
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text mt-4">
              {PERSONAL_INFO.title}
            </h2>

            <p className="mt-6 text-gray-400 max-w-xl leading-7">
              I build scalable mobile applications,
              powerful backend systems, and modern
              full-stack solutions using React Native,
              Node.js, PostgreSQL and cloud technologies.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-5 text-3xl sm:text-4xl mt-8">

              <FaReact />

              <FaNodeJs />

              <SiExpress />

              <SiPostgresql />

              <SiMongodb />

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
                View Projects
              </button>

                <a
                  href="/temp/ResumeCopy.pdf"
                  download="ResumeCopy.pdf"
                  className="px-6 py-3 rounded-lg border border-white/20 hover:border-purple-500 transition inline-block text-center"
                >
                  Download Resume
                </a>
              

            </div>

          </div>

          {/* Right Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-purple-700 blur-[120px] opacity-40"></div>

            {/* Image */}

            <img
              src={profile}
              alt="Profile"
              className="
                relative
                w-full
                max-w-md
                mx-auto
                rounded-3xl
                border
                border-white/10
              "
            />

            {/* Stats Card */}

            <div
              className="
                glass
                rounded-2xl

                mt-6
                mx-auto

                flex
                justify-center
                gap-5

                px-5
                py-4

                sm:absolute
                sm:bottom-5
                sm:right-5
                sm:mt-0
              "
            >
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold">
                  2+
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Years Learning
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold">
                  15+
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Projects
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold">
                  100+
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Commits
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;