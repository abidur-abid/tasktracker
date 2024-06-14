import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://tasktrackerserver.onrender.com/api/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {

    try {
      const response = await fetch(`https://tasktrackerserver.onrender.com/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      setTasks(tasks.filter(task => task._id !== id));
      toast.success('Successfully Deleted Task')
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full">
        <table className="w-full border-collapse border border-primaryColor">
          <thead>
            <tr>
              <th className="border border-primaryColor px-4 py-2 subHeadline">Number</th>
              <th className="border border-primaryColor px-4 py-2 subHeadline">Title</th>
              <th className="border border-primaryColor px-4 py-2 subHeadline">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td className="border border-primaryColor px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-primaryColor px-4 py-2">{task.title}</td>
                <td className="border border-primaryColor px-4 py-2 text-center">
                  <button 
                    onClick={() => handleDelete(task._id)} 
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
