import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaCloudMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext)
  // State to track the current theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    // Apply the theme to the <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save the theme to local storage
  }, [theme]);
    // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className='navbar fixed z-30 top-0 bg-gray-900 text-white px-8 shadow-sm container  mx-auto'>
      <div className='flex-1'>
        <NavLink to='/' className='flex gap-2 items-center'>
          <img className='w-full rounded-full   h-10' src='https://i.ibb.co.com/V90R8xJ/brain-Buddies-logo.webp' alt='' />
          <span className={`hidden  lg:block`}>BrainBuddies</span>
        </NavLink>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-3'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li><NavLink to='/all-assignment'>Assignments</NavLink></li>
           {
            user && (<div className='flex'>
               <li>
                <NavLink to='/create-assignment'>Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to='/my-assignment'>My Submitted Assignments</NavLink>
              </li>
              <li>
            <NavLink to='/pendingAssignment'>Pending Assign</NavLink>
          </li>
            </div>)
          }
         
          <button onClick={toggleTheme}>
            {theme === "light" ? <FaCloudMoon /> : <IoIosSunny />}
          </button>
        

          {!user && (
            <li>
              <Link to='/signIn'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown text-black dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
               
    
         

              <li>
                <NavLink to='/create-assignment'>Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to='/my-assignment'>My Submitted Assignments</NavLink>
              </li>
              
              <li className='mt-2'>
                <button
                  onClick={handleLogOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
};

export default Navbar;