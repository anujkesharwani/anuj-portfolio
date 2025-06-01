
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code className="text-purple-400" size={20} />
            <span className="text-white font-semibold">Anuj Kesharwani</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-300">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            © {currentYear} All rights reserved
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
