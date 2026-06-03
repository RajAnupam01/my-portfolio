import { motion } from "framer-motion";
import { journeyData } from "../data/journey";

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-24"
    >
      <div className="container mx-auto px-6">

        {/* Header */}

        <div className="mb-14">
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
            🛤️ My Journey
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Developer Journey
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 w-[2px] h-full bg-white/10"></div>

          {/* Timeline Items */}

          <div className="space-y-12">

            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="relative flex gap-8"
              >
                {/* Timeline Dot */}

                <div className="relative z-10">

                  <div className="w-8 h-8 rounded-full bg-purple-500 border-4 border-dark shadow-glow"></div>

                </div>

                {/* Content Card */}

                <div className="glass border border-white/10 rounded-2xl p-6 flex-1 hover:border-purple-500/30 transition-all duration-300">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm w-fit">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-gray-400 leading-7">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;