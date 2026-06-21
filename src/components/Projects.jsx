import { useState } from "react";
import { projects } from "../data/Project.js";
import { FaPlay } from "react-icons/fa";
import { FiExternalLink, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openVideo = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
              🚀 Featured Projects
            </span>
            <h2 className="text-4xl font-bold mt-4">Featured Projects</h2>
          </div>

          <button className="text-purple-400 hover:text-purple-300 transition">
            View All Projects →
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* PLAY BUTTON ONLY FOR MOBILE */}
                {project.type === "mobile" && project.video && (
                  <button
                    onClick={() => openVideo(project)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-600/80 backdrop-blur flex items-center justify-center text-white text-xl hover:scale-110 transition">
                      <FaPlay className="ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mb-4">
                  {project.description}
                </p>

                {/* TECH */}
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

                {/* ACTIONS */}
                <div className="flex justify-between items-center">

                  {/* WEB + API DEMO */}
                  {project.type !== "mobile" && project.demo?.url && (
                    <a
                      href={project.demo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                    >
                      <FiExternalLink />
                      {project.demo.hint || "View Demo"}
                    </a>
                  )}

                  {/* MOBILE TEXT */}
                  {project.type === "mobile" && (
                    <span className="text-xs text-gray-400">
                      Tap card to view demo
                    </span>
                  )}

                  {/* GITHUB ALWAYS */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIDEO MODAL ONLY MOBILE */}
        <AnimatePresence>
          {selectedProject?.type === "mobile" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col items-center"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute -top-14 right-0 text-white text-3xl hover:text-purple-400 transition"
                >
                  <FiX />
                </button>

                {/* PHONE FRAME */}
                <div className="relative w-[78vw] max-w-[300px] bg-zinc-900 rounded-[40px] p-2 border-[5px] border-zinc-700 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />

                  <div className="overflow-hidden rounded-[32px] bg-black">
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-500 rounded-full" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {selectedProject.title}
                </h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;