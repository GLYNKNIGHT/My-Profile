import { useContext } from "react"
import {CardStyleContext, CardImgStyle} from '../App/context.js'



export default function ProjectCard ({title,img,link}){

    const cardStyle =useContext(CardStyleContext)
    const cardImgStyle = useContext(CardImgStyle)
return <article className={cardStyle}>
    <img className={cardImgStyle} src={img} alt="Project" />
    <h3>{title}</h3>

</article>

}