import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate_Component = () => {
    const navigate = useNavigate()
  return (
    <>
    <div onClick={()=>navigate('/')} className='btn btn-warning'>
        Back to Home
    </div>
    </>
  )
}

export default Navigate_Component
