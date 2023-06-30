import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer.jsx';
import ItemDetailContainer from './pages/ItemDetailContainerPage.jsx';
import ItemCategoryPage from './pages/ItemCategoryPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/detail/:id" element={<ItemDetailContainer />} />

        <Route path="/category/:categoryId" element={<ItemCategoryPage />} />

      </Routes>
    </Router>
  );
}

export default App;
