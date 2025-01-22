import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Asciidoctor from 'asciidoctor';

// Initialize AsciiDoc processor
const asciidoctor = Asciidoctor();

const BlogPost = () => {
  const { id } = useParams();

  // Example blog post data
  const blogPosts = [
    {
      id: 1,
      date: 'January 22, 2025',
      title: 'Understanding React Hooks',
      content: `# React Hooks
React Hooks revolutionized state and lifecycle management in React applications.

## Features
- Simplicity
- Reusability
- Clean code`,
      format: 'markdown', // Specify content format
      tags: ['React', 'JavaScript'],
    },
    {
      id: 2,
      date: 'January 15, 2025',
      title: 'A Guide to Tailwind CSS',
      content: `= A Guide to Tailwind CSS
Tailwind CSS offers a utility-first approach to styling, making it easier to create responsive designs.

== Key Benefits
- Rapid UI development
- Highly customizable
- Modern CSS framework`,
      format: 'asciidoc', // Specify content format
      tags: ['CSS', 'Frontend'],
    },
  ];

  // Find the blog post based on the id
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center text-white">Blog post not found</div>;
  }

  // Render content based on format
  const renderContent = () => {
    if (post.format === 'markdown') {
      return <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>;
    }
    if (post.format === 'asciidoc') {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: asciidoctor.convert(post.content) }}
        />
      );
    }
    return <p>Unsupported format</p>;
  };

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
        <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <div className="prose prose-invert">{renderContent()}</div>
        {/* Display Tags */}
        <div className="flex space-x-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
