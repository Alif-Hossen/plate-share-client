import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import foodShareImg from '../assets/foodsahre.jpg';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => alert("✅ Logged Out!"))
            .catch(error => console.error(error));
  };

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/availableFoods">Available Foods</NavLink></li>
    {!user && <li><NavLink to="/login">Login</NavLink></li>}
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1480px] mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img className='h-[50px] w-[50px] rounded-full' src={foodShareImg} alt="Plate Share Logo" />
          <a className="btn btn-ghost text-xl">Plate Share</a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar cursor-pointer flex items-center gap-1">
              <div className="w-12 rounded-full">
                <img src={user.photoURL || userIcon} alt="profile" />
              </div>
              <svg className="w-4 h-4 mt-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box w-40 shadow mt-3">
              <li><button>Profile</button></li>
              <li><button>Settings</button></li>
              <li><button>Other</button></li>
              <li><button onClick={handleLogout} className="text-red-500 font-semibold">Logout</button></li>
            </ul>
          </div>
        ) : (
          <FaUserCircle className="text-4xl text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default Navbar;



