import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Products.css';


const Navbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(searchTerm != ""){
      navigate(`/products/search/${searchTerm}`);
    }
    // navigate(`/products/search/${searchTerm}`)
  }
  return (
    <>
    <div className="flex text-white-900 bg-slate-400 w-[100%] p-2 space-between">
    <form className='my-3' onSubmit={submitHandler}>
          <input onChange={(e)=>setSearchTerm(e.target.value)}
          type='text' style={{width:'400px', color:'black'}} placeholder='Search for products...'/>
        </form>
        <Link to={'/'} className='p-2 hover:bg-red-900 rounded '  >Home</Link>
        <Link to={'/About' } className='p-2 hover:bg-red-900 rounded'>About</Link>
        <Link to={'/Career' } className='p-2 hover:bg-red-900 rounded'>Career</Link>
        <Link to={'/Products' } className='p-2 hover:bg-red-900 rounded'>Products</Link>
        <Link to={'/Teams' } className='p-2 hover:bg-red-900 rounded'>Teams</Link>
        <Link to={'/Contact' } className='p-2 hover:bg-red-900 rounded'>Contact</Link>
    </div><br/><br/>
    <div className="container d-flex justify-content-center sticky-top ">
      <button onClick={()=>setProducts(product)}
            className="btn btn-primary mx-3">No_filter</button>
            <button onClick={()=>filterMethod("Mobiles")}
            className="btn btn-primary mx-3">Mobiles</button>
            <button onClick={()=>filterMethod("Watches")}
            className="btn btn-primary mx-3">Watches</button>
            <button onClick={()=>filterMethod("Speaker")}
            className="btn btn-primary mx-3">Speaker</button>
            <button onClick={()=>filterMethod("Tablets")}
            className="btn btn-primary mx-3">Tablets</button>   
      </div><br/>

    
    </>
  )
} 

export default Navbar
