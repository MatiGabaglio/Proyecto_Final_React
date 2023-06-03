import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import './navbar.css';

function Navbar() {
  return (
    <AppBar position="fixed" className='appbar'>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="primary"
                sx={{ mr: 2 }}
            >
                <WaterDropOutlinedIcon />
            </IconButton>

            <Typography variant="h6" component="div" color="primary" sx={{ flexGrow: 1 }}>
                Nombre de la Tienda
            </Typography>

            <Stack direction="row" spacing={2}>
                <Button variant="outlined" className='blackButton'>Productos</Button>
                <Button variant="outlined">Quienes somos</Button>
                <Button variant="outlined">Contacto</Button>
                <Button variant="contained">Login</Button>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar
