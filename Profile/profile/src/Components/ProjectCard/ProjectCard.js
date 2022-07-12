import { useContext } from "react"
import {StyleContext} from '../App/context.js'



export default function ProjectCard ({title,img,link}){
console.log(img)
    const style =useContext(StyleContext)
return <article className={style}>
    <h3>{title}</h3>
    <img src={img} alt="Project" />
    <p>{link}</p>
</article>

}