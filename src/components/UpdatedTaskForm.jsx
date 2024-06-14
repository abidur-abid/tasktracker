// Import React and necessary libraries
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaFlag, FaRegListAlt } from 'react-icons/fa';
import taskImage from '../assets/update.png'; // Replace with the path to your image
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GrUpdate } from 'react-icons/gr';
import { toast } from 'react-hot-toast';

/**
 * UpdateTaskPage component: Renders the Update Task page for the Task Tracker website.
 * - Displays a form to update an existing task with title, description, deadline, and priority.
 */

const UpdatedTaskForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const singleTask = useLoaderData(); // Assuming this hook fetches the task data

  useEffect(() => {
    // Set initial form values based on the task prop
    if (singleTask) {
      setValue('title', singleTask.title);
      setValue('description', singleTask.description);
      setValue('deadline', singleTask.deadline);
      setValue('priority', singleTask.priority);
    }
  }, [singleTask, setValue]);

  const onSubmit = async (data) => {

    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${singleTask._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      // Assuming success, show a success message (using toast) and navigate to Todos page
      toast.success('Task updated successfully');
      navigate('/dashboard/todos') // Navigate to Todos page after successful update
    } catch (error) {
      console.error('Error updating task:', error);
      // Handle error cases (e.g., show error message using toast)
      toast.error('Failed to update task. Please try again.');
    }
  };

  if (!singleTask) return null; // Optional: Handle case when singleTask is not loaded

  return (
    <div className="min-h-screen bg-[#FFD0D0] flex flex-col items-center p-6">
      <div className="max-w-2xl w-full rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-6">
          <img
            src={taskImage}
            alt="Update Task"
            className="h-40 object-cover"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <div className="">
              <FaRegListAlt className="text-[#1E4682] p-2" />
              <input
                type="text"
                id="title"
                {...register('title', { required: true })}
                className="w-full px-3 py-2 outline-none bg-transparent border-2 rounded-lg border-primaryColor"
                placeholder="Task Title"
              />
            </div>
            {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
          </div>
          <div className="mb-4 ">
            <textarea
              id="description"
              {...register('description', { required: true })}
              className="w-full px-3 py-2 outline-none bg-transparent border-2 rounded-lg border-primaryColor"
              placeholder="Task Description"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
          </div>
          <div className="mb-4">
            <div className="bg-transparent border-2 border-primaryColor rounded-lg w-full px-3 py-2 outline-none">
              <FaCalendarAlt className="text-[#1E4682] p-2" />
              <input
                type="date"
                id="deadline"
                {...register('deadline', { required: true })}
                className="w-full px-3 py-2 outline-none bg-transparent border-2 border-primaryColor rounded-lg"
              />
            </div>
            {errors.deadline && <p className="text-red-500 text-sm mt-1">Deadline is required</p>}
          </div>
          <div className="mb-4">
            <div className="bg-transparent border-2 border-primaryColor rounded-lg w-full px-3 py-2 outline-none">
              <FaFlag className="text-[#1E4682] p-2" />
              <select
                id="priority"
                {...register('priority', { required: true })}
                className="w-full px-5 py-2 outline-none bg-transparent border-2 border-primaryColor rounded-lg"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
            {errors.priority && <p className="text-red-500 text-sm mt-1">Priority is required</p>}
          </div>
          <button type="submit" className="secondaryButton mx-auto">
            <GrUpdate />
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatedTaskForm;
