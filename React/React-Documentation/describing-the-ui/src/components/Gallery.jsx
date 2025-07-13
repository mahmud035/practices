import React from 'react';
import Card from './Card';
import Profile from './Profile';
import TodoList from './TodoList';

const Gallery = () => {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <TodoList />
    </section>
  );
};

export default Gallery;
