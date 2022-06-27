
export default function Task({text, removeTask}){
    return <>
    <p>{text}</p>
    <button onClick={removeTask}>Done</button>
    </>
}