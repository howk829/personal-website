import myPhoto from '../assets/personal_photo.jpg'; // Adjust the path to your image

const About = () => (
  <div
    className="min-h-screen flex flex-col items-center bg-cover bg-center relative"
    style={{
      backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background image
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-opacity-70"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col  items-center text-white px-6 py-16 max-w-screen-lg mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-gray-300">Get to know me better</p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Photo */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-600 overflow-hidden shadow-lg">
            <img
              src={myPhoto}
              alt="My Photo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            I’m Tommy Ho, a Solution Architect and Backend Developer with 4 years of experience in the FinTech industry.
            My expertise lies in building scalable, efficient solutions and driving digital transformation for enterprise
            clients.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Passionate about solving complex problems, I specialize in modern technologies like microservices, cloud
            platforms, and event-driven systems. Outside work, I enjoy exploring new tools and learning about cutting-edge
            technologies.
          </p>
        </div>
      </div>

      {/* Skill Icons/Cards */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Individual Skill Cards */}
        {['Java', 'Golang', 'AWS', 'Microservices'].map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-center p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-bold text-blue-400">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
