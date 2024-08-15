import React from "react";

function Cart({ cart, removeFromCart, getTotalPrice, handlePurchase }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((plant) => (
            <div key={plant.id} className="cart-item">
              <p>
                {plant.name} - ${plant.price}
              </p>
              <button onClick={() => removeFromCart(plant)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${getTotalPrice()}</h3>
          <button onClick={handlePurchase}>Comprar</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
