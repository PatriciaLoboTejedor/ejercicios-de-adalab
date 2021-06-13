import React from "react";
import "./App.css";
import Item from "./Item";

class App extends React.Component {
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];

    const result = items
      .filter((item) => {
        return item.quantity === 2;
      })
      .map((item) => {
        return (
          <li>
            <Item
              /*item={item} /> Asi pasamos el objeto completo}*/
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              category={item.category}
              price={item.price}
            />
          </li>
        );
      });

    return <ul>{result}</ul>;
  }
}

export default App;
