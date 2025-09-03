import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Send, Star } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/pateldivyaa',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/patel-divya-591995318/',
      label: 'LinkedIn'
    },
    {
      icon: Send,
      href: 'mailto:pateldivyad3233@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-200 mb-2">
                Divya Patel
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-4">
                MERN Stack Developer
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionate about creating exceptional web experiences with modern technologies. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-200">
                <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                <span>Vastral, Ahmedabad, Gujarat</span>
              </div>
              <a 
                href="mailto:pateldivyad3233@gmail.com"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-600 transition-colors group"
              >
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <span className="group-hover:underline">pateldivyad3233@gmail.com</span>
              </a>
              <a 
                href="tel:+919265662205"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-600 transition-colors group"
              >
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <span className="group-hover:underline">+91 9265662205</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-200 hover:text-blue-600 transition-colors hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-6">
              Let's Connect
            </h4>
            <p className="text-gray-200 mb-6">
              Follow me on social media or drop me a message. I'd love to hear from you!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                  title={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <Star className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Ready to work together?</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Let's discuss your next project and bring your ideas to life.
                  </p>
                  <a 
                    href="mailto:pateldivyad3233@gmail.com"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <Send size={16} />
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-100">
              <span>© {currentYear} Divya Patel. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>in India</span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-300">Scroll to top</span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;