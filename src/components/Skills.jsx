import { skills } from "../data/Skill";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;

            return (
              <div
                key={skill.title}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Header Container: Icon on top, Title on the next line */}
                <div className="flex flex-col items-center mb-6">
                  {IconComponent && (
                    <IconComponent className="text-4xl text-purple-400 mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" />
                  )}
                  <h3 className="text-white font-bold text-lg tracking-wide">
                    {skill.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-2 text-gray-400 text-sm w-full">
                  {skill.items.map((item) => (
                    <li key={item} className="hover:text-white transition-colors duration-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;