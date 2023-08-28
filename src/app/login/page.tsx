"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', credentials); // Replace with your API endpoint
      console.log(response.data);
      // Handle successful login, e.g., store authentication token, redirect to dashboard, etc.
    } catch (error) {
      console.error(error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <hr className='w-1/2 my-4' />

      <div className='w-1/3'>
        <input
          type='email'
          placeholder='Email'
          className='w-full p-2 mb-2 border rounded'
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 mb-4 border rounded'
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          onClick={handleLogin}
        >
          Login
        </button>
        <p className='mt-4 text-center'>
          Don't have an account?{' '}
          <Link href='/signup' className='text-blue-500 hover:underline'>Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
