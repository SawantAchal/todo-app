import React, {  useEffect } from 'react';

const TodoList = ({ task, setTask, setFinishTask, finishTask }) => {

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

  const handleFinishTask = (index) => {
    const taskToFinish = task[index];
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
    const updatedFinishedTasks = [...finishTask, taskToFinish];
    setFinishTask(updatedFinishedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('finishedTasks', JSON.stringify(updatedFinishedTasks));
  };

  return (
    <div className='pt-12 flex justify-center'>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {task.map((task, i) => (
          <li key={i} className="border border-black w-72 mx-auto mb-4">
            <div className='p-4 text-center'>
              <span className='block h-7 overflow-hidden text-2xl font-semibold'>{task.userdate}</span>
              <hr className="my-2" />
              <p className='h-28 text-xl font-medium'>{task.taskName}</p>
              <button className='bg-[#0C3B2E] hover:bg-[#6D9773] w-full h-8 text-white font-bold rounded-md mt-2' onClick={() => handleFinishTask(i)}>
                Finish
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
