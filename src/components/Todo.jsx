import React, {useState} from 'react'

export const Todo = () => {
  const [formResults, setFormResults] = useState('')

  const handleChange = (e) => {
    setFormResults(e.target.value)


  }
  return (
    <div className=''>
      <div className='flex flex-col p-6 w-screen justify-center items-center'>

      <textarea 
      className='border border-black rounded'
      onChange={handleChange}>

      </textarea>
      <button className='rounded mt-2 bg-black text-white p-2 px-4 shadow'>Add Task</button>
      </div>
      <div>
        <h1>Tasks</h1>
        <hr/>
        {formResults && <>
        {formResults}
        </>}
      </div>
      </div>
  )
}
