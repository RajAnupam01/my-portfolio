import { motion } from "framer-motion";

const languages = [
  {
    name: "C++",
    level: "Advanced",
    icon: "⚡",
  },

  {
    name: "Java",
    level: "Intermediate",
    icon: "☕",
  },

  {
    name: "JavaScript",
    level: "Advanced",
    icon: "🟨",
  },

  {
    name: "TypeScript",
    level: "Intermediate",
    icon: "🔷",
  },

  {
    name: "Python",
    level: "Intermediate",
    icon: "🐍",
  },

  {
    name: "C",
    level: "Intermediate",
    icon: "💻",
  },
];

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-20 md:py-24"
    >
      <div className="container mx-auto px-6">

        {/* Header */}

        <div className="mb-10">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
            💻 Programming Languages
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Programming Languages
          </h2>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                glass
                border
                border-white/10
                rounded-2xl
                p-6
                hover:border-purple-500/40
                transition-all
                duration-300
              "
            >
              <div className="text-4xl mb-4">
                {language.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {language.name}
              </h3>

              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-purple-500/10
                  border
                  border-purple-500/20
                  text-purple-300
                "
              >
                {language.level}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Languages;