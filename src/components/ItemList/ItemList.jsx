import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemCard from '../ItemCard/ItemCard.jsx';
import "./itemList.css"
import { Link } from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios('https://fakestoreapi.com/products').then((json) =>
            setItems(json.data)
        );
    },[])

    return (
        <div className='Item_list itemListContainer'>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`detail/${item.id}`}>
                  <ItemCard items={item} />
                </Link>
              </div>
            )
          })}
        </div>
      )  
}

export default ItemList