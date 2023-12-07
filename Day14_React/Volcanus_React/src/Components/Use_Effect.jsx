import React, { useState } from 'react'
import { useEffect } from 'react'


const Use_Effect = () => {
    const [counter, setCounter] = useState(0)


    useEffect(()=>{
        console.log("Use Effect is running ")
        document.title = `UseEffect Side h bro ${counter}`
    },[counter]);

  return (
    <>
        <div>
            <h1>{counter}</h1>
            <button
            onClick={()=>setCounter(counter+1)} 
            className='btn btn-primary'>Anirudh</button>
            <p>Use_Effect</p>
        </div>
    </>
  )
}

export default Use_Effect
