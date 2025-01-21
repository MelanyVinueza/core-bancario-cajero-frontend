import React from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
};

interface PostItemProps {
  post: Post;
  onDelete: (id: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onDelete }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
};

export default PostItem;
