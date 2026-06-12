import { motion } from 'framer-motion'
import portfolio from '../Other/portfolio.json'

const Skills = () => {
  const skills = portfolio.skills;
  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend.map(s => ({ name: s.name, level: s.percentage })) },
    { title: 'UI Frameworks', skills: skills.ui_frameworks.map(s => ({ name: s.name, level: s.percentage })) },
    { title: 'Backend', skills: skills.backend.map(s => ({ name: s.name, level: s.percentage })) },
    { title: 'Databases', skills: skills.databases.map(s => ({ name: s.name, level: s.percentage })) },
    { title: 'Domain Expertise', skills: skills.mobile.map(s => ({ name: s.name, level: s.percentage })) },
    { title: 'Specialized', skills: skills.specialized.map(s => ({ name: s.name, level: s.percentage })) },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-blue-500 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
