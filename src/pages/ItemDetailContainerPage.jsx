import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetailCard from '../components/ItemDetailCard/ItemDetailCard.jsx';
import { db } from '../Firebase/FirebaseConfig.js'
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';  

const ItemDetailContainer = () => {
    const [Item, setItem] = useState([]);
    let { id } = useParams();

    useEffect(() => {
      const getItems = async () => {
        const q = query(collection(db, "Items"), where(documentId(), "==", id));
        const docs = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        });
        setItem(docs);
      }
    getItems();
    },[id])

    return (
        <div>
            {Item.map((item) => {
                return (
                    <div key={item.id}>
                        <ItemDetailCard data={item} />
                    </div>
                )
            }
            )}
        </div>
    );
}

export default ItemDetailContainer