import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('Email');
    const storedPassword = localStorage.getItem('Password');

    if (storedEmail && storedPassword) {
      
      if (email.toLowerCase() === storedEmail.toLowerCase() && password === storedPassword) {
        window.localStorage.setItem('LoggInuser', email);
        onLogin();
        navigate('/home');
        return; 
      }
    }

    alert('Invalid credentials');
  };

  return (
    <div className='flex justify-center'>
      <div className='mt-11 text-center p-5 bg-gray-100 rounded-md shadow-md'>
        <h3 className='font-bold mt-2 text-2xl text-[#0C3B3E]'>LOGIN</h3>
        <form className='flex flex-col items-center text-center'>
          <input
            type='email'
            placeholder='Enter your Email'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter your password'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='p-3 mt-3 rounded-md font-bold border border-black bg-[#0C3B2E] hover:bg-[#6D9773] text-white '
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className='mt-3'>
            Don't have an Account{' '}
            <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
