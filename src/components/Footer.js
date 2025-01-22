const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-center md:text-left">&copy; 2025 Tommy Ho. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/howk829" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tommy-ho-b66a1a1a6" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:howk829@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
