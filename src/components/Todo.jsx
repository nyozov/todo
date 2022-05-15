import React, { useState, useEffect } from "react";
import axios from "axios";

export const Todo = () => {

  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then((res) => {
      console.log('test', res.data)
      setTasks(res.data)
    })
  
   
  }, [])
  
  const [formResults, setFormResults] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setFormResults(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:5000/tasks', {name: formResults, status:"Todo"})
    axios.get('http://localhost:5000/')
    .then((res) => {
      console.log(res.data)
      setTasks(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    

  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col p-6 w-screen justify-center items-center">
        <textarea
          className="border border-black rounded"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="rounded mt-2 bg-black text-white p-2 px-4 shadow">
          Add Task
        </button>
      </div>
      </form>
      <div>
        <h1>Tasks</h1>
        <hr />
       <div>
         {tasks && tasks.map(task => (
           <div>
             {task.name}
             </div>
         ))}
       </div>
        
      </div>
    </div>
  );
};
