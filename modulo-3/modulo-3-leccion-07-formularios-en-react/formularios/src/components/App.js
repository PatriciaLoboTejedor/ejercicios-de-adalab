import "../stylesheets/App.scss";
import React, { useState } from "react";
import Form from "./Form";
import CardPreview from "./CardPreview";

function App() {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [genre, setGenre] = useState([]);

  //input
  const handleInput = (inputName, inputValue) => {
    setName(inputValue);
  };

  //description
  const handleDescription = (inputName, inputValue) => {
    setDescription(inputValue);
  };

  //select
  const handleFormChange = (inputName, inputValue) => {
    setLanguage(inputValue);
  };

  //radio
  const handleRadio = (inputName, inputValue) => {
    setAge(inputValue);
  };

  //checkbox
  const handleCheckbox = (inputName, inputValue) => {
    setGenre(inputValue);
    if (genre.includes(inputValue)) {
      const newGenre = genre.filter((genre) => genre !== inputValue);
      setGenre(newGenre);
    } else if (genre.length < 3) {
      const newGenre = [...genre, inputValue];
      setGenre(newGenre);
    } else {
      alert("Sólo puedes escoger tres géneros");
    }
  };

  return (
    <div className="App">
      <Form
        handleInput={handleInput}
        handleCheckbox={handleCheckbox}
        handleFormChange={handleFormChange}
        handleDescription={handleDescription}
        handleRadio={handleRadio}
      />
      <CardPreview
        name={name}
        description={description}
        language={language}
        age={age}
        genre={genre}
      />
    </div>
  );
}

export default App;
