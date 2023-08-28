"use client"
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link component
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleSignup = async () => {
    try {
      // const response = await axios.post('/api/signup', user); // Replace with your API endpoint
      // console.log(response.data);
      // Handle successful signup, e.g., show success message, redirect to login, etc.
    } catch (error) {
      console.error(error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-2xl font-bold mb-4'>Signup</h1>
      <hr className='w-1/2 my-4' />

      <div className='w-1/3'>
        <input
          type='email'
          placeholder='Email'
          className='w-full p-2 mb-2 border rounded'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 mb-2 border rounded'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type='text'
          placeholder='Username'
          className='w-full p-2 mb-4 border rounded'
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <button
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          onClick={handleSignup}
        >
          Signup
        </button>
        <p className='mt-4 text-center'>
          Already have an account?
          <Link href='/login' className='text-blue-500 hover:underline'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
