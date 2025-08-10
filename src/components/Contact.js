import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react'; // Added icons
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="bg-[#0a0f1c] py-20 px-4 text-gray-200">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">Let's Connect</h2>
          <p className="text-center text-gray-300 mb-8">
            Have a project in mind or just want to say hi? Drop a message below 👇
          </p>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xzzgegrp"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold text-white"
            >
              <Mail size={20} /> Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/Nahom-gio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/nahom-g-giorgies/nkedin.com/in/nahom-g-giorgies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
