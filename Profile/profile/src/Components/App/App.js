import "./App.css";
import {useState} from 'react'
import Button from '../Button/button'
import Header from "../Header/header";
import Display from "../Display/display";
import Image from "../image/image";
import Content from "../content";
import Links from "../Links/links";





function App() {
  const [display, setDisplay] = useState(Content[0]);

  function displayContent(id) {
    setDisplay(Content[id]);
  }

  return (
   <div className="app">
      <header className="header-container">
      <figure className="circle-container">
            <Image className="circle" />
        
              </figure>
        <Header className="header" />
         <Links className="links-button" onClick={() => displayContent(3)}/>
      </header>

      <main className="body">
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
        <section className="display">
          <Display display={display} />
          
        </section>
     
        
      </main>
      
     
    
      <footer>
       
      </footer>
      </div>
  );
}

export default App;
