import myPhoto from '../assets/personal_photo.jpg'; // Adjust the path to your image


const About = () => (
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
        <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-lg text-gray-300">Get to know me better</p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Photo */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 text-3xl">
            {/* Placeholder for Photo */}
            <img
            src={myPhoto}
            alt="My Photo"
            className="object-cover w-full h-full"
          />
          </div>
        </div>

        {/* Right Column: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <p className="text-gray-300 mb-4">
            I’m Tommy Ho, a Solution Architect and Backend Developer with 4 years of experience in the FinTech industry.
            My expertise lies in building scalable, efficient solutions and driving digital transformation for enterprise
            clients.
          </p>
          <p className="text-gray-300">
            Passionate about solving complex problems, I specialize in modern technologies like microservices, cloud
            platforms, and event-driven systems. Outside work, I enjoy exploring new tools and learning about cutting-edge
            technologies.
          </p>
        </div>
      </div>

      {/* Skill Icons/Cards */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Individual Skill Cards */}
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-400">Java</h3>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-400">Golang</h3>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-400">AWS</h3>
        </div>
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-400">Microservices</h3>
        </div>
      </div>
    </div>
  </div>
);

export default About;
