function Form(props) {
  //input
  const handleInput = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    props.handleInput(inputName, inputValue);
  };

  //description
  const handleDescription = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    props.handleDescription(inputName, inputValue);
  };

  //select
  const handleFormChange = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    props.handleFormChange(inputName, inputValue);
  };

  //checkbox
  const handleCheckbox = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    props.handleCheckbox(inputName, inputValue);
  };

  //radiobutton
  const handleRadio = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    props.handleRadio(inputName, inputValue);
  };

  return (
    <div className="App-component">
      <h2>Formulario Objeto:</h2>
      <form className="App-component">
        {/*Input text*/}
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          id="name"
          type="text"
          value={props.name}
          onChange={handleInput}></input>

        {/*Input textarea*/}
        <label htmlFor="textarea">Descriptición</label>
        <textarea
          id="textArea"
          name="textarea"
          value={props.textArea}
          onChange={handleDescription}></textarea>

        {/*Input select*/}
        <label htmlFor="lenguage">Idioma</label>
        <select
          name="lenguage"
          value={props.language}
          onChange={handleFormChange}>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>

        {/*Input radio*/}
        <div className="App-component">
          <label htmlFor="all">Todos los públicos</label>
          <input
            onChange={handleRadio}
            id="all"
            type="radio"
            value="all"
            name="age"
            checked={props.age === "all"}
          />
          <label htmlFor="7">7</label>
          <input
            onChange={handleRadio}
            id="7"
            type="radio"
            value="7"
            name="age"
            checked={props.age === "7"}
          />
          <label htmlFor="12">12</label>
          <input
            onChange={handleRadio}
            id="12"
            type="radio"
            value="12"
            name="age"
            checked={props.age === "12"}
          />
          <label htmlFor="16">16</label>
          <input
            onChange={handleRadio}
            id="16"
            type="radio"
            value="16"
            name="age"
            checked={props.age === "16"}
          />
          <label htmlFor="18">18</label>
          <input
            onChange={handleRadio}
            id="18"
            type="radio"
            value="18"
            name="age"
            checked={props.age === "18"}
          />
        </div>

        {/*Input checkbox*/}
        <div>
          <label htmlFor="Comedia">Comedia</label>
          <input
            onChange={handleCheckbox}
            id="Comedia"
            type="checkbox"
            value="Comedia"
            name="genre"
          />
          <label htmlFor="Drama">Drama</label>
          <input
            onChange={handleCheckbox}
            id="Drama"
            type="checkbox"
            value="Drama"
            name="genre"
          />
          <label htmlFor="Fantasía">Fantasía</label>
          <input
            onChange={handleCheckbox}
            id="Fantasía"
            type="checkbox"
            value="Fantasía"
            name="genre"
          />
          <label htmlFor="Acción">Acción</label>
          <input
            onChange={handleCheckbox}
            id="Acción"
            type="checkbox"
            value="Acción"
            name="genre"
          />
          <label htmlFor="Familia">Familia</label>
          <input
            onChange={handleCheckbox}
            id="Familia"
            type="checkbox"
            value="Familia"
            name="genre"
          />
          <label htmlFor="Terror">Terror</label>
          <input
            onChange={handleCheckbox}
            id="Terror"
            type="checkbox"
            value="Terror"
            name="genre"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
