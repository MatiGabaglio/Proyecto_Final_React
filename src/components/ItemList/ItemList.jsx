import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard.jsx';
import "./itemList.css"
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/FirebaseConfig.js'
import { collection, query, getDocs } from 'firebase/firestore';

const ItemList = () => {
    const [Items, setItems] = useState([]);

    useEffect(() => {
      const getItems = async () => {
        const q = query(collection(db, "Items"));
        const docs = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        });
        console.log(docs); 
        setItems(docs);
      }
    getItems();
    },[])

    return (
        <div className='Item_list'>
          {Items.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`detail/${item.id}`} style={{ textDecoration: 'none' }}>
                  <ItemCard data={item} />
                </Link>
              </div>
            )
          })}
        </div>
      )  
}

export default ItemList