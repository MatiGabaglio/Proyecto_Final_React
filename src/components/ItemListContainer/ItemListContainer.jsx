import React from 'react'
import './itemListContainer.css'

const Greeting = (props) => {
  return <h1>Hola, {props.name}!</h1>;
};

const ItemListContainer = () => {
  return (
    <div className='itemListContainer'>
      <Greeting name="tutor" />
    </div>
  )
}

export default ItemListContainer