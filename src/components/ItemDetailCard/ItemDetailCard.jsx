import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemDetailCard.css';

const ItemDetailCard = ( {data} ) => {
  return (
    <Card className="itemDetailCard-grid">
      <CardMedia
        className='img-position' sx={{ height: 500 }}
        image={data.img}
        title={data.Titulo}
      />
      <CardContent className='titulo-position'>
        <Typography 
          gutterBottom 
          variant="h2" 
          component="div" 
          textAlign={'left'}
        >
            {data.Titulo}
        </Typography>

        <Typography 
          variant="h5" 
          color="text.secondary" 
          textAlign={'left'} 
          paddingTop={'10px'}
        >
          {data.Tipo}
        </Typography>

        <Typography 
          variant="body1" 
          color="text.secondary" 
          textAlign={'left'} 
          paddingTop={'10px'}
        >
          {data.Desc}
        </Typography>

        <Typography 
          variant="body1" 
          color="text.secondary" 
          textAlign={'left'} 
          paddingTop={'10px'}
        >
          {data.Precio}
        </Typography>
        
      </CardContent>
      <CardActions className='button-position'>
        <Button size="medium">Saber mas</Button>
        <Button size="medium">agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default ItemDetailCard;