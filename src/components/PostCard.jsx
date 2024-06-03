import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="relative border rounded-lg overflow-hidden">
      <Link to={`/posts/${post.id}`}>
        <img className="w-full h-48 object-cover" src={post.thumbnail} alt={post.title} />
        <div className="absolute inset-0 bg-primary bg-opacity-25 hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-sm">{post.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
