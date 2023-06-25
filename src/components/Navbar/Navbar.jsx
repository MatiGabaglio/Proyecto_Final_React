import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar >
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

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" underline="none" color="inherit">
                    The All Store
                </Link>
            </Typography>

            <CartWidget />

            <Stack direction="row" spacing={2}>
                <Button variant="outlined" color="inherit" component={Link} to="/">Productos</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/ElectronicaPage">Electronica</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/RopaDeHombrePage">Ropa de hombre</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/RopaDeMujerPage">Ropa de mujer</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/JoyeriaPage">joyeria</Button>
                <Button variant="contained" color="primary">Login</Button>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar
