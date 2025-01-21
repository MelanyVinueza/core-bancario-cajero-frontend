// src/components/CreatePost.tsx
import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { title, content, id: Date.now() };

    // Guardar el nuevo post en LocalStorage
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post created successfully!');
    setTitle('');
    setContent('');
  };

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handlePostSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
