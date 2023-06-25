import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from './pages/ItemListContainer.jsx';
import ElectronicaPage from './pages/ElectronicaPage.jsx';
import RopaDeHombrePage from './pages/RopaDeHombrePage.jsx';
import RopaDeMujerPage from './pages/RopaDeMujerPage.jsx';
import JoyeriaPage from './pages/JoyeriaPage.jsx';
import ItemDetailContainer from './pages/ItemDetailContainerPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = { <ItemListContainer/> } />
        <Route path='/ElectronicaPage' element = { <ElectronicaPage/> } />
        <Route path='/RopaDeHombrePage' element = { <RopaDeHombrePage/> } />
        <Route path='/RopaDeMujerPage' element = { <RopaDeMujerPage/> } />
        <Route path='/JoyeriaPage' element = { <JoyeriaPage/> } />
        <Route path='/detail/:id' element = { <ItemDetailContainer/> } />
      </Routes>
    </Router>
  )
}

export default App
