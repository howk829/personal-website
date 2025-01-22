import React from 'react';

const Projects = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      title: 'FluxBridge',
      description: 'A publish-subscribe message broker build on top of RSocket protocol. It can be used in distributed systems, such as microservices and event-driven architectures.',
      image: 'https://github.com/howk829/FluxBridge/blob/master/fluxbridge.png?raw=true', // Replace with project image URL
      links: {
        github: 'https://github.com/howk829/FluxBridge',
      },
    },
    {
      id: 2,
      title: 'React Portfolio Website',
      description: 'A personal portfolio website built using React and Tailwind CSS, showcasing my skills and projects.',
      image: 'https://github.com/howk829/personal-website/blob/main/screenshots.png?raw=true', // Replace with project image URL
      links: {
        github: 'https://github.com/howk829/personal-website',
      },
    },
    {
      id: 3,
      title: 'Instagram Downloader',
      description: 'A Chrome Extension allows you to download photos from intagram just by a few clicks.',
      image: 'https://petapixel.com/assets/uploads/2018/04/instagramdownloadfeatt.jpg', // Replace with project image URL
      links: {
        github: 'https://github.com/howk829/ig-downloader',
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
            Here are some of the projects I’ve worked on, showcasing my skills and expertise in development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white bg-opacity-70 rounded-lg shadow-lg flex flex-col justify-between p-6 text-gray-800"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-4"
            />
            {/* Project Details */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
            {/* GitHub Button */}
            <div className="mt-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
