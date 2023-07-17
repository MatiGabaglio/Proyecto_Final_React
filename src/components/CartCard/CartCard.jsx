import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CartCard.css';

const CartCard = ({ data }) => {
  // Calcular el precio final (precio individual x cantidad comprada)
  const precioFinal = data.Precio * data.cantidad;

  const quitarDelCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = carritoActual.filter(
      (producto) => producto.Titulo !== data.Titulo
    );
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    alert('Producto quitado del carrito');
  };

  return (
    <Card className="itemDetailCartCard-grid">
      <CardMedia
        className='img-position-CartCard'
        image={data.img}
        title={data.Titulo}
      />
      <CardContent className='titulo-position-CartCard'>
        <Typography 
          gutterBottom 
          variant="h2" 
          component="div" 
          textAlign={'left'}
        >
          {data.Titulo}
        </Typography>

        <Typography 
          variant="h6" 
          color="text.secondary" 
          textAlign={'left'} 
        >
          Precio Individual: $ {data.Precio}
        </Typography>

        <Typography 
          variant="h6" 
          color="text.secondary" 
          textAlign={'left'} 
        >
          Cantidad Comprada: {data.cantidad}
        </Typography>

        <Typography 
          variant="h5" 
          color="text.secondary" 
          textAlign={'left'} 
        >
          Precio Final: $ {precioFinal}
        </Typography>
      </CardContent>

      <CardActions className='button-position-CartCard'>
        <Button size="medium" onClick={quitarDelCarrito}>
          Quitar del carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartCard;
