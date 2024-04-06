import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const username = localStorage.getItem('Name');
  const contactNo = localStorage.getItem('Number');
  const email = localStorage.getItem('Email');
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-5 text-center items-center ">
      <div className="bg-gray-100 rounded-lg p-8 shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-bold mb-6 text-[#0C3B3E]">YOUR PROFILE</h2>
        <div className="text-left mb-4">
          <p className="text-lg font-semibold text-[#B46617]">
            Name:<span className="text-black pl-8">{username}</span>
          </p>
          <p className="text-lg font-semibold text-[#B46617]">
            Email Id:<span className="text-black pl-2">{email}</span>
          </p>
          <p className="text-lg font-semibold text-[#B46617]">
            Contact No.:<span className="text-black pl-2">{contactNo}</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <button
            onClick={() => navigate('/update-profile')}
            className="bg-[#0C3B2E] hover:bg-[#6D9773] text-white font-bold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-4 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Update Your Profile
          </button>
          <button
            onClick={() => navigate('/home')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
