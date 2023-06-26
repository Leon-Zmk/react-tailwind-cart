import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from  './components/Products'
import Detail from './components/Detail'

function App() {

  const [items,setItem]=useState([])

  useEffect(()=>{
    getProducts();
  },[])


  const getProducts=async()=>{
    const data= await fetch("https://fakestoreapi.com/products")
    const api= await data.json();
    setItem(api);

  }


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Products products={items} />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  )
}

export default App
