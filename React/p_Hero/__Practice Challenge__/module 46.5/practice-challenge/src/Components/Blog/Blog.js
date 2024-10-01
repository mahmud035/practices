import React from 'react';
import './Blog.css';

const Blog = ({ heading, author }) => {
  return (
    <div>
      <h2>Heading: {heading}</h2>
      <p>Author: {author}</p>
    </div>
  );
};

export default Blog;
