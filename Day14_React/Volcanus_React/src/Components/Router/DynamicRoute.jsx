import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../../product_Data';
import Navigate_Component from '../Navigate_Component';

const DynamicRoute = () => {
  const {slug} = useParams();
  
  const Anirudh = product.filter((data)=>data.id == slug)
  return (
    <>
    <div className='container text-center'>
      {/* DynamicRoute = {slug} */}
      <h1>{Anirudh[0].title}</h1>
      <p>{Anirudh[0].description}</p>
      <div style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              margin:'1rem',
              }}>
                <img 
                style={{
                        height:"300px",
                        width:"30%",
                        objectFit:"contain",
                        borderRadius:"10px",
                      }}
                      src={Anirudh[0].imgUrl} alt='img'/>
              </div>
    </div>
    <div className='m-5' style={{
      textAlign:'center',
    }}>
      <Navigate_Component/>

    </div>
    </>
  )
}

export default DynamicRoute
