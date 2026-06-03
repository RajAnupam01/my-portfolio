import { projects } from "../data/Project.js";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="container mx-auto px-6">

        {/* Header */}

        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
              🚀 Featured Projects
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Featured Projects
            </h2>
          </div>

          <button className="text-purple-400 hover:text-purple-300 transition">
            View All Projects →
          </button>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Image */}

              <div className="overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-5">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mb-5">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex justify-between items-center">

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;