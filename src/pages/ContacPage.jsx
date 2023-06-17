import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Typography from '@mui/material/Typography';

const Titulo = (props) => {
  return <h1>Pagina de contacto</h1>;
};

const ContacPage = () => {
  return (
    <div >
        <Navbar />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 10 }}>
         <Titulo />
        </Typography>
    </div>
  )
}

export default ContacPage