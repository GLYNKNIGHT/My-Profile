import githubwhite from "./githubwhite.png";
import linedwhite from "./linkedwhite.png";
import Form from "../Form/form";


export default function Display({ display }) {
  return (
    <section>
      <h3>{display.title}</h3>
      <p>{display.content}</p>
      <p>{display.content2}</p>
      {display.id === 3 ? (
 <section>
        <Form className="form"/>
        <div className="display-links">
                <div>
              <a
              href="https://github.com/GLYNKNIGHT"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubwhite} alt="github" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/GLYNKNIGHT"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linedwhite} alt="github" />
            </a>
          </div>
              </div>
              </section>
      ) : null}

      
    </section>
  );
}
