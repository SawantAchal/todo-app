import React, { useEffect } from 'react';

const FinishedTask = ({ finishTask, setFinishTask, isOpen, onClose }) => {

  useEffect(() => {
    const storedFinishedTasksString = localStorage.getItem('finishedTasks');
    if (storedFinishedTasksString) {
      const storedFinishedTasks = JSON.parse(storedFinishedTasksString);
      setFinishTask(storedFinishedTasks);
    }
  }, [setFinishTask]);

  return (
    <>
      {isOpen && (
        <div className="pt-12 flex justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {finishTask.map((task, index) => (
              <li key={index} className="border border-black w-72 mx-auto mb-4">
                <div className="p-4 text-center">
                  <span className="block h-7 overflow-hidden text-2xl font-semibold">{task.userdate}</span>
                  <hr className="my-2" />
                  <p className="h-28 text-xl font-medium">{task.taskName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FinishedTask;
