import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard/ItemCard.jsx';
import { Link, useParams } from 'react-router-dom';
import { db } from '../Firebase/FirebaseConfig.js'
import { collection, query, getDocs, where } from 'firebase/firestore';  

function ItemCategoryPage() {
  const { categoryId } = useParams();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "Items"), where("Tipo", "==", categoryId));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      });
      setItems(docs);
    }
  getItems();
  },[categoryId])

  return (
    <div>
    {Items.map((item) => {
      return (
        <div key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <ItemCard data={item} />
          </Link>
        </div>
      )
    })}
  </div>
  );
}

export default ItemCategoryPage;