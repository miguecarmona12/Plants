import React from "react";

function PlantItem({ plant, addToCart }) {
  return (
    <div className="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>${plant.price}</p>
      <button onClick={() => addToCart(plant)}>Agregar al carrito</button>
    </div>
  );
}

export default PlantItem;
