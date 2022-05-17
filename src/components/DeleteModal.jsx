import React from 'react'
import axios from 'axios';

export const DeleteModal = ({setOpenDelete, openDelete, tasks, setTasks, taskId, taskName}) => {

  const handleDelete = (taskId) => {
    axios.delete("http://localhost:5000/tasks", {
      data: { taskId },
    });

    console.log("deleted");
    setTasks(tasks.filter((task) => task._id !== taskId));
    setOpenDelete(false)
  };
  return (
    <div
          id="popup"
          className="z-50 fixed w-full flex justify-center inset-0"
        >
          <div
            onClick={() => setOpenDelete(false)}
            className="w-full h-full bg-transparent backdrop-blur z-0 absolute inset-0"
          />
          <div className="mx-auto container">
            <div className="flex items-center justify-center h-full w-full">
              <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                  <p className="text-base font-semibold">Delete Task</p>
                  <button
                    type="button"
                    onClick={() => setOpenDelete(false)}
                    className="focus:outline-none"
                  >
                    
                  </button>
                </div>
                <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                  <p>Are you sure you want to delete task {`${taskName}`}? </p>
                  <div className="mt-11">
                    
                   
                   
                  </div>
                  <div className="flex items-center justify-between mt-9">
                    <button
                      type="button"
                      onClick={() => setOpenDelete(false)}
                      className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                    >
                      Cancel
                    </button>
                    <button
                    onClick={()=>handleDelete(taskId)}
                      type="submit"
                      className="px-6 py-3 bg-red-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                    >
                      Delete Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
