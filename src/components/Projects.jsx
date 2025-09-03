import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Database, Palette, ShoppingCart, FileText, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DesigningIndia',
      description: 'A modern freelancing platform connecting clients with skilled designers. Built with responsive design, user-friendly interface using React.js and Tailwind CSS with dynamic functionalities for enhanced user interaction and performance.',
      image: 'designingindia.png',
      technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js'],
      liveLink: 'https://designingindia.in/',
      githubLink: 'https://github.com/pateldivyaa',
      featured: true,
      category: 'Full Stack',
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: 'CapitalShop',
      description: 'Full-stack e-commerce platform with separate Frontend, Backend, and Admin Panel. Features product catalog, inventory management, JWT authentication, role-based access, secure APIs, and responsive UI for seamless shopping experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap/Tailwind CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/pateldivyaa/E-commerce-Front-end',
      githubLinks: {
        frontend: 'https://github.com/pateldivyaa/E-commerce-Front-end',
        backend: 'https://github.com/pateldivyaa/E-commerce-Backend',
        admin: 'https://github.com/pateldivyaa/E-commerce-Admin-Panel'
      },
      featured: true,
      category: 'E-commerce',
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      title: 'Blogify (Blogging Platform)',
      description: 'Full-stack blogging platform with features to create, edit, and delete blogs. Includes secure authentication, image uploads, and responsive UI using React.js & Tailwind CSS. MongoDB Atlas for data storage with RESTful APIs.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Multer'],
      liveLink: 'https://blog-frontend-admin-hss7.vercel.app/',
      githubLink: 'https://github.com/pateldivyaa',
      featured: true,
      category: 'Content Management',
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: 'Pato Restaurant',
      description: 'Restaurant website with online ordering system, menu management, and customer reviews. Features elegant design and smooth user experience with modern animations and interactive elements.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'CSS3', 'JavaScript', 'Firebase'],
      liveLink: 'https://pateldivyaa.github.io/PATO/',
      githubLink: 'https://github.com/pateldivyaa',
      featured: false,
      category: 'Frontend',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and experience. Built with modern React and Tailwind CSS featuring smooth animations, responsive design, and interactive components.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveLink: '#',
      githubLink: 'https://github.com/pateldivyaa',
      featured: false,
      category: 'Portfolio',
      icon: <Code className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 p-14 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code size={16} />
            My Work Portfolio
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A collection of full-stack applications showcasing my expertise in MERN stack development, 
            modern UI/UX design, and cutting-edge web technologies. Each project demonstrates problem-solving 
            skills and attention to detail.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Featured Projects */}
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="absolute p-5 inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 border border-white/20">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative overflow-hidden group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 lg:h-full  group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-sm font-medium">
                        {project.icon}
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8  flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                      <Eye size={16} />
                      Featured Project
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                        Live Demo
                      </motion.a>
                      
                      {project.githubLinks ? (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <motion.a
                            href={project.githubLinks.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-blue-700 px-4 py-3 rounded-xl font-medium hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            Frontend
                          </motion.a>
                          
                          <motion.a
                            href={project.githubLinks.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-green-300 text-green-700 px-4 py-3 rounded-xl font-medium hover:border-green-400 hover:bg-green-50 transition-all duration-300 group text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Database size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            Backend
                          </motion.a>
                          
                          <motion.a
                            href={project.githubLinks.admin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-purple-300 text-purple-700 px-4 py-3 rounded-xl font-medium hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 group text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Code size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            Admin Panel
                          </motion.a>
                        </div>
                      ) : (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 border border-white/20">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {project.icon}
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        Live
                      </motion.a>
                      
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-2xl blur-lg transform rotate-1"></div>
            <motion.a
              href="https://github.com/pateldivyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-black text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              Explore All Projects on GitHub
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;