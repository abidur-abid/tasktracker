// Import React and necessary libraries
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineAddCircle } from "react-icons/md";
import { FaCalendarAlt, FaFlag, FaRegListAlt } from 'react-icons/fa';
import taskImage from '../assets/add.png'; // Replace with the path to your image
import toast from 'react-hot-toast';

/**
 * AddTaskForm component: Renders the Add Task form.
 */
const AddTaskForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
     
        try {
            const response = await fetch('https://tasktrackerserver.onrender.com/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to add task');
            }

            // Reset the form after successful submission
            reset();

            // Show success toast notification
            toast.success('Task added successfully');
        } catch (error) {
            console.error('Error adding task:', error);
            // Show error toast notification
            toast.error('Failed to add task');
        }
    };

    return (
        <div className="min-h-screen bg-[#FFD0D0] flex flex-col items-center p-6">
            <div className="max-w-2xl w-full  rounded-lg shadow-lg p-6">
                <div className="flex justify-center mb-6">
                    <img
                        src={taskImage}
                        alt="Add Task"
                        className="w-48 h-48 object-cover"
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
                    <div className="mb-4">
                        <div className="">
                            <FaRegListAlt className="text-[#1E4682] p-2" />
                            <input
                                type="text"
                                id="title"
                                {...register('title', { required: true })}
                                className=" bg-transparent border-2 border-primaryColor rounded-lg w-full px-3 py-2 outline-none"
                                placeholder="Task Title"
                            />
                        </div>
                        {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="description"
                            {...register('description', { required: true })}
                            className="bg-transparent border-2 border-primaryColor rounded-lg w-full px-3 py-2 outline-none"
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
                                className="bg-transparent border-2 border-primaryColor rounded-lg w-full px-3 py-2 outline-none"
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
                                className="bg-transparent border-2 border-primaryColor rounded-lg w-full px-3 py-2 outline-none"
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        {errors.priority && <p className="text-red-500 text-sm mt-1">Priority is required</p>}
                    </div>

                    <button type="submit" className=" secondaryButton mx-auto">
                        <MdOutlineAddCircle />
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskForm;
