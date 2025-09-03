import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap, Code2, Database, Globe, Smartphone } from 'lucide-react';

const Resume = () => {
  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'B.Sc. Information Technology',
        'Swarnim University',
        'CGPA: 7.72'
      ]
    },
    {
      icon: Briefcase,
      title: 'Experience',
      items: [
        'Frontend Developer Intern',
        'Cognify Technologies',
        'React & JavaScript Focus'
      ]
    },
    {
      icon: Award,
      title: 'Achievements',
      items: [
        'MERN Stack Certification',
        'Multiple Project Completions',
        'Strong Academic Performance'
      ]
    }
  ];

  const technicalSkills = [
    {
      category: 'Frontend',
      icon: Globe,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Middleware'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Mongoose ODM', 'Database Design', 'Data Modeling'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      category: 'Tools & Others',
      icon: Code2,
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'npm/yarn', 'Agile Development'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="resume" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience, education, and technical skills.
          </p>
        </motion.div>

        <div className="max-w-screen-xl mx-auto">
          {/* Resume Preview Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <FileText size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Divya Patel</h3>
                    <p className="text-blue-100">MERN Stack Developer Resume</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">Last Updated</p>
                  <p className="font-semibold">December 2024</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {resumeHighlights.map((section, index) => (
                  <motion.div
                    key={section.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <section.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h4>
                    <div className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-600 text-sm">{item}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/Divya%20Patel%20MERN%20Stack%20Developer.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
                
                <motion.a
                  href="/Divya%20Patel%20MERN%20Stack%20Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={20} />
                  Preview Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proficient in modern web technologies and frameworks for full-stack development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <skillGroup.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h4>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          {/* <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Years of Study', value: '3+' },
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies', value: '15+' },
              { label: 'CGPA', value: '7.72' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;  