import React, { useRef } from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

    const {id}=useParams();
    const [item,setItem]=useState({})

    useEffect(()=>{
      getProduct();
    },[])
  
    const getProduct=async()=>{
      const data= await fetch("https://fakestoreapi.com/products/"+id)
      const api= await data.json();
      setItem(api);
    }
    
  return (
    <div>
       <p className='text-center text-teal-300 '>{item.title}</p>
    </div>
  )
}

export default Detail
