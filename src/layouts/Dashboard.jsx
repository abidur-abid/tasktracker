import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from '../assets/logo.png';
import { FaBars, FaHome, FaUser, FaPlusCircle, FaClipboardList, FaHourglassHalf, FaCheckCircle, FaTasks, FaSignOutAlt } from 'react-icons/fa';
import { TiThSmallOutline } from "react-icons/ti";
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success('Successfully Logged out');
      navigate('/'); // Redirect to home page after logout using navigate
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`lg:pl-16 fixed md:relative bg-[#FF9EAA] p-4 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 w-64 z-10`}>
        <div className="flex justify-center lg:justify-start my-10">
          <Link to={'/'}><img src={logo} className='logo' alt="Logo" /></Link>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/" onClick={toggleSidebar} className="footerLink">
            <FaHome className="" /> Home
          </Link>
          <Link to="/dashboard/profile" onClick={toggleSidebar} className="footerLink">
            <FaUser className="" /> Profile
          </Link>
          <Link to="/dashboard/alltasks" onClick={toggleSidebar} className="footerLink">
          <TiThSmallOutline />
          All Tasks
          </Link>
          <Link to="/dashboard/todos" onClick={toggleSidebar} className="footerLink">
            <FaTasks className="mr-2" /> To-Do
          </Link>
          
          
          <Link to="/dashboard/addtask" onClick={toggleSidebar} className="footerLink">
            <FaPlusCircle className="" /> Add Task
          </Link>
          <button onClick={handleLogOut} className="footerLink">
            <FaSignOutAlt className="" /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64 flex flex-col items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex justify-between items-center mb-4 w-full">
          <button onClick={toggleSidebar} className="text-[#1E4682]">
            <FaBars className="text-2xl" />
          </button>
        </div>
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
