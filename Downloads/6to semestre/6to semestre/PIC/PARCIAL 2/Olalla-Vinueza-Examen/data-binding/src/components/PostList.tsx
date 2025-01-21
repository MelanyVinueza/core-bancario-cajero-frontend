import React from 'react';
import PostItem from './PostItem';

type Post = {
  id: string;
  title: string;
  content: string;
};

interface PostListProps {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;
