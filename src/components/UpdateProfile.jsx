import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [email, setEmail] = useState(localStorage.getItem('Email') || '');
  const [name, setName] = useState(localStorage.getItem('Name') || '');
  const [number, setNumber] = useState(localStorage.getItem('Number') || '');
  const [password, setPassword] = useState(localStorage.getItem('Password') || '');
  const navigate = useNavigate();

  const updateProfile = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', password);
    localStorage.setItem('Number', number);
    localStorage.setItem('Email', email);
    alert('Profile updated successfully');
    navigate('/profile');
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-gray-200 rounded-lg p-8 shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h1 className="font-bold text-3xl text-center mb-6 text-[#0C3B3E]">Update Profile</h1>
        <form className="flex flex-col items-center text-center">
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            className="h-9 border border-black mt-3 w-full md:w-60 px-3 rounded-md mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            className="h-9 border border-black mt-3 w-full md:w-60 px-3 rounded-md mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter your contact No"
            name="number"
            className="h-9 border border-black mt-3 w-full md:w-60 px-3 rounded-md mb-4"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="h-9 border border-black mt-3 w-full md:w-60 px-3 rounded-md mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex flex-col md:flex-row justify-center">
            <button
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-4 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-green-600"
              onClick={updateProfile}
            >
              Update
            </button>
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-red-600"
              onClick={() => navigate('/profile')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
