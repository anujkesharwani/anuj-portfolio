
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Surepass Technologies Private Limited",
      duration: "November 2024 - Present",
      role: "Backend Developer",
      type: "Onsite",
      technologies: ["Python", "Flask", "FastAPI", "MongoDB", "Celery"],
      responsibilities: [
        "Developed RESTful APIs using Flask and FastAPI for a secure Video KYC system",
        "Managed data storage and retrieval with MongoDB to ensure scalability and efficiency"
      ]
    },
    {
      company: "Shreeva Soft-Tech Innovations Pvt. Ltd",
      duration: "January 2024 - October 2024",
      role: "Full Stack Developer",
      type: "Onsite",
      technologies: ["AngularJS", "Ionic Framework", "Firebase", "Node.js", "JavaScript"],
      responsibilities: [
        "Built responsive apps using Angular and Ionic",
        "Implemented Firebase for authentication, real-time data sync, and push notifications"
      ]
    },
    {
      company: "CodeQuotient",
      duration: "June 2023 - July 2023",
      role: "Backend Developer Intern",
      type: "Remote",
      technologies: ["Node.js", "JavaScript"],
      responsibilities: [
        "Designed, developed, tested, and deployed backend solutions",
        "Resolved complex technical issues in a fast-paced environment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-purple-400 font-semibold mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin size={16} />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:ml-8">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Briefcase size={20} />
                    <span className="font-semibold">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-3">
                      <span className="text-purple-400 mt-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
