import { motion } from 'framer-motion'
import portfolio from '../Other/portfolio.json'

const About = () => {
  const about = portfolio.about;
  const stats = about.stats;
  const title = about.title;
  const description = about.description;

  return (

    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title && title.split(' ').map((word, i) => word === 'Me' ? <span key={i} className="text-blue-500">{word}</span> : word + ' ')}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-500">
              {portfolio.personalInfo.title}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              {description}
            </p>
            <motion.a
              href="/resume.pdf"
              download="Mitul_Navapara_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors duration-200"
              >
                {/* You can add icons based on stat.label if needed */}
                <h4 className="text-2xl font-bold text-white mb-2">{stat.number}</h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
