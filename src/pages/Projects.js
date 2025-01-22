import React from 'react';

const Projects = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      title: 'React Portfolio Website',
      description: 'A personal portfolio website built using React and Tailwind CSS, showcasing my skills and projects.',
      image: 'https://files.oaiusercontent.com/file-VtUPMvefuYvJW5j9E2w3mo?se=2025-01-22T17%3A05%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dimage.png&sig=v/Bin/WpJh1b63EH4cUOyisLzB7c6n37KQDLfFrJBrM%3D', // Replace with project image URL
      links: {
        github: 'https://github.com/your-repo',
      },
    },
    {
      id: 2,
      title: 'E-commerce Store',
      description: 'A fully functional e-commerce platform with cart and payment integrations using Stripe.',
      image: 'https://github.com/howk829/FluxBridge/blob/master/fluxbridge.png?raw=true', // Replace with project image URL
      links: {
        github: 'https://github.com/your-repo',
      },
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'A blog platform with authentication and a rich text editor built using Node.js and MongoDB.',
      image: 'https://petapixel.com/assets/uploads/2018/04/instagramdownloadfeatt.jpg', // Replace with project image URL
      links: {
        github: 'https://github.com/your-repo',
      },
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with background image URL
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 py-16 max-w-screen-lg mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">My Projects</h1>
          <p className="text-lg text-gray-300">
            Here are some of the projects I’ve worked on, showcasing my skills and expertise in web development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Details */}
              <div className="p-6 text-gray-800">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
