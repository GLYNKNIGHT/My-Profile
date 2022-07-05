import "./App.css";
import { useState } from "react";
import Header from "../Header/header";
import Display from "../Display/display";
import Button from "../Button/button";
import Image from "../image/image";

function App() {
  const [display, setDisplay] = useState({
    title: "About Me",
    content: "My name is Glyn",
  });

  function changeDisplay() {
    setDisplay({});
  }

  return (
    <div>

   <div className="header-container">
      <Header className="header"/>
        <div className="circle-container">
        <Image className="cicrle" />
        </div>
      </div>
      <div className="body">
        <div className="display">
          <Display display={display} />
        </div>
        <div className="selector">
          <Button
            className="button"
            section="About me"
            onClick={changeDisplay}
          />
          <Button
            className="button"
            section="My Projects"
            onClick={changeDisplay}
          />
          <Button 
            className="button" 
            section="Experience" 
            onClick={changeDisplay} 

            />
            <Button 
            className="button" 
            section="Connect" 
            onClick={changeDisplay} 

            />
        </div>
      </div>
    </div>
  );
}

export default App;
