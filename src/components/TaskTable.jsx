import { useState } from "react";
import axios from "axios";
import { DeleteModal } from "./DeleteModal";

export const TaskTable = ({ tasks, setTasks }) => {
  const [taskDeleteId, setTaskDeleteId] = useState("");
  const [taskDeleteName, setTaskDeleteName] = useState("");

  const [openDelete, setOpenDelete] = useState(false);

  const [statusOption, setStatusOption] = useState('')

  const handleDeleteOpen = (id, name) => {
    setTaskDeleteId(id);
    setTaskDeleteName(name);
    setOpenDelete(true);
  };
  
  const updateStatus = async (taskId) => {
    const response = await axios.put('http://localhost:5000/tasks', {taskId, status: statusOption})
    console.log(statusOption)


  }
  const handleInput = (e) => {
    setStatusOption(e.target.value)
    updateStatus()
    console.log(statusOption)


  }


  return (
    <div>
      <div className="w-full sm:px-6">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-bold text-left pl-4">Project</th>
               
                <th className="font-bold text-left pl-12">Status</th>
                <th className="font-bold text-left pl-20">Budget</th>
                <th className="font-bold text-left pl-20">Deadline</th>
              </tr>
            </thead>
            <tbody className="w-full">
            {tasks &&
              tasks.map((task) => (
               
                  <tr key={task._id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="pl-4">
                          <p className="font-medium">{task.name}</p>
                        </div>
                      </div>
                    </td>
                   
                    <td className="pl-12">
                     
                      <select defaultValue={task.status} onChange={()=>handleInput(task._id)} name={task.status} className='bg-red-400 p-2 rounded text-white'>
                        <option value={task.status}>{task.status}</option>
                        <option value={task.status}>{task.status === "Todo" ? "Urgent"
                        : "Todo"}
                        </option>
                        <option value={task.status}>Completed</option>
                       
                      </select>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">$13,000</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        $4,200 left
                      </p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">22.12.21</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        34 days
                      </p>
                    </td>

                    <td className="px-7 2xl:px-0">
                      <button
                        onClick={() => handleDeleteOpen(task._id, task.name)}
                        className="rounded text-gray-200 bg-red-500 hover:bg-red-600 p-2 shadow"
                      >
                        Delete
                      </button>
                      {openDelete && (
                        <DeleteModal
                          taskDeleteName={taskDeleteName}
                          taskDeleteId={taskDeleteId}
                          taskName={task.name}
                          taskId={task._id}
                          openDelete={openDelete}
                          setOpenDelete={setOpenDelete}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                      )}
                    </td>
                  </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
