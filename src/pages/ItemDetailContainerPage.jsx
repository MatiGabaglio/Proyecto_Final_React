import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard/ItemCard.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((json) =>
            setItem(json.data)
        );
    },[id])

    return (
        <div style ={{display: "flex", justifyContent: "center", marginTop :"100px"}}>
            <Navbar />
            <ItemCard items={item} />
        </div>
    )
}

export default ItemDetailContainer