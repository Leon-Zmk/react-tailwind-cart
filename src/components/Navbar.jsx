import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdManageSearch, MdProductionQuantityLimits} from "react-icons/md";

function Navbar({giveItems,items}) {

  const [search,setSearch]=useState("");
  const nav=useNavigate();

  const searchHandler= (e)=>{
    e.preventDefault();
    let Items=items.filter((item)=> item.title.toLowerCase().includes(search) )
    console.log(Items);
    giveItems(Items);
    
  }

  return (
    <div className=' mx-10 my-3 p-5 items-center bg-slate-300 grid grid-cols-2' >
      
        <Link>
            <MdProductionQuantityLimits />
        </Link>
        <div className="text-end">
            <form action="" onSubmit={searchHandler}>
              <MdManageSearch className='inline-block mr-4 text-2xl'/>
                <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} className=' outline-none' name='search' />


            </form>
        </div>
      
    </div>
  )
}

export default Navbar
