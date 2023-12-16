import React from 'react';

const UserProfile = ({ params }: any) => {
  console.log(params);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">
        User Profile:{' '}
        <span className="p-2 ml-2 rounded bg-teal-600">{params.id}</span>
      </h1>
    </div>
  );
};

export default UserProfile;
