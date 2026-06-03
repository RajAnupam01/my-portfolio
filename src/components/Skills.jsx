import { skills } from "../data/Skill";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-purple-400 mb-4">
                {skill.title}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;