import React from "react";
import "./Mediacard.scss";

const Mediacard = (props) => {
  console.log(props);

  const header = (
    <div className="App-mediaCard-header">
      <img src={props.image} className="App-img" alt={props.cardTitle} />
      <h2 className="App-title">{props.cardTitle}</h2>
      <h3 className="App-date">{props.cardDate}</h3>
    </div>
  );

  const text = <p className="App-text">{props.cardDescription}</p>;

  const footer = (
    <div className="App-mediaCard-footer">
      <a className="App-link" href={props.url} target="_blank">
        Go to wikipedia
      </a>
      <p className="App-likes">
        {props.numberLikes}
        <i className={props.hearthClass}></i>
      </p>
    </div>
  );

  return (
    <main>
      <section className="App-mediaCard">
        {header}
        {text}
        {footer}
      </section>
    </main>
  );
};

export default Mediacard;
