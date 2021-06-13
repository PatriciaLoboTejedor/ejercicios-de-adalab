function Escoba() {
  const users = [
    { name: "Nymphadora Tonks", time: 9 },
    { name: "Cedric Diggory", time: 28 },
    { name: "Cho Chang", time: 35 },
    { name: "Luna Lovegood", time: 45 },
    { name: "Gregory Goyle", time: 56 },
  ];

  // Destructuring del array para imprimir en documento
  const [first, second, third] = users;

  // Destructuring de array y de objeto para imprimirlo en la consola
  const [
    { name: firstPosition, time: firstTime },
    { name: secondPosition, time: secondTime },
    { name: thirdPosition, time: thirdTime },
  ] = users;
  console.log(`Primer lugar: ${firstPosition}, tiempo: ${firstTime}.`);
  console.log(`Segundo lugar: ${secondPosition}, tiempo: ${secondTime}.`);
  console.log(`Tercer lugar: ${thirdPosition}, tiempo: ${thirdTime}.`);

  return (
    <div className="App">
      <h1>Carrera de escobas</h1>
      <ul>
        <li>
          {first.name} (con {first.time} segundos)
        </li>
        <li>
          {second.name} (con {second.time} segundos)
        </li>
        <li>
          {third.name} (con {third.time} segundos)
        </li>
      </ul>
    </div>
  );
}

export default Escoba;
