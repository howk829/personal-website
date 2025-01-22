import React, { useState } from 'react';

const Blog = () => {
  // Example blog post data
  const blogPosts = [
    { id: 1, date: 'January 22, 2025', title: 'Understanding React Hooks', preview: 'React Hooks revolutionized state and lifecycle management in React applications...' },
    { id: 2, date: 'January 15, 2025', title: 'A Guide to Tailwind CSS', preview: 'Tailwind CSS offers a utility-first approach to styling, making it easier to create responsive designs...' },
    { id: 3, date: 'January 8, 2025', title: 'The Power of Microservices', preview: 'Microservices architecture enables developers to build scalable, modular applications...' },
    { id: 4, date: 'January 1, 2025', title: 'Getting Started with Golang', preview: 'Golang is a modern programming language designed for simplicity and efficiency...' },
    { id: 5, date: 'December 25, 2024', title: 'AWS for Beginners', preview: 'Learn how to use AWS cloud services to build scalable, reliable applications...' },
    { id: 6, date: 'December 18, 2024', title: 'Docker Basics', preview: 'Docker simplifies containerization, enabling seamless application deployment...' },
    { id: 7, date: 'December 10, 2024', title: 'JavaScript ES6 Features', preview: 'Explore the latest features in ES6, including arrow functions, promises, and more...' },
    { id: 8, date: 'December 1, 2024', title: 'Why Choose React?', preview: 'React is a popular JavaScript library for building user interfaces. Learn why it’s so widely used...' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate displayed posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background image
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 py-16 max-w-screen-lg mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg text-gray-300">
            Explore my thoughts on web development, technology, and more.
          </p>
        </div>

        {/* Blog List */}
        <div className="space-y-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white bg-opacity-70 rounded-lg shadow-lg p-6 text-gray-800"
            >
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.preview}</p>
              <button className="text-blue-500 font-medium hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              } transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

