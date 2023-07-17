import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
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
                <MusicNoteOutlinedIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ textDecoration: 'none', color:"white" }}>
                    The Muisic Store
                </Link>
            </Typography>

            <CartWidget />

            <Stack direction="row" spacing={2}>
                <Button variant="outlined" color="inherit" component={Link} to="/">Productos</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/category/Cuerda">Cuerda</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/category/Viento">Viento</Button>
                <Button variant="outlined" color="inherit" component={Link} to="/category/Percucion">Percucion</Button>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar
