/*import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [textArea, setTextArea] = useState("");
  const [language, setLanguage] = useState("Inglés");

  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value);
  };
  const handleChangeText = (ev) => {
    setTextArea(ev.currentTarget.value);
  };
  const handleChangeLanguage = (ev) => {
    setLanguage(ev.currentTarget.value);
  };

  return (
    <div className="App">
      <h2>Formulario Elementos:</h2>
      <form className="App-component">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChangeName}></input>

        <label htmlFor="textarea">Descriptición</label>
        <textarea
          id="textarea"
          value={textArea}
          onChange={handleChangeText}></textarea>

        <label htmlFor="lenguage">Idioma</label>
        <select id="lenguage" value={language} onChange={handleChangeLanguage}>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </form>
      <section className="App-component">
        <h2>Previsualización:</h2>
        <div>Nombre: {name}</div>
        <div>Descripción: {textArea}</div>
        <div>Idioma: {language}</div>
      </section>
    </div>
  );
}

export default Form;*/
