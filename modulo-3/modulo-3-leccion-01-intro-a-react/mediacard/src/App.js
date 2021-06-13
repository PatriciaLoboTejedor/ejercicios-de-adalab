// import imgCard from "./perfil.jpg"; Ahora se incluye a traves de data
import "./App.scss";

function App() {
  const data = {
    image:
      "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
    cardTitle: "Bob Dylan",
    cardDate: "May 24, 1941",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };

  const header = (
    <div className="App-mediaCard-header">
      <img src={data.image} className="App-img" alt="imgCard" />
      <h2 className="App-title">{data.cardTitle}</h2>
      <h3 className="App-date">{data.cardDate}</h3>
    </div>
  );

  const text = <p className="App-text">{data.cardDescription}</p>;
  const footer = (
    <div className="App-mediaCard-footer">
      <a
        className="App-link"
        href="{data.button.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.button.label}
      </a>
      <p className="App-likes">
        37<i className="fas fa-heart"></i>
      </p>
    </div>
  );
  const appRoot = (
    <main className="App">
      <section className="App-mediaCard">
        {header}
        {text}
        {footer}
      </section>
    </main>
  );

  return appRoot;
}

export default App;
