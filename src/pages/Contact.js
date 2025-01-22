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
          I'd love to hear from you! Feel free to get in touch via the methods below.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-4">
            <strong>Email:</strong> <a href="mailto:howk829@gmail.com" className="text-blue-400 hover:underline">howk829@gmail.com</a>
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Phone:</strong> <a href="tel:+16476865975" className="text-blue-400 hover:underline">647-686-5975</a>
          </p>
          <p className="text-gray-300 mb-4">
            <strong>GitHub:</strong> <a href="https://github.com/howk829" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/howk829</a>
          </p>
          <p className="text-gray-300 mb-4">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tommy-ho-b66a1a1a6/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/tommy-ho-b66a1a1a6</a>
          </p>
          <p className="text-gray-300">
            <strong>Location:</strong> Toronto, ON
          </p>
        </div>

        {/* Right Column: Contact Form Placeholder */}
        <div className="bg-white bg-opacity-70 rounded-lg p-8 text-gray-800 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
