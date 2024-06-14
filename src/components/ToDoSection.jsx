import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ToDoSection = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

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
      setTasks({
        ...tasks,
        todo: data,
      });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(tasks[source.droppableId], source.index, destination.index);
      setTasks({
        ...tasks,
        [source.droppableId]: items,
      });
    } else {
      const movedItem = tasks[source.droppableId][source.index];
      movedItem.status = destination.droppableId; // Update status
      const sourceItems = [...tasks[source.droppableId]];
      const destItems = [...tasks[destination.droppableId]];
      sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      });
      updateTaskStatus(movedItem._id, destination.droppableId);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      const response = await fetch(`https://tasktrackerserver.onrender.com/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error('Failed to update task status');
      }
      toast.success('Task status updated successfully');
    } catch (error) {
      console.error('Error updating task status:', error);
      toast.error('Failed to update task status');
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
      setTasks({
        ...tasks,
        todo: tasks.todo.filter(task => task._id !== id),
        ongoing: tasks.ongoing.filter(task => task._id !== id),
        completed: tasks.completed.filter(task => task._id !== id),
      });
      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-7xl">
          {['todo', 'ongoing', 'completed'].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  className="bg-primaryColor rounded-lg shadow-md p-4 flex-1"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-xl font-bold text-center mb-4 capitalize">
                    {status.replace('-', ' ')}
                  </h2>
                  <div className="space-y-4">
                    {tasks[status].map((task, index) => (
                      <Draggable key={task._id} draggableId={task._id} index={index}>
                        {(provided) => (
                          <div
                            className="bg-backgroundColor rounded-lg p-4 shadow flex justify-between items-center"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div>
                              <h3 className="font-bold">{task.title}</h3>
                              <p className="text-sm">Due: {task.deadline}</p>
                              <p className="text-sm">Priority: {task.priority}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Link
                                to={`/dashboard/todos/${task._id}`}
                                className="text-secondaryColor"
                              >
                                <FaEdit />
                              </Link>
                              <button
                                onClick={() => handleDelete(task._id)}
                                className="text-red-500"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default ToDoSection;
