import React from 'react'
import { useState,useEffect } from 'react';
import Product from './Product';

function Home({products}) {

  return (
    <div className='grid grid-cols-4 gap-4 p-10'>
       {products.map((e)=>(
        <Product id={e.id} title={e.title} image={e.image} description={e.description} key={e.id}></Product>
       ))}
    </div>
  )
}

export default Home
