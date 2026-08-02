import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import {
  FaStar,
  FaCodeBranch,
  FaGithub,
} from "react-icons/fa";

import {
  githubStats,
  repositories,
} from "../data/github";

const GithubActivity = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
            🐙 GitHub Activity
          </span>

          <h2 className="text-4xl font-bold mt-4">
            GitHub Activity
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-6 lg:col-span-2"
          >
            <h3 className="font-semibold text-xl mb-6">
              Contribution Activity
            </h3>

            <div className="overflow-x-auto">
              <GitHubCalendar
                username="RajAnupam01"
                year={2026}
                colorScheme="dark"
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                theme={{
                  dark: [
                    "#161b22",
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#39d353",
                  ],
                }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center mt-8">

              <div>
                <h4 className="text-3xl font-bold text-white">
                  {githubStats.contributions}+
                </h4>

                <p className="text-gray-400">
                  Contributions
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-white">
                  {githubStats.repositories}+
                </h4>

                <p className="text-gray-400">
                  Repositories
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-green-400">
                  {githubStats.topLanguage}
                </h4>

                <p className="text-gray-400">
                  Top Language
                </p>
              </div>

            </div>
          </motion.div>

          {/* Top Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGithub className="text-purple-400" />

              <h3 className="text-xl font-semibold">
                Top Repositories
              </h3>
            </div>

            <div className="space-y-5">
              {repositories.map((repo) => (
                <div
                  key={repo.id}
                  className="border-b border-white/5 pb-4"
                >
                  <h4 className="font-medium mb-1">
                    {repo.name}
                  </h4>

                  <p className="text-sm text-gray-400 mb-3">
                    {repo.tech}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/RajAnupam01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-purple-400 hover:text-purple-300 transition"
            >
              View More on GitHub →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GithubActivity;