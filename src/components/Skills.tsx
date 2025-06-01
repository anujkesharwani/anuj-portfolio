
import { Code, Database, Cloud, Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "JavaScript", "SQL"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frameworks",
      icon: Tool,
      skills: ["Node.js", "FastAPI", "Flask", "Angular", "Ionic Framework"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & Databases",
      icon: Database,
      skills: ["MySQL", "Firebase", "MongoDB", "MongoEngine"],
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Developer Tools",
      icon: Cloud,
      skills: ["VS Code", "Git/GitHub", "Figma", "MySQL", "PyCharm"],
      color: "from-green-500 to-blue-500"
    }
  ];

  const achievements = [
    "5⭐ at HackerRank in Python",
    "Max rating 1416 on CodeChef",
    "Certificate in Python with OOP (15-Jun-2021 to 15-Jul-2021)",
    "Certificate in MEAN Stack Technology (15-Jun-2022 to 15-Jul-2022)"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-700/50 text-slate-300 px-3 py-2 rounded-lg text-sm hover:bg-slate-600/50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Achievements & Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🏆</span>
                  <span className="text-slate-300">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800/50 px-8 py-4 rounded-full border border-slate-700/50">
            <span className="text-slate-300">Interests:</span>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Backend Development", "Full Stack Development"].map((interest) => (
                <span
                  key={interest}
                  className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
