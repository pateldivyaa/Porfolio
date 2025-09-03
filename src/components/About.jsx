import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Sparkles, Target, Rocket, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Sc. IT, Swarnim University',
      detail: 'CGPA: 7.72',
      color: 'from-emerald-400 to-cyan-400'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Internship at Cognify Technologies',
      detail: 'Frontend Development',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      icon: Award,
      title: 'Specialization',
      description: 'MERN Stack Development',
      detail: 'React & Frontend Focus',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Code,
      title: 'Passion',
      description: 'Modern Web Technologies',
      detail: 'Always Learning',
      color: 'from-orange-400 to-red-400'
    }
  ];

  const journeyCards = [
    {
      icon: Target,
      title: '🎯 Current Focus',
      description: 'Mastering advanced React patterns and Node.js backend development',
      gradient: 'from-violet-500/20 to-purple-500/20'
    },
    {
      icon: Rocket,
      title: '🚀 Goals',
      description: 'Building scalable web applications and contributing to open source',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Lightbulb,
      title: '💡 Interests',
      description: 'UI/UX design, performance optimization, and emerging web technologies',
      gradient: 'from-amber-500/20 to-orange-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 p-14 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Get to know me</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            About{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl -z-10 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            I'm a passionate <span className="font-semibold text-blue-600">MERN stack developer</span> with a strong foundation in frontend technologies. 
            Currently pursuing my B.Sc. in Information Technology while gaining practical experience 
            through internships and <span className="font-semibold text-purple-600">personal projects</span>.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 hover:border-gray-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <item.icon size={32} className="text-white drop-shadow-sm" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-gray-600 mb-2 font-medium">{item.description}</p>
              <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Journey Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black">My Journey</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    My journey in web development started with a <span className="font-semibold text-white">curiosity</span> about how websites work. 
                    This curiosity led me to dive deep into frontend technologies, and eventually, 
                    I fell in love with the <span className="font-semibold text-cyan-300">MERN stack</span>.
                  </p>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Through my internship at <span className="font-semibold text-white">Cognify Technologies</span> and various personal projects, 
                    I've gained hands-on experience in building responsive, user-friendly applications 
                    that solve <span className="font-semibold text-purple-300">real-world problems</span>.
                  </p>
                </div>
              </div>

              {/* Right Cards */}
              <div className="space-y-6">
                {journeyCards.map((card, index) => (
                  <div 
                    key={card.title}
                    className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: 'slideInRight 0.6s ease-out forwards'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-white">{card.title}</h4>
                        <p className="text-blue-100 leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;