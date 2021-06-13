import React, { useState, useEffect } from "react";

/*class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    console.log("Se está ejecuntando el método componentDidMount");
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
  }
  componentWillUnmount() {
    console.log("Se está ejecuntando el método componentWillUnmount");
    // limpiamos el interval
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    console.log("Se está ejecuntando el método incrementCounter");
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    console.log("Se está ejecuntando el método render");
    return <div>Contador: {this.state.counter}</div>;
  }
}*/

const Counter = () => {
  console.log("Me estoy renderizando");
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    console.log("Me estoy montando");
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    let intervalId = setInterval(() => {
      console.log("Me estoy desmontando");
      setCounter(counter + 1);
    }, 1000);
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    return () => {
      clearInterval(intervalId);
    };
  });
  return <div>Contador: {counter}</div>;
};

export default Counter;
