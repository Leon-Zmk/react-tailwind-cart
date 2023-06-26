import React from 'react'
import { Link } from 'react-router-dom'


function Product({image,title,description,id}) {
  return (
    <div className=" bg-slate-50 border p-10">
        <div className=" p-5 mb-5">
            <img src={image} className='w-[200px] h-[200px] bg-none' alt="" />
        </div>
       <div className="">
            <h2 className=" text-bolder tracking-normal text-xl text-teal-600">{title}</h2>
            <p className=" text-teal-950 text-lg  mt-5 text-bold">{description.substr(0,25)} ......</p>
       </div>
       <div className=" text-base">
            <button className=' bg-teal-500 mt-5 mr-2 shadow text-white rounded p-2'>Add To Cart</button>
            <Link to={`/detail/${id}`}>
              <button className=' bg-teal-500 mt-5 mr-2 shadow text-white rounded p-2'>Detail</button>
            </Link>
       </div>
    </div>
  )
}

export default Product
