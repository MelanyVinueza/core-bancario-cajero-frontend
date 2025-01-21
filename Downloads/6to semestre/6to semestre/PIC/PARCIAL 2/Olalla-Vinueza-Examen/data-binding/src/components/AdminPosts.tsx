// src/components/AdminPosts.tsx
import { useState, useEffect } from 'react';

const AdminPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);

  const handleDeletePost = (postId: number) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    alert('Post deleted successfully!');
  };

  return (
    <div className="admin-posts">
      <h1>Admin - Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)} className="btn">Delete Post</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPosts;
