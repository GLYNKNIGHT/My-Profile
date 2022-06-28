//import './App.css';
import React from 'react';
import {useState} from 'react'
import Task from '../Task';
import List from '../Task List';
import Input from '../Input';
import SubmitButton from '../Submit Button';
import styles from './App.module.css'
import DeleteButton from '../Delete Button';



function App(){

const [input, setInput ] = useState(

);
const [task, setTask ]= useState({});
const [list, setList ] = useState([]);
const [editTask, setEditTask] = useState(null)
const [editText,setEditText]= useState("")


function submitTask(){
  const newTask = {id: new Date().getTime(), task: input} 
  console.log(newTask)
  setTask (newTask);
  setList (list =>[...list, task]);

 } 


function removeTask(id){
  const newArr = list.filter((item)=> item.id !== id)
  console.log(newArr)
  setList(newArr)
}

function submitEdit(id){
 const updatedTasks = [...list].map((task)=>{
  if (task.id===id){
    task.task = editText
  }
  return task
 })
 setList(updatedTasks)
 setEditTask(null)
 setEditText("")
}

 return (
    <div className={styles.App}>
    <h1 className={styles.header}>To Do List</h1>
     <Input onChange={(e)=> setInput(e.target.value)} value={task}/>
      <button className={styles.button} onClick={submitTask}>Add Task</button>
      <List>
          {list.map((item)=>{return <div className ={styles.task} key={item.id}>

          {editTask === item.id ?
          (<input type="text" 
                  onChange={(e)=> setEditText(e.target.value)} 
                  value={editText}/>) 
          :
          (<Task text={item.task} />)}
              
          <button className={styles.button}  onClick={()=>removeTask(item.id)}>Done</button> 
          
          {editTask=== item.id ? 
          (<button className={styles.button} onClick ={()=> submitEdit(item.id)}>Submit </button>) 
          :
          (<button className={styles.button} onClick= {()=> setEditTask(item.id)}>Edit</button>)
          
          }
          </div>})}
      </List>
    </div>
  );
}

export default App;
