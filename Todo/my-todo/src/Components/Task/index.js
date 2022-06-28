
export default function Task({text, removeTask, editTask}){
    return <>
    <p>{text}</p>
    <button onClick={removeTask}>Remove</button>
    <button OnClick={editTask}>Edit</button>
    
    </>
}