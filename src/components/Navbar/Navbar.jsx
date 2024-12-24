import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext)
  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto rounded-full  h-10' src='https://i.ibb.co.com/V90R8xJ/brain-Buddies-logo.webp' alt='' />
          <span className='font-bold'>BrainBuddies</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li><Link to='/all-assignment'>Assignments</Link></li>

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
               
    
          {
            user&&(<li>
            <Link to='/pendingAssignment'>Pending Assign</Link>
          </li>)
          }

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