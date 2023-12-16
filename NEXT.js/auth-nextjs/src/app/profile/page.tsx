'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProfilePage = () => {
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
      console.log(response.data);
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get('/api/users/me');
    console.log(response.data);
    setUserId(response.data.data._id);
  };

  // console.log(userId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl">Profile Page</h1>
      <h2 className="p-3 my-2 rounded bg-green-900">
        {userId ? <Link href={`/profile/${userId}`}>{userId}</Link> : 'Nothing'}
      </h2>

      <button
        onClick={getUserDetails}
        className="p-2 border border-green-300 rounded-lg mt-4 focus:outline-none focus:border-green-600"
      >
        Get User Details
      </button>

      <button
        onClick={handleLogout}
        className="p-2  border border-red-300 rounded-lg mt-4 focus:outline-none focus:border-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
