
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in backend development. 
              Currently working at Surepass Technologies, I specialize in building secure, scalable applications 
              using Python, Flask, FastAPI, and modern JavaScript frameworks.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in software development has taken me through various roles, from backend development 
              to full-stack solutions, always focusing on creating efficient, user-friendly applications that 
              solve real-world problems.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <GraduationCap className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-slate-300">B.Tech in Computer Science</p>
                <p className="text-slate-400">UCER, Allahabad</p>
                <p className="text-purple-400 font-semibold">CGPA: 8.05</p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Award className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
                <p className="text-slate-300">5⭐ Python HackerRank</p>
                <p className="text-slate-300">CodeChef Rating: 1416</p>
                <p className="text-slate-300">MEAN Stack Certified</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Experience</span>
                  <span className="text-purple-400 font-semibold">2+ Years</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Current Role</span>
                  <span className="text-purple-400 font-semibold">Backend Developer</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Location</span>
                  <span className="text-purple-400 font-semibold">India</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Interests</span>
                  <span className="text-purple-400 font-semibold">Problem Solving</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Object Oriented Programming", "Database Management System", "Data Structures and Algorithms"].map((course) => (
                  <span
                    key={course}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
