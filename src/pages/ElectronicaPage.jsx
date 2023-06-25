import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemCard from '../components/ItemCard/ItemCard.jsx';
import "../components/ItemList/itemList.css"
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';

const Electronica = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('Electrónica');

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((json) =>
      setItems(json.data)
    );
  }, []);

  const filteredItems = items.filter((item) => item.category === "electronics");

  return (
    <div>
      <Navbar />
      <div className='Item_list itemListContainer'>
        {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`detail/${item.id}`}>
                <ItemCard items={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Electronica