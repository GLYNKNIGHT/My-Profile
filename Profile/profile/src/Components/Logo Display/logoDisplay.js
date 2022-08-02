import css_icon from './css_icon.png'
import html_icon from './html_icon.png'
import javascript from './javascript.png'
import react_icon from './react_icon.png'
import postgresql_icon from './postgresql_icon.png'
import js_node_icon from './js_node_icon.png'
import { useContext } from 'react'
import {LogoDisplayStyle} from '../App/context'
import github from '../Links/github.png'
import typescript from './typescript.png'


export default function LogoDisplay() {

    const LogoDisplay = useContext(LogoDisplayStyle)

return <div className={LogoDisplay}>
    <img src={html_icon} alt="HTML5"/>
    <img src={css_icon} alt="CSS3"/>
    <img src={javascript} alt="JavaScript"/>
    <img src={typescript} alt="TypeScript"/>
    <img src={react_icon} alt="React"/>
    <img src={postgresql_icon} alt="PostgeSQL"/>
    <img src={js_node_icon} alt="PostgeSQL"/>
    <img src={github} alt="PostgeSQL"/>
</div>
}