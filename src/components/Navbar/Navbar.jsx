import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-full rounded-full   h-10' src='https://i.ibb.co.com/V90R8xJ/brain-Buddies-logo.webp' alt='' />
          <span className={`hidden md:block lg:block`}>BrainBuddies</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-3'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li><Link to='/all-assignment'>Assignments</Link></li>
           {
            user&&(<li>
            <Link to='/pendingAssignment'>Pending Assign</Link>
          </li>)
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
          <div className='dropdown dropdown-end z-50'>
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
                <Link to='/create-assignment'>Create Assignment</Link>
              </li>
              <li>
                <Link to='/my-assignment'>My Submitted Assignments</Link>
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