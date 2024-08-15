// src/App.jsx
import React, { useState } from "react";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import WelcomeScreen from "./components/WelcomeScreen";
import "./styles.css";

const plants = [
  { id: 1, name: "Gold", price: 10000, image: "./plant1.jpg" },
  { id: 2, name: "Jack Herer", price: 15000, image: "./plant2.jpg" },
  { id: 3, name: "Sour", price: 20000, image: "./plant3.jpg" },
  { id: 4, name: "White Widow", price: 25000, image: "./plant4.jpg" },
  { id: 5, name: "Blue Dream", price: 30000, image: "./plant5.jpg" },
  { id: 6, name: "Plant 6", price: 35000, image: "./plant6.jpg" },
];

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => [...prevCart, plant]);
  };

  const removeFromCart = (plantToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((plant) => plant.id !== plantToRemove.id)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, plant) => total + plant.price, 0);
  };

  const handlePurchase = () => {
    alert("Próximamente");
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className="app">
      {!hasStarted ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <>
          <h1>The Paradyse</h1>
          <h3>Bienvenido a la mejor tienda de flores</h3>
          <PlantList plants={plants} addToCart={addToCart} />
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            getTotalPrice={getTotalPrice}
            handlePurchase={handlePurchase}
          />
        </>
      )}
    </div>
  );
}

export default App;
