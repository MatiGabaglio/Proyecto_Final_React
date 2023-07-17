import React from "react";
import ListCartCard from "../components/ListCartCard/ListCartCard";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { db } from '../Firebase/FirebaseConfig.js'; 
import { collection, addDoc } from "firebase/firestore";

function CartPage() {
    const cancelarCompra = () => {
        localStorage.removeItem('carrito'); // Elimina todo el contenido del LocalStorage con la clave "carrito"
        alert('Compra cancelada. El carrito se ha vaciado.');
      };

    const enviarCompraAFirestore = async () => {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        try {
            const docRef = await addDoc(collection(db, "compras"), {
            productos: carritoActual
          });
            alert("La compra se ha enviado correctamente a Firestore. El ID de tu compra es: " + docRef.id);
            localStorage.removeItem('carrito');
        } catch (error) {
            console.error('Error al enviar los datos a Firestore:', error);
        }
      };

    return <div>
        <ListCartCard />
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px'}}>
          <Button variant="outlined" color="error" onClick={cancelarCompra} sx={{margin:"10px"}}>
            Cancelar compra
          </ Button>

          <Button variant="outlined" color="success" onClick={enviarCompraAFirestore} sx={{margin:"10px"}}>
            Finalizar compra
          </ Button>
        </Box>
    </div>;
    }

export default CartPage;