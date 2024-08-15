// src/components/WelcomeScreen.jsx
import React from "react";

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <h1>Bienvenido a la mejor tienda de Flores</h1>
      <button onClick={onStart} className="start-button">
        Comenzar
      </button>
    </div>
  );
}

export default WelcomeScreen;
