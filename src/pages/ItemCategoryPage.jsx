import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard/ItemCard.jsx';
import '../components/ItemList/itemList.css';
import { Link, useParams } from 'react-router-dom';

function ItemCategoryPage() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

    useEffect(() => {
      axios(`https://fakestoreapi.com/products/category/${categoryId}`).then((json) =>
          setItems(json.data)
      );
  }, [categoryId]);

  return (
    <div className='Item_list itemListContainer'>
    {items.map((item) => {
      return (
        <div key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <ItemCard items={item} />
          </Link>
        </div>
      )
    })}
  </div>
  );
}

export default ItemCategoryPage;