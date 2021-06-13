import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <>
        {/* // Si paso Item como objeto completo
        <h2>Nombre: {this.props.item.name}</h2>
        <p>Descripción: {this.props.item.description}</p>
        <p>Cantidad: {this.props.item.quantity}</p>
        <p>Categoría: {this.props.item.category}</p>
    <p>Precio: {this.props.item.price}</p> */}
        <h2>Nombre: {this.props.name}</h2>
        <p>Descripción: {this.props.description}</p>
        <p>Cantidad: {this.props.quantity}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}</p>
      </>
    );
  }
}

Item.defaultProps = {
  description: "No hay descripción",
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//No funciona si no pasamos solo los props que queremos,pasando el item entero no se puede

export default Item;
