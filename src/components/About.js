import React from 'react';

function About() {
  return (
    <section id="about" className="bg-[#0d1325] py-20 px-4 text-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Avatar / Photo */}
        <div className="flex justify-center md:justify-start">
    <img 
  src={`profile.jpg?v=${new Date().getTime()}`} 
  alt="war" 
  className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-500" 
/>

        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white-800 mb-4">About Me</h2>
          <p className="text-white-700 text-lg leading-relaxed mb-6">
           Hello! I'm <span className="font-semibold text-blue-600">Nahom</span>, a Software Engineering student with over 5 years of experience in front-end development.  
I specialize in <strong>C#</strong>, <strong>C++</strong>, and <strong>Java</strong>, and I love solving diverse programming challenges. Passionate about tech and continuous learning, I thrive on collaborating with others to build meaningful software. Let’s connect!
</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="/Nahom_CV.pdf" 
              download 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
              Download CV
            </a>
            <a 
              href="#projects" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow">
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
