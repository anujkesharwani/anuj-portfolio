
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Anuj Kesharwani
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & Backend Specialist
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Crafting scalable web applications with expertise in Python, JavaScript, and modern frameworks. 
            Passionate about creating efficient backend solutions and responsive user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/anujkesharwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/anuj-kesharwani-1b2632225/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600/50 hover:bg-blue-500/50 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            
            <a
              href="mailto:anujkesarwani31@gmail.com"
              className="flex items-center gap-2 bg-purple-600/50 hover:bg-purple-500/50 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              Email
            </a>
            
            <a
              href="tel:+919839867699"
              className="flex items-center gap-2 bg-green-600/50 hover:bg-green-500/50 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              Call
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
