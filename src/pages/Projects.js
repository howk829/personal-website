import React from 'react';

const Projects = () => (
  <div
    className="relative min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background image
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-opacity-70"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-white px-6 py-16 max-w-screen-lg mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">My Projects</h1>
        <p className="text-lg text-gray-300">
          Here are some of the projects I've worked on that showcase my skills and expertise.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project Card */}
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <div key={project} className="bg-white bg-opacity-70 rounded-lg shadow-lg p-6 text-gray-800">
            <h2 className="text-xl font-bold mb-4">Project Title {project}</h2>
            <p className="text-gray-600">
              A brief description of the project goes here, highlighting key features and technologies used.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
