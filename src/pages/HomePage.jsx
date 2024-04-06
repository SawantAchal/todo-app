import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import AddTask from '../components/AddTask';
import FinishedTask from '../components/FinishedTask';

const HomePage = () => {
  const [openTask, setOpenTask] = useState(false);
  const [task, setTask] = useState([]);
  const [finishTask, setFinishTask] = useState([]);
  const [openFinish, setOpenFinish] = useState(false);
  const [todoListOpen, setTodoListOpen] = useState(true);

  useEffect(() => {
    const storedTasksString = localStorage.getItem('tasks');
    if (storedTasksString) {
      const storedTasks = JSON.parse(storedTasksString);
      setTask(storedTasks);
    }

    const storedFinishedTasksString = localStorage.getItem('finishedTasks');
    if (storedFinishedTasksString) {
      const storedFinishedTasks = JSON.parse(storedFinishedTasksString);
      setFinishTask(storedFinishedTasks);
    }
  }, []);

  const addTask = (newTask) => {
    const date = new Date().toISOString().split('T')[0];
    const taskWithDate = { ...newTask, userdate: date };
    const updatedTasks = [...task, taskWithDate];
    setTask(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleOpen = () => {
    setOpenTask(!openTask);
  };

  const handleClose = () => {
    setOpenTask(false);
  };

  const handleOpenFinish = () => {
    setOpenFinish(true);
    setTodoListOpen(false);
  };

  const handleCloseFinish = () => {
    setOpenFinish(false);
  };

  const handleYourTaskClick = () => {
    setTodoListOpen(true);
    setOpenFinish(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <AddTask onAddTask={addTask} isOpen={openTask} onClose={handleClose} />
        </div>
        {todoListOpen && !openFinish && (
          <TodoList task={task} setTask={setTask} finishTask={finishTask} setFinishTask={setFinishTask} />
        )}
        {openFinish && (
          <FinishedTask finishTask={finishTask} setFinishTask={setFinishTask} isOpen={openFinish} isClose={handleCloseFinish} />
        )}
      </div>
      <button className="bg-[#6D9773] hover:bg-[#0C3B2E] h-12 w-12 rounded-full shadow-md fixed bottom-8 right-8 z-10 flex items-center justify-center" onClick={handleOpen}>
        <span className="text-white text-2xl">+</span>
      </button>
      <button className="bg-[#6D9773] hover:bg-[#0C3B2E] h-12 w-36 rounded-full shadow-md fixed bottom-24 right-8 z-10 flex items-center justify-center" onClick={openFinish ? handleYourTaskClick : handleOpenFinish}>
        <span className="text-white font-semibold">{openFinish ? 'Your Tasks' : 'Finish Task'}</span>
      </button>
    </>
  );
};

export default HomePage;
