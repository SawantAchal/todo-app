import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !name || !number || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and confirm password do not match.');
      return;
    }

    localStorage.setItem('Email', email);
    localStorage.setItem('Name', name);
    localStorage.setItem('Number', number);
    localStorage.setItem('Password', password);
    localStorage.setItem('Confirm Password', confirmPassword);

    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    
    const newUser = {
      email: email,
      name: name,
      number: number,
      password: password,
    };

    
    const updatedUsers = [...existingUsers, newUser];

    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/home');
  };

  return (
    <div className='flex justify-center'>
      <div className='h-fit mt-11 text-center p-5 bg-gray-100 rounded-md shadow-md'>
        <h4 className='font-bold mt-2 text-2xl text-[#0C3B3E]'>REGISTER</h4>
        <form className='flex flex-col items-center text-center'>
          <input
            type='email'
            placeholder='Enter your Email'
            name='email'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter your Name'
            name='name'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            placeholder='Enter your contact No'
            name='number'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter your password'
            name='password'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Confirm Your Passsword'
            name='confirmpassword'
            className='h-9 border border-gray-400 rounded-md mt-3 w-60 px-2'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button
            className='p-3 mt-3 rounded-md font-bold border border-black bg-[#0C3B2E] hover:bg-[#6D9773] text-white '
            onClick={handleSignUp}
          >
            Register
          </button>
          <p>
            Already have an Account?{' '}
            <span className='text-blue-600 cursor-pointer font-bold mt-1' onClick={() => navigate('/login')}>
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
