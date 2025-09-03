import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Responsive Design', level: 92 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 78 },
        { name: 'RESTful APIs', level: 82 },
        { name: 'Authentication', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Vite/Webpack', level: 80 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Chrome DevTools', level: 88 }
      ]
    },
    {
      title: 'Soft Skills',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 88 },
        { name: 'Time Management', level: 82 },
        { name: 'Continuous Learning', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise in modern web development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:px-12 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gradient-to-br from-gray-50 to-white px-12 py-5 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 ">
                <div className={`inline-block p-2 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Currently Learning</h3>
            <p className="text-blue-100 text-lg">
              I'm always expanding my skillset and staying up-to-date with the latest technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'TypeScript', description: 'Adding type safety to JavaScript projects' },
              { name: 'Next.js', description: 'Server-side rendering and static site generation' },
              { name: 'GraphQL', description: 'Modern API query language and runtime' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                <p className="text-blue-100 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;