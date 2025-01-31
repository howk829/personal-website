import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {


    const navigate = useNavigate();


  // Example blog post data
  const blogPosts = [
    { id: 1, date: 'January 22, 2025', title: 'Understanding React Hooks', preview: 'React Hooks revolutionized state and lifecycle management in React applications...', tags: ['React', 'JavaScript'] },
    { id: 2, date: 'January 15, 2025', title: 'A Guide to Tailwind CSS', preview: 'Tailwind CSS offers a utility-first approach to styling, making it easier to create responsive designs...', tags: ['CSS', 'Frontend'] },
    { id: 3, date: 'January 8, 2025', title: 'The Power of Microservices', preview: 'Microservices architecture enables developers to build scalable, modular applications...', tags: ['Architecture', 'Backend'] },
    { id: 4, date: 'January 1, 2025', title: 'Getting Started with Golang', preview: 'Golang is a modern programming language designed for simplicity and efficiency...', tags: ['Golang', 'Backend'] },
    { id: 5, date: 'December 25, 2024', title: 'AWS for Beginners', preview: 'Learn how to use AWS cloud services to build scalable, reliable applications...', tags: ['AWS', 'Cloud'] },
    { id: 6, date: 'December 18, 2024', title: 'Docker Basics', preview: 'Docker simplifies containerization, enabling seamless application deployment...', tags: ['Docker', 'DevOps'] },
    { id: 7, date: 'December 10, 2024', title: 'JavaScript ES6 Features', preview: 'Explore the latest features in ES6, including arrow functions, promises, and more...', tags: ['JavaScript', 'Frontend'] },
    { id: 8, date: 'December 1, 2024', title: 'Why Choose React?', preview: 'React is a popular JavaScript library for building user interfaces. Learn why it’s so widely used...', tags: ['React', 'JavaScript'] },
  ];

  // State for filtering and pagination
  const [activeTag, setActiveTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter posts based on the selected tag
  const filteredPosts = activeTag === 'All' ? blogPosts : blogPosts.filter((post) => post.tags.includes(activeTag));

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Extract unique tags
  const uniqueTags = ['All', ...new Set(blogPosts.flatMap((post) => post.tags))];

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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

        {/* Tags Section */}
        {/* <div className="flex justify-center mb-8 space-x-4">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTag(tag);
                setCurrentPage(1); // Reset to the first page when filtering
              }}
              className={`px-4 py-2 rounded-lg ${
                activeTag === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              } transition`}
            >
              {tag}
            </button>
          ))}
        </div> */}

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
              {/* Display Tags */}
              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button 
               onClick={() => navigate(`/blog/${post.id}`)}
              className="mt-4 text-blue-500 font-medium hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
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
