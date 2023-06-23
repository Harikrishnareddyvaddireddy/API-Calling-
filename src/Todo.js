import React, { useState } from 'react'
import './Todo.css'
export default function Todo () {
   const [task,setTask] = useState('')
   const Tasklist = (event) => {
     setTask(event.target.value)
  
   }
   function submithandler(event){
    event.preventDefault()
    console.log("hari")
   } 
  return (
    <>
    <div className="container">
    <div id="newtask">
    <form onSubmit={submithandler}>
    <input type="text" id="taskinfo" placeholder="Task to do ..." value={task} onChange={Tasklist} /> 
    <button id="add">Add</button>
    </form>
    </div>
    <p>{task}</p>
    </div>
    </>
  )
}
