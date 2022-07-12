import githubwhite from "./githubwhite.png";
import linedwhite from "./linkedwhite.png";
import emailwhite from "./emailwhite.png";

export default function Display({ display }) {
  return (
    <section>
      <h3>{display.title}</h3>
      <p>{display.content}</p>

      {display.id === 3 ? (
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
          <div>
            <img src={emailwhite} alt="email" /> {display.email}
          </div>
        </div>
      ) : null}
    </section>
  );
}
