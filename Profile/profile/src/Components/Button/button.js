export default function Button(props){

return <button key={props.id} 
className="button" onClick={props.onClick}>{props.section}</button>
}