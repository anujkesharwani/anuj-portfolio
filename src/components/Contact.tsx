import { Mail, Phone, Github, Linkedin, Send, MapPin, X } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anujkesarwani31@gmail.com",
      href: "mailto:anujkesarwani31@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9839867699",
      href: "tel:+919839867699"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/anujkesharwani",
      href: "https://github.com/anujkesharwani/"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anuj-kesharwani",
      href: "https://www.linkedin.com/in/anuj-kesharwani-1b2632225/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-xl border border-purple-500/50 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-6">Choose how to connect</h3>
            
            <div className="space-y-4">
              <a
                href="tel:+919839867699"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Me</p>
                  <p className="text-slate-300">+91-9839867699</p>
                </div>
              </a>

              <a
                href="mailto:anujkesarwani31@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Me</p>
                  <p className="text-slate-300">anujkesarwani31@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/anuj-kesharwani-1b2632225/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Connect on LinkedIn</p>
                  <p className="text-slate-300">linkedin.com/in/anuj-kesharwani</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{info.label}</p>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-purple-400" size={20} />
                <h4 className="text-lg font-semibold text-white">Current Location</h4>
              </div>
              <p className="text-slate-300">New Delhi, India</p>
              <p className="text-slate-400 text-sm mt-2">Available for remote work and relocation</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
