import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaPhp,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiExpress, SiPostgresql, SiMysql, SiMicrosoftsqlserver } from "react-icons/si";

// Custom SVGs for C++ and C#
const cppIcon = (
  <svg
    viewBox="0 0 128 128"
    className="w-10 h-10 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="#00599C"
    role="img"
    aria-label="C++"
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

const csharpIcon = (
  <svg
    viewBox="0 0 128 128"
    className="w-10 h-10 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="#68217A"
    role="img"
    aria-label="C#"
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
  { name: "C#", icon: csharpIcon },
  { name: "Java", icon: <FaJava className="text-red-700 w-10 h-10 mx-auto" /> },
  { name: "C++", icon: cppIcon },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-10 h-10 mx-auto" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-10 h-10 mx-auto" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-10 h-10 mx-auto" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-400 w-10 h-10 mx-auto" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 w-10 h-10 mx-auto" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-10 h-10 mx-auto" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-10 h-10 mx-auto" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 w-10 h-10 mx-auto" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 w-10 h-10 mx-auto" /> },
  { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver className="text-red-600 w-10 h-10 mx-auto" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500 w-10 h-10 mx-auto" /> },
  { name: "GitHub", icon: <FaGithub className="text-white w-10 h-10 mx-auto" /> },
];

function Tech() {
  return (
    <section id="tech" className="bg-[#0a0f1c] py-20 px-4 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          🛠 Tech I Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl shadow hover:shadow-xl transform transition duration-300 hover:scale-105"
              aria-label={`Technology: ${tech.name}`}
            >
              <div className="mb-3 flex justify-center">{tech.icon}</div>
              <p className="text-lg font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
