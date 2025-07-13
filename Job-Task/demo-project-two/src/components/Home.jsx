import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Table from './Table';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-lg pb-10  pt-4">
        <div className="container h-fit rounded-3xl sm:mx-auto sm:border-2 sm:border-gray-200 ">
          <Profile />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
