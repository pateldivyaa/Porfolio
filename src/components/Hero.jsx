import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, Code, Sparkles, Star, ArrowDown, Play, ChevronRight, Terminal, Zap, Coffee, Palette, Rocket } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [activeIcon, setActiveIcon] = useState(null);

  const skills = ['React Developer', 'MERN Stack Expert', 'UI/UX Enthusiast', 'Frontend Specialist'];

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(skillInterval);
    };
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/pateldivyaa', label: 'GitHub', color: 'from-gray-700 to-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/patel-divya-591995318/', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
    { icon: Mail, href: 'mailto:divyapatel@example.com', label: 'Email', color: 'from-red-500 to-red-700' }
  ];

  const techHighlights = [
    { icon: Code, label: 'Frontend', detail: 'React & Modern JS', color: 'from-emerald-500 to-teal-600' },
    { icon: Terminal, label: 'Backend', detail: 'Node.js & MongoDB', color: 'from-blue-500 to-indigo-600' },
    { icon: Palette, label: 'UI/UX', detail: 'Design & Prototype', color: 'from-purple-500 to-pink-600' },
    { icon: Rocket, label: 'Performance', detail: 'Fast & Scalable', color: 'from-orange-500 to-red-600' }
  ];

  const floatingElements = [
    { icon: Code, pos: 'top-20 left-10', color: 'from-yellow-400 to-orange-500', delay: '0s', size: 'w-12 h-12' },
    { icon: Zap, pos: 'bottom-32 left-8', color: 'from-green-400 to-emerald-500', delay: '1s', size: 'w-14 h-14' },
    { icon: Star, pos: 'top-32 right-16', color: 'from-pink-400 to-red-500', delay: '2s', size: 'w-10 h-10' },
    { icon: Sparkles, pos: 'bottom-20 right-8', color: 'from-indigo-400 to-purple-500', delay: '0.5s', size: 'w-16 h-16' },
    { icon: Coffee, pos: 'top-1/2 left-4', color: 'from-amber-400 to-orange-600', delay: '1.5s', size: 'w-8 h-8' }
  ];

  return (
    <section className="min-h-screen lg:p-16 bg-gradient-to-br from-slate-900 via-blue-900/80 to-indigo-900 relative overflow-hidden">
      
      {/* Background decorative elements - matching About section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Interactive gradient based on mouse position */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Floating tech icons */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.pos} ${element.size} bg-gradient-to-r ${element.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer animate-bounce opacity-60 hover:opacity-100`}
          style={{
            animationDelay: element.delay,
            animationDuration: '4s'
          }}
          onMouseEnter={() => setActiveIcon(index)}
          onMouseLeave={() => setActiveIcon(null)}
        >
          <element.icon size={element.size.includes('w-8') ? 16 : element.size.includes('w-10') ? 20 : 24} className="text-white" />
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Section */}
            <div className="space-y-5">
              
              {/* Status Badge */}
              <div className="inline-flex items-center mt-16  gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                <div className="w-2 h-2 bg-green-400  rounded-full animate-pulse shadow-sm" />
                <MapPin size={16} />
                <span>Available for opportunities • Ahmedabad, IN</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="text-lg text-blue-300 font-semibold tracking-wide flex items-center gap-2">
                    <Sparkles size={16} className="text-blue-300" />
                    Hello, I'm
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                    <span className="block text-white">Divya
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                      Patel</span>
                      <div className="absolute -top-6 -right-8 text-3xl animate-bounce">
                        ✨
                      </div>
                    </span>
                  </h1>
                </div>
                
                {/* Animated Role */}
                <div className="h-16 overflow-hidden">
                  <div 
                    className="flex flex-col transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateY(-${currentSkill * 4}rem)` }}
                  >
                    {skills.map((skill, index) => (
                      <div key={index} className="h-16 flex items-center text-xl lg:text-2xl text-gray-300 font-semibold">
                        <Terminal className="text-emerald-400 mr-3" size={28} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Crafting exceptional digital experiences with modern web technologies. 
                  Currently pursuing B.Sc. IT while building real-world applications and 
                  contributing to innovative projects at <span className="font-semibold text-blue-400">Cognify Technologies</span>.
                </p>
              </div>

              {/* Tech Highlights Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {techHighlights.map((tech, index) => (
                  <div
                    key={tech.label}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <tech.icon size={20} className="text-white" />
                    </div>
                    <div className="text-white font-semibold text-sm">{tech.label}</div>
                    <div className="text-gray-400 text-xs mt-1">{tech.detail}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download size={20} className="relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                  <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Play size={20} className="group-hover:text-blue-400 transition-colors duration-300" />
                  <span>View My Work</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-medium">Connect with me:</span>
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg overflow-hidden"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <link.icon size={20} className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Visual Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                
                {/* Main Profile Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  
                  {/* Glassmorphism Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl" />
                  
                  {/* Rotating Ring */}
                  <div className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-blue-400/50 to-purple-400/50 border-dashed animate-spin opacity-30" style={{animationDuration: '20s'}} />
                  
                  {/* Profile Circle */}
                  <div className="absolute inset-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group">
                    <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden ring-4 ring-white/20">
                      <img
                        src="Divya.png"
                        alt="Divya Patel"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Floating Skill Badges */}
                  {[
                    { label: 'React', pos: '-top-4 -left-4', color: 'from-cyan-400 to-blue-500' },
                    { label: 'Node.js', pos: '-top-4 -right-4', color: 'from-green-400 to-emerald-500' },
                    { label: 'MongoDB', pos: '-bottom-4 -left-4', color: 'from-emerald-400 to-green-600' },
                    { label: 'Express', pos: '-bottom-4 -right-4', color: 'from-gray-600 to-gray-800' }
                  ].map((skill, index) => (
                    <div
                      key={skill.label}
                      className={`absolute ${skill.pos} bg-gradient-to-r ${skill.color} text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse backdrop-blur-sm border border-white/20`}
                      style={{
                        animationDelay: `${index * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    >
                      {skill.label}
                    </div>
                  ))}

                  {/* Orbiting Dots */}
                  <div className="absolute inset-0 animate-spin opacity-40" style={{animationDuration: '15s'}}>
                    {[0, 120, 240].map((angle, index) => (
                      <div
                        key={index}
                        className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-180px)`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;