import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaCloudMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
import useTheme from '../../Hooks/useTheme';

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext)
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className='navbar fixed z-30 top-0 bg-gray-900 text-white px-8 shadow-sm container  mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-full rounded-full h-10' src='https://i.ibb.co.com/V90R8xJ/brain-Buddies-logo.webp' alt='' />
          <span className={`hidden md:block lg:block`}>BrainBuddies</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-3'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li><NavLink to='/all-assignment'>Assignments</NavLink></li>
           {
            user&&(<li>
            <NavLink to='/pendingAssignment'>Pending Assign</NavLink>
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
          <div className='dropdown  dropdown-end z-50'>
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
              className='menu menu-sm dropdown-content mt-3 z-30 bg-base-100 p-2 shadow border rounded-box w-52'
            >
               
    
         

              <li  className={`${theme==='light'&& 'text-black'}`}>
                <Link to='/create-assignment'>Create Assignment</Link>
              </li>
              <li className={`${theme==='light'&& 'text-black'}`}>
                <Link to='/my-assignment'>My Submitted Assignments</Link>
              </li>
              
              <li className='mt-2'>
                <button
                  onClick={handleLogOut}
                  className='btn block text-center'
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