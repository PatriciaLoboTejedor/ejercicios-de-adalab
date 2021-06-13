import React, { useState, useEffect } from "react";

const InputTextFuntional = () => {
  const [inputText, setinputText] = useState("");

  // Actualizo el componente a través de useEffect
  useEffect(() => {
    // se ejecutan al montar y renderizar el componente
    // guardo el valor del input en el localStorage
    localStorage.getItem("inputTextFunctional");
    /*setinputText(localStorageText);*/

    return () => {
      // se ejecuta al desmontar y renderizar el componente
      // Recojo lo que haya guardado en el localStorage y lo pinto como estado
      localStorage.setItem("inputTextFunctional", inputText);
    };
  });

  const getInputValue = (ev) => {
    // Recojo el valor del input y actualizo el estado
    setinputText(ev.target.value);
  };

  return (
    <div className="App">
      <label>Input Componente Funcional</label>
      <input type="text" onChange={getInputValue} />
    </div>
  );
};

export default InputTextFuntional;
