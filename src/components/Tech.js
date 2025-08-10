import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";

// Custom C++ Icon
const cppIcon = (
  <svg
    viewBox="0 0 128 128"
    className="w-12 h-12 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="#00599C"
  >
    <path d="M63.9 0L1.1 32v64l62.8 32 62.9-32V32z" />
    <path
      fill="#FFF"
      d="M95.8 73.3h-5.3v5.3h-5.3v-5.3h-5.3v-5.3h5.3v-5.3h5.3v5.3h5.3v5.3zm-17.1 0h-5.3v5.3H68v-5.3h-5.3v-5.3H68v-5.3h5.3v5.3h5.4v5.3z"
    />
    <path
      fill="#FFF"
      d="M49 48.1c-8.7 0-15.7 7.1-15.7 15.9 0 8.7 7.1 15.8 15.7 15.8 5.4 0 10.2-2.7 13-6.8l-6.7-3.9a8.1 8.1 0 0 1-6.3 3.1c-4.5 0-8.1-3.7-8.1-8.2s3.6-8.3 8.1-8.3c2.6 0 4.9 1.2 6.4 3.1l6.7-3.9a15.7 15.7 0 0 0-13.1-6.8z"
    />
  </svg>
);

// Custom C# Icon
const csharpIcon = (
  <svg
    viewBox="0 0 128 128"
    className="w-12 h-12 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="#68217A"
  >
    <path d="M64 0L7.6 32v64L64 128l56.4-32V32z" />
    <path
      fill="#FFF"
      d="M84.4 71.8h-4.1v4.1h-4.1v-4.1h-4.2v-4.1h4.2v-4.1h4.1v4.1h4.1v4.1zm-13.2 0H67v4.1h-4.1v-4.1h-4.2v-4.1h4.2v-4.1H67v4.1h4.2v4.1z"
    />
    <path
      fill="#FFF"
      d="M47.2 49.7c-7.9 0-14.2 6.4-14.2 14.3s6.4 14.3 14.2 14.3c4.9 0 9.2-2.4 11.9-6l-6.1-3.5c-1.2 1.9-3.4 3.1-5.8 3.1-3.8 0-6.9-3.2-6.9-7.1s3.1-7.1 6.9-7.1c2.4 0 4.6 1.3 5.8 3.1l6.1-3.5a14.2 14.2 0 0 0-11.9-6z"
    />
  </svg>
);

const techStack = [
  { name: "C#", icon: csharpIcon, color: "#68217A" },
  { name: "Java", icon: <FaJava className="w-12 h-12 mx-auto text-red-700" />, color: "#E11D48" },
  { name: "C++", icon: cppIcon, color: "#2563EB" },
  { name: "CSS", icon: <FaCss3Alt className="w-12 h-12 mx-auto text-blue-500" />, color: "#3B82F6" },
  { name: "HTML5", icon: <FaHtml5 className="w-12 h-12 mx-auto text-orange-600" />, color: "#F97316" },
  { name: "JavaScript", icon: <FaJs className="w-12 h-12 mx-auto text-yellow-400" />, color: "#FACC15" },
  { name: "jQuery", icon: <SiJquery className="w-12 h-12 mx-auto text-blue-400" />, color: "#38BDF8" },
  { name: "Express.js", icon: <SiExpress className="w-12 h-12 mx-auto text-gray-300" />, color: "#D1D5DB" },
  { name: "React", icon: <FaReact className="w-12 h-12 mx-auto text-cyan-400" />, color: "#06B6D4" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 mx-auto text-teal-400" />, color: "#14B8A6" },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12 mx-auto text-blue-500" />, color: "#3B82F6" },
  { name: "MySQL", icon: <SiMysql className="w-12 h-12 mx-auto text-blue-400" />, color: "#38BDF8" },
  { name: "PHP", icon: <FaPhp className="w-12 h-12 mx-auto text-indigo-500" />, color: "#6366F1" },
  { name: "GitHub", icon: <FaGithub className="w-12 h-12 mx-auto text-white" />, color: "#FFFFFF" },
];

function Tech() {
  return (
    <section id="tech" className="relative bg-[#0a0f1c] py-20 px-4 text-gray-200 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          🛠 Tech I Use
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg cursor-pointer group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-300"
                style={{
                  background: `radial-gradient(circle, ${tech.color} 0%, transparent 70%)`,
                }}
              ></div>

              <div className="mb-3 relative z-10">{tech.icon}</div>
              <p className="text-lg font-medium text-center relative z-10">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
