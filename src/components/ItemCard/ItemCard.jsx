import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCard = ( {data} ) => {
  return (
    <Card sx={{ maxWidth: 345, Height: 400 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={data.img}
        title={data.Titulo}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          textAlign={'left'}
        >
            {data.Titulo}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          textAlign={'left'} 
        >
          {data.Tipo}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Saber mas</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;