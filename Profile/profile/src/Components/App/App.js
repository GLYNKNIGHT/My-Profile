import "./App.css";
import {useState} from 'react'
import Button from '../Button/button'
import Header from "../Header/header";
import Display from "../Display/display";
import Image from "../image/image";
import ModeSelector from "../ModeSelector/modeSelector"
import Content from "../content";

import Links from "../Links/links";

function App() {
  const [display, setDisplay] = useState(Content[0]);

function displayContent(id) {
    setDisplay(Content[id]);
  }
 



  return (
    <div>

   <div className="header-container">
        <Header className="header"/>
        <div className="circle-container">
        <Image className="cicrle" />
        </div>
          <Links className="links-button"/>
    </div>

    <div className="body">

        <div className="display">
          <Display display={display} />
        </div>
        <div className="selector">
        
    <Button
      className="button"
      section="About me"
      onClick={()=>displayContent(0)}
    />
    <Button
      className="button"
      section="My Projects"
      onClick={()=>displayContent(1)}
    />
    <Button 
      className="button" 
      section="Experience" 
      onClick={()=>displayContent(2)} 
      />
      <Button 
      className="button" 
      section="Connect" 
      onClick={()=>displayContent(3)} 
      />
  </div>
       
      </div>
      <footer><ModeSelector/></footer>
    </div>
  );
}

export default App;
