// src/components/AdminComments.tsx
import { useState, useEffect } from 'react';

const AdminComments = () => {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    setComments(updatedComments);
    alert('Comment deleted successfully!');
  };

  return (
    <div className="admin-comments">
      <h1>Admin - Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <button onClick={() => handleDeleteComment(comment.id)} className="btn">Delete Comment</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminComments;
