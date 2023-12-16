'use client';

import axios from 'axios';
import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (email: string) => {
    try {
      const response = await axios.post('/api/users/forgotpassword', email);
      console.log(response);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <hr />

      <label htmlFor="n">email</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        placeholder="enter your email to change password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={() => handleForgotPassword(email)}
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Submit
      </button>
    </div>
  );
};

export default ForgotPasswordPage;
