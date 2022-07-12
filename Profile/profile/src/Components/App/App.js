import "./App.css";
import {useState} from 'react'
import Button from '../Button/button'
import Header from "../Header/header";
import Display from "../Display/display";
import Image from "../image/image";
import ModeSelector from "../ModeSelector/modeSelector"
import Content from "../content";
import ProjectDisplay from "../Project Display/projectdisplay";
import Links from "../Links/links";

function App() {
  const [display, setDisplay] = useState(Content[0]);

  function displayContent(id) {
    setDisplay(Content[id]);
  }

  return (
   <div>
      <header className="header-container">
        <Header className="header" />
        <figure className="circle-container">
          <Image className="cicrle" />
        </figure>
        <Links className="links-button" onClick={() => displayContent(3)}/>
      </header>

      <main className="body">
        <section className="display">
          <Display display={display} />
        </section>
        <section className="selector">
          {Content.map((item) => {
            return (
              <Button
                key= {item.id}
                className="button"
                section={item.title}
                onClick={() => displayContent(item.id)}
              />
            );
          })}
        </section>
      </main>
      
      {display.id === 1 ?  <section >
          <ProjectDisplay className="project-display"/>
        </section>:null}
    
      <footer>
        
      </footer>
      </div>
  );
}

export default App;
