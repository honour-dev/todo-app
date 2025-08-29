import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import  {FaTrashAlt} from 'react-icons/fa';

// 'apple',
    // 'pineapple',
    // 'banana',
    // 'avocado',
const Todo = () => {
  const uniqueId = uuidv4();

  const [tasks, setTasks] = useState([]);
  
  const addTask = () =>{
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value;
    taskInput.value = '';
    newTask.trim() === '' ? alert('type in a task') : setTasks([...tasks, {id: uniqueId, text: newTask}]);
  };
  
  const removeTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  return (
    <main className='text-center flex h-screen'>
      <article className='place-content-center m-auto max-w-xl pl-4 pr-4'>
        <h2 className=" text-[1.3rem] p-2 font-bold bg-green-800 text-white mb-4">
        Website todo
        </h2>
        <div className='border-green-800 border-2 p-[2rem]'>
          <div  className="mt-5 mb-6 list-disc pl-2">
            {tasks.map((task)=>(
              <div key={task.id} className='text-[1.1rem] flex-1 flex justify-between items-center'>
                <p className='font-medium whitespace-normal text-left'>
                  <input type="checkbox" />
                  {task.text}
                </p>
                <FaTrashAlt className='text-red-700 cursor-pointer items-start shrink-0' onClick={()=>removeTask(task.id)}/>          
              </div>
            ))}
          </div>
          <div>
            <input type="text" placeholder='Enter a task...' id='taskInput' className='border-2 border-green-800 pl-1 rounded-md ml-2 p-[.2rem] mb-3'/>
            <button className='bg-green-800 text-white pl-3 pr-3 p-1 ml-2 font-medium cursor-pointer hover:bg-green-600 duration-300 rounded-3xl' onClick={addTask}>+ Add task</button>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Todo
