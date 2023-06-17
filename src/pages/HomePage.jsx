import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx'
import ItemList from '../components/ItemList/ItemList.jsx'

const HomePage = () => {
  return (
    <div>  
        <Navbar />
        <ItemListContainer />
    </div>
  )
}

export default HomePage