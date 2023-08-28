"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Profile = () => {
    const [user,setUser]=useState({
        email:'',
        username:''
    })
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-2xl font-bold mb-4'>Profile</h1>
      <hr className='w-1/2 my-4' />

      <div className='w-1/3'>
        <p className='mb-2'>
          <strong>Email:</strong> {user.email}
        </p>
        <p className='mb-2'>
          <strong>Username:</strong> {user.username}
        </p>
        {/* Additional user information can be displayed here */}
        
        <Link href='/'
         className='text-blue-500 hover:underline'>Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;
