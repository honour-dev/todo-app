import React, { useState } from 'react'

const Todo = () => {

  const [tasks, setTasks] = useState([
    'apple',
    'pineapple',
    'banana',
    'avocado',
  ]);

  
  const addTask = () =>{
    const newTasks = document.getElementById('taskInput').value;
    document.getElementById.value = '';
    setTasks(t => [...t, newTasks]);
  }

  return (
    <main className='text-center flex h-screen'>
      <article className='place-content-center m-auto'>
        <h2 className=" text-[1.3rem] p-2 font-bold bg-green-800 text-white mb-4">
        Website todo
        </h2>
        <div className='border-green-800 border-2 p-[2rem]'>
          <ul className="mt-5 mb-6">
            {tasks.map((task)=>(
              <li key={task}>{task}</li>              
            ))}
          </ul>
          <div>
            <input type="text" placeholder='add task' id='taskInput' className='border-2 border-green-800 pl-1 rounded-md ml-2 p-[.2rem]'/>
            <button className='bg-green-800 text-white pl-3 pr-3 p-1 ml-2 font-medium cursor-pointer hover:bg-green-600 duration-300 rounded-3xl' onClick={addTask}>+ Add task</button>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Todo
