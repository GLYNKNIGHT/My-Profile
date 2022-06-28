import './App.css';
import React from 'react';
import {useState} from 'react'
import Task from '../Task';
import List from '../Task List';
import Input from '../Input';
import SubmitButton from '../Submit Button';



function App(){

const [input, setInput ] = useState(

);
const [task, setTask ]= useState({});
const [list, setList ] = useState([]);
const [id, setId] = useState(0)
const [edittask, setEditTask]= useState()
/*
function handleChange(event){
  const newInput = event.target.value
  setInput (newInput);
  console.log(input)
  }
*/
function submitTask(){
  setId(id+1)
  const newTask = {id: new Date().getTime(), task: input} 
  console.log(newTask)
  setTask (newTask);
  setList (list =>[...list, task]);
  console.log(id)
  console.log(list)
  //setInput("")
 } 


function removeTask(id){
  
  const newArr = list.filter((item)=> item.id !== id)
  console.log(newArr)
  setList(newArr)
}

function editTask(){

}

 return (
    <div className="App">
    <h1>To Do List</h1>
     <Input onChange={(e)=> setInput(e.target.value)} value={task}/>
      <SubmitButton  onClick={submitTask}>Add Task</SubmitButton>
      <List>
          {list.map((item)=>{return <div><Task key={item.id} text={item.task} removeTask={()=>removeTask(item.id)} editTask={editTask}/>
          
          </div>})}
      </List>
    </div>
  );
}

export default App;
