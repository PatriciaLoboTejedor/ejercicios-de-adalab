import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];
    return (
      <div>
        <h1>Listado de estudiantes:</h1>
        {/* con este filter filtramos los estudiantes de promo a 
        y con este map iteramos iteramos el array de items */}
        {students
          .filter((students) => students.promo === "A")
          .map((students) => {
            // cada return retorna un li
            return (
              <li>
                <h2>Nombre: {students.name}</h2>
                <p>Edad: {students.age}</p>
              </li>
            );
            // el map retorna un array de li, es decir, un listado de HTML
          })}
      </div>
    );
  }
}

export default App;
