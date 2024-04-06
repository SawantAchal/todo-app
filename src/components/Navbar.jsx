import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiCalendar } from 'react-icons/ci';
import Sidebar from './Sidebar';

const Navbar = ({ onSelectDate }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="flex items-center bg-[#6D9773] text-white w-full justify-between p-4 fixed top-0 z-50">
        <GiHamburgerMenu onClick={handleShowSidebar} className="text-2xl font-bold md:hidden" />
        <h2 className="text-2xl font-bold md:pl-96">TODO's APP</h2>
        <CiCalendar className="text-2xl font-bold cursor-pointer" />
      </nav>
      <Sidebar isOpen={showSidebar} onClose={handleShowSidebar} />
    </>
  );
};

export default Navbar;
