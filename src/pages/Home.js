import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background image
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-screen-lg">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to <span className="text-blue-400">My Portfolio</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          I’m Tommy Ho, a passionate Solution Architect and Backend Developer with expertise in creating scalable, modern solutions.
        </p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition"
          >
            View My Work
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-transparent text-white border border-white rounded-lg font-medium shadow hover:bg-white hover:text-black transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

