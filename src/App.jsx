import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ContacPage from './pages/ContacPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ItemPage from './pages/ItemPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = { <HomePage/> } />
        <Route path='/ContactPage' element = { <ContacPage/> } />
        <Route path='/AboutPage' element = { <AboutPage/> } />
        <Route path='/detail/:id' element = { <ItemPage/> } />
      </Routes>
    </Router>
  )
}

export default App
