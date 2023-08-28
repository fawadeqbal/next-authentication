"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link component
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [buttonDisbaled, setButtonDisbaled] = useState(true)
  const [loading,setLoading] = useState(false)
  useEffect(() => {

    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisbaled(false)
    } else {
      setButtonDisbaled(true)
    }
  }, [user])
  const handleSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/signup', user); // Replace with your API endpoint
      setLoading(false)
      console.log(response.data);
      // Handle successful signup, e.g., show success message, redirect to login, etc.
      router.push('/login')
    } catch (error:any) {
     toast.error(error.message)
      // Handle error, show error message, etc.
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-2xl font-bold mb-4'>{loading?"Processing":"Signup"}</h1>
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
          {buttonDisbaled ? "No Signup" : "Signup"}
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
