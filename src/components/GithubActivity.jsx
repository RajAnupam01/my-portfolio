import { motion } from "framer-motion";
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
  // Fake contribution matrix
  const contributionGrid = Array.from(
    { length: 84 },
    (_, i) => ({
      id: i,
      level: Math.floor(Math.random() * 5),
    })
  );

  const getColor = (level) => {
    switch (level) {
      case 0:
        return "bg-slate-800";
      case 1:
        return "bg-green-900";
      case 2:
        return "bg-green-700";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-green-400";
      default:
        return "bg-slate-800";
    }
  };

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

        {/* Grid */}

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

            {/* Month Labels */}

            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            {/* Graph */}

            <div className="grid grid-cols-12 gap-1 mb-8">
              {contributionGrid.map((cell) => (
                <div
                  key={cell.id}
                  className={`h-4 rounded-sm ${getColor(
                    cell.level
                  )}`}
                />
              ))}
            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6 text-center">

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

                  <div className="flex gap-5 text-sm">

                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      {repo.stars}
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCodeBranch className="text-purple-400" />
                      {repo.forks}
                    </div>

                  </div>
                </div>
              ))}

            </div>

            <button className="mt-6 text-purple-400 hover:text-purple-300 transition">
              View More on GitHub →
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GithubActivity;