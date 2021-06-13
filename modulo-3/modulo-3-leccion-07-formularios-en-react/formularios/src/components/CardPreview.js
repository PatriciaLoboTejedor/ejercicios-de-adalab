function CardPreview(props) {
  return (
    <section className="App-component">
      <h2>Previsualización:</h2>
      <div>Nombre: {props.name}</div>
      <div>Descripción: {props.textArea}</div>
      <div>Idioma: {props.language}</div>
      <p>Género: {props.gender}</p>
      <p>Edad: {props.age}</p>
    </section>
  );
}

export default CardPreview;
