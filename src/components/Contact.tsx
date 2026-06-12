import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import portfolio from "../Other/portfolio.json";

const Contact = () => {
  const contact = portfolio.contact;
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission
  //   console.log('Form submitted')
  // }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {contact.title &&
              contact.title.split(" ").map((word, i) =>
                word === "Me" ? (
                  <span key={i} className="text-blue-500">
                    {word}
                  </span>
                ) : (
                  word + " "
                )
              )}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Let's Talk</h3>
            <div className="space-y-6">
              <motion.a
                whileHover={{ x: 10 }}
                href={`mailto:${contact.email}`}
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <span className="text-gray-300 hover:text-blue-400 underline transition-colors duration-200">
                    {contact.email}
                  </span>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 10 }}
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <span className="text-gray-300 underline hover:text-blue-400 transition-colors duration-200">
                    {contact.phone}
                  </span>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">{contact.address}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
