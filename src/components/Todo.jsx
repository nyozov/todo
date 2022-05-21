import React, { useState, useEffect } from "react";
import axios from "axios";
import { TaskTable } from "./TaskTable";
import Modal from "./Modal";

export const Todo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addedTooltip, setAddedTooltip] = useState(false);
 
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      console.log("test", res.data);
      setTasks(res.data.reverse());
    });
  }, []);

  

 

  return (
    <div className="">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Tasks
          </p>
          <div>
            <button
              onClick={() => setOpenModal(true)}
              className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                New Task
              </p>
            </button>
            {addedTooltip && <div className=' mt-7 ml-3 text-xs absolute bg-green-500 p-1 rounded text-white'>
              Added new task!
              </div>}
            {openModal && (
              <Modal setAddedTooltip={setAddedTooltip} setOpenModal={setOpenModal} setTasks={setTasks} />
            )}
          </div>
        </div>
      </div>
      
      <div>
       
     
        <>
          <TaskTable tasks={tasks} setTasks={setTasks} />
        </>
      </div>
    </div>
  );
};
