import React, { useState, useEffect, useRef } from 'react'
import Logo from '../assets/Logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import ProfilePic from '../assets/profile.jpg'   

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);  // false = not logged in
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between text-sm py-4 px-6 shadow-md bg-white z-50">
      <img className="w-24 h-10" src={Logo} alt="DocSync Logo" />

      <ul className='hidden md:flex items-start gap-10 font-medium'>
        <NavLink to='/' className={({ isActive }) => `py-1 ${isActive ? 'text-[#20B2AA] border-b-2 border-[#20B2AA]' : 'text-gray-800'}`}>HOME</NavLink>
        <NavLink to='/doctors' className={({ isActive }) => `py-1 ${isActive ? 'text-[#20B2AA] border-b-2 border-[#20B2AA]' : 'text-gray-800'}`}>ALL DOCTORS</NavLink>
        <NavLink to='/about' className={({ isActive }) => `py-1 ${isActive ? 'text-[#20B2AA] border-b-2 border-[#20B2AA]' : 'text-gray-800'}`}>ABOUT US</NavLink>
        <NavLink to='/contact' className={({ isActive }) => `py-1 ${isActive ? 'text-[#20B2AA] border-b-2 border-[#20B2AA]' : 'text-gray-800'}`}>CONTACT US</NavLink>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {!token ? (
          <button 
            onClick={() => navigate('/login')}
            className='bg-[#20B2AA] text-white px-4 py-2 rounded-md hover:bg-[#1a9b94] transition font-light hidden md:block'
          >
            Create an account
          </button>
        ) : (
          <div ref={menuRef} className="relative flex items-center gap-2 cursor-pointer">
            <img 
              src={ProfilePic} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <svg 
              onClick={() => setShowMenu(!showMenu)}
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${showMenu ? "rotate-180" : ""}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>

            {showMenu && (
              <div className="absolute top-12 right-0 bg-white shadow-md rounded-md w-40 text-gray-700">
                <p   onClick={() => navigate('/myprofile')} className="px-4 py-2 hover:text-[#20B2AA] cursor-pointer">My Profile</p>
                <p  onClick={() => navigate('/myappoinments')} className="px-4 py-2 hover:text-[#20B2AA]  cursor-pointer">My Appointments</p>
                <p   onClick={() => navigate('/login')} className="px-4 py-2 hover:text-[#20B2AA]  cursor-pointer">Log Out</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
