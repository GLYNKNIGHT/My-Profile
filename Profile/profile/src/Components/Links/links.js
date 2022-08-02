import github from './github.png'
import linkedin from './linkedin.png'
import email from './email.png'

export default function Links(props){
    return <div className="links">
      <a  href="https://github.com/GLYNKNIGHT" target='_blank' rel="noreferrer" >  <img className='link-icon' src={github} alt="github" /></a>
      <a  href="https://linkedin.com/in/glyn-knight-01605924" target='_blank' rel="noreferrer" > <img className='link-icon' src={linkedin} alt="linkedin" /></a>
      <img className='link-icon' src={email} alt="email" onClick = {props.onClick}/>
    </div>
}