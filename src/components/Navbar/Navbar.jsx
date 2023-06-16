import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import CartWidget from '../CartWidget/CartWidget.jsx';

function Navbar() {
  return (
    <AppBar className='appbar'>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{ mr: 2 }}
            >
                <WaterDropOutlinedIcon />
            </IconButton>

            <Typography variant="h6" component="div" color="inherit" sx={{ flexGrow: 1 }}>
                The plant Store
            </Typography>

            <CartWidget />

            <Stack direction="row" spacing={2}>
                <Button variant="outlined" color="inherit">Productos</Button>
                <Button variant="outlined" color="inherit">Quienes somos</Button>
                <Button variant="outlined" color="inherit">Contacto</Button>
                <Button variant="contained" color="primary">Login</Button>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar
