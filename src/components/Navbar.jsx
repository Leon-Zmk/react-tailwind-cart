import React from 'react'
import { Link } from 'react-router-dom'
import {MdProductionQuantityLimits} from "react-icons/md";

function Navbar() {
  return (
    <div className=' mx-10 my-3 p-5 bg-slate-300 grid grid-cols-2' >
      
        <Link>
            <MdProductionQuantityLimits />
        </Link>
        <div className="text-end">
            <form action="">
                <input type="text" name='search' />
            </form>
        </div>
      
    </div>
  )
}

export default Navbar
