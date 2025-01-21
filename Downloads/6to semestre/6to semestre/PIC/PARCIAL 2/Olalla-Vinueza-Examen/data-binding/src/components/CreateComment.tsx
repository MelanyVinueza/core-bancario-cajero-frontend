// src/components/CreateComment.tsx
import { useState } from 'react';

const CreateComment = ({ postId }: { postId: number }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment = { comment, postId, id: Date.now() };

    // Guardar el nuevo comentario en LocalStorage
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));

    alert('Comment created successfully!');
    setComment('');
  };

  return (
    <div className="create-comment">
      <h1>Create Comment</h1>
      <form onSubmit={handleCommentSubmit}>
        <div className="input-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">Create Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
