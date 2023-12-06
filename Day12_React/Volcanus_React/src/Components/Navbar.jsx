import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex text-white-900  bg-red w-[100%] p-2 space-between">
        <Link to={'/'} className='p-2 hover:bg-red-900 rounded '  >Home</Link>
        <Link to={'/About' } className='p-2 hover:bg-red-900 rounded'>About</Link>
        <Link to={'/Career' } className='p-2 hover:bg-red-900 rounded'>Career</Link>
        <Link to={'/Products' } className='p-2 hover:bg-red-900 rounded'>Products</Link>
        <Link to={'/Teams' } className='p-2 hover:bg-red-900 rounded'>Teams</Link>
        <Link to={'/Contact' } className='p-2 hover:bg-red-900 rounded'>Contact</Link>
      
    </div>
  )
} 

export default Navbar
