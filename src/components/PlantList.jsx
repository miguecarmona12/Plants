import React from "react";
import PlantItem from "./PlantItem";

function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default PlantList;
