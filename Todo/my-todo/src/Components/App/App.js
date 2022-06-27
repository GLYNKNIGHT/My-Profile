import './App.css';
import React from 'react';
import {useState} from 'react'
import Task from '../Task';
import List from '../Task List';
import Input from '../Input';
import SubmitButton from '../Submit Button';
import {nanoid} from 'nanoid'
 


function App(){

const [input, setInput ] = useState("");
const [task, setTask ]= useState({});
const [list, setList ] = useState([]);
const [id, setId] = useState(0)

 function handleChange(event){
 const newInput = event.target.value
 setInput (newInput);
 console.log(input)
 const newTask = {id:{id}, task: input}
 setTask (newTask);
 }

function submitTask(){
 setList (list =>[...list, task]);
 setId(id+1)
 console.log(list)
} 
  
function removeTask(id){
  setList(list => [list.slice(0,id), list.slice(id+1)])
}



 return (
    <div className="App">
     <Input onChange={handleChange}/>
      <SubmitButton onClick={submitTask}>Add Task</SubmitButton>
      <List>
          {list.map((item)=>{return <Task key ={item.id} text={item.task} removeTask={removeTask(item.id)}/>})}
      </List>
    </div>
  );
}

export default App;
