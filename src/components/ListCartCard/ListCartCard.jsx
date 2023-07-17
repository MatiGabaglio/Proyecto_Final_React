import React from 'react';
import CartCard from '../CartCard/CartCard.jsx';

const ListCartCard = () => {
  // Obtén los productos almacenados en el LocalStorage
  const productosEnLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];

  return (
    <div>
      {productosEnLocalStorage.map((producto, index) => (
        <CartCard key={index} data={producto} />
      ))}
    </div>
  );
};

export default ListCartCard;
