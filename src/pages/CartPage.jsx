import React from "react";
import ListCartCard from "../components/ListCartCard/ListCartCard";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Link } from "react-router-dom";

function CartPage() {
    const cancelarCompra = () => {
        localStorage.removeItem('carrito'); // Elimina todo el contenido del LocalStorage con la clave "carrito"
        alert('Compra cancelada. El carrito se ha vaciado.');
      };

    return <div>
        <ListCartCard />
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px'}}>
          <Button variant="outlined" color="error" onClick={cancelarCompra} sx={{margin:"10px"}}>
            Cancelar compra
          </ Button>

          <Button variant="outlined" color="success" sx={{margin:"10px"}} component={Link} to="/infousuario">
            Finalizar compra
          </ Button>
        </Box>
    </div>;
    }

export default CartPage;