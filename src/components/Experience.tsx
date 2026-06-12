import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import portfolio from '../Other/portfolio.json'

const Experience = () => {
  const experiences = portfolio.resume.experience;

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">{exp.position}</h3>
                  <div className="flex items-center text-blue-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 mb-4">
                  <span className="font-semibold text-blue-400">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <MapPin size={16} className="mr-1" />
                  {exp.location}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.responsibilities && exp.responsibilities[0]}
                </p>
                
                <div className="space-y-2">
                  {exp.responsibilities && exp.responsibilities.slice(1).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">▪</span>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
