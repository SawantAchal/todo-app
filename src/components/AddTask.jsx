import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AddTask = ({ onAddTask, isOpen, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [userdate, setUserDate] = useState('');

  const handleTaskNameChange = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };

  const handleUserdateChange = (e) => {
    e.preventDefault();
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split('T')[0];

    if (selectedDate < currentDate) {
      alert('Please select a future date');
      return;
    }

    setUserDate(selectedDate);
  };

  const handleOnsubmitTask = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      alert('Please enter a task');
      return;
    }
    const newTask = { taskName, userdate };
    onAddTask(newTask);
    setTaskName('');
    setUserDate('');
    onClose();
  };
  

  const getCurrentdate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-72 max-w-sm z-50 animate-scale-in">
            <div className="flex justify-end">
              <FaTimes className="text-gray-500 cursor-pointer" onClick={onClose} /> {/* Cancel icon */}
            </div>
            <form onSubmit={handleOnsubmitTask} className="flex flex-col">
              <input
                type="date"
                value={userdate || getCurrentdate()}
                onChange={handleUserdateChange}
                required
                className="h-10 border border-gray-300 rounded-md mb-4 px-3"
              />
              <textarea
                type="text"
                placeholder="Add Task"
                value={taskName}
                onChange={handleTaskNameChange}
                rows={4}
                className="h-24 resize-none border border-gray-300 rounded-md mb-4 p-2"
              />
              <button
                type="submit"
                className="bg-[#0C3B2E] hover:bg-[#6D9773] text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
