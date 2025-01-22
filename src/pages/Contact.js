const Contact = () => (
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
        <h1 className="text-5xl font-extrabold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-300">
          Feel free to reach out via the methods below.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-white bg-opacity-70 rounded-lg p-8 text-gray-800 shadow-lg w-full md:w-2/3 lg:w-1/2">
        <p className="mb-4">
          <strong>Email:</strong> <a href="mailto:howk829@gmail.com" className="text-blue-500 hover:underline">howk829@gmail.com</a>
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> <a href="tel:+16476865975" className="text-blue-500 hover:underline">647-686-5975</a>
        </p>
        <p className="mb-4">
          <strong>GitHub:</strong> <a href="https://github.com/howk829" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/howk829</a>
        </p>
        <p className="mb-4">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tommy-ho-b66a1a1a6/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/tommy-ho-b66a1a1a6</a>
        </p>
        <p>
          <strong>Location:</strong> Toronto, ON
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
