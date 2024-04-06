import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { HiOutlineLogin } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('LoggedInUser');
    navigate('/login');
  };

  return (
    <div className={`fixed left-0 top-3 bg-[#6D9773] text-white w-64 h-full p-3 z-50 ${isOpen ? '' : 'hidden'} lg:block`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold ">Menu</h2>
        <MdOutlineCancel onClick={onClose} className='text-xl font-bold cursor-pointer md:hidden' />
      </div>
      <ul className='mb-2'>
        <li className='mt-3'>
          <Link to="/profile" className='flex items-center gap-3 text-white font-bold'>
            <FaUser className='w-6 h-6' />
            Profile
          </Link>
        </li>
        <li className='mt-3'>
          <p onClick={handleLogout} className='cursor-pointer flex items-center gap-3 text-white font-bold'>
            <IoLogOutOutline className='w-6 h-6' />
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;



