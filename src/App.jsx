import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App
