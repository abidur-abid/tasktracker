import React, { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const DashboardProfile = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  console.log(user);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full rounded-lg p-6">
        <div className="flex justify-center mb-6">
          {user && user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-[#FF9EAA] object-cover"
            />
          )}
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1E4682] mb-2 uppercase">{user && user.displayName}</h1>
          <p className="text-xl mb-4">{user && user.email}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 py-8">
          <div className="flex justify-center  items-center bg-primaryColor rounded-lg p-4 shadow-md">
            {/* <FaTasks className="text-3xl mr-4" /> */}
            <div>
              <h2 className="text-5xl font-bold text-center">{tasks.length}</h2>
              <p className='text-center text-xl font-bold my-4'>Total Tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
