import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'School Management System',
    description:
      'A fully modular C++ system for managing students, teachers, courses, attendance, and grades, with persistent file storage.',
    link: 'https://github.com/Nahom-gio/School-mangment-system-with-C-',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A modern, responsive portfolio built using React and Tailwind CSS to showcase my skills, projects, and contact information.',
    link: 'https://github.com/Nahom-gio/my-portfolio',
  },
  {
    title: 'Library Management System',
    description:
      'A fully modular c# system for managing books, patrons, loans, and returns, with persistent file storage. ',
    link: 'https://github.com/Nahom-gio/Library-management-system-with-c-',
  },
  {
    title: 'Wegahta Tigray charity website',
    description:
      'A simple charity website built with HTML, CSS, and JavaScript, designed to raise awareness and support for the Tigray region through donations and project updates.',
    link: 'https://github.com/Nahom-gio/wegahta.tigray',
  },
];

function Projects() {
  return (
   <section id="projects" className="bg-[#0d1325] py-20 px-4 text-gray-200">
      <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-white">🚀 My Projects</h2>
        <p className="text-gray-300 mb-8">Explore some of the projects I've worked on, showcasing my skills and creativity.</p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
