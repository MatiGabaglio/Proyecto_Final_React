import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailCard from '../components/ItemDetailCard/ItemDetailCard.jsx';
import { db } from '../Firebase/FirebaseConfig.js';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';  
import './ItemDetailContainerPage.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [itemNotFound, setItemNotFound] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        const getItems = async () => {
            const q = query(collection(db, "Items"), where(documentId(), "==", id));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                setItem({ ...doc.data(), id: doc.id });
                setItemNotFound(false);
            } else {
                setItem(null);
                setItemNotFound(true);
            }
        }
        getItems();
    }, [id])

    return (
        <div>
            {itemNotFound ? (
                <div className='errorContainer'>
                    Error: Item no encontrado
                  <Button variant="outlined" color="inherit" component={Link} to="/">Productos</Button>
                </div>
            ) : (
                item && <ItemDetailCard data={item} />
            )}
        </div>
    );
}

export default ItemDetailContainer;
