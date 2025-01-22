import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const posts = [
    {
      id: "1",
      title: "Understanding React Hooks",
      content: "React Hooks provide a powerful way to manage state and lifecycle events...",
    },
    {
      id: "2",
      title: "Getting Started with Tailwind CSS",
      content: "Tailwind CSS is a utility-first CSS framework...",
    },
  ];

  const post = posts.find((post) => post.id === id);

  if (!post) return <h1>Post not found</h1>;

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;