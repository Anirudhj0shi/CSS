import React, { useState } from 'react'
useState

const Userstateexam = () => {
    const[name,setname] = useState("Ram")
    const[age,setage] = useState('33')  
    const up = () => { 
        
        setname("Syam")
        setage('444')
}
const[Data,setData] = useState({
  name:'Anirudh',
  age:23,
  gmail:"janirudh5525@gmail.com"
})
  return (

 <div>
    <br />

      {/* Name:{name}
      <br/>
      age:{age}
      <br /> */}
      <h1>{Data.name}</h1>
      <h1>{Data.age}</h1>
      <h1>{Data.gmail}</h1>
    
      <button onClick={Data}>Update</button>
      </div>
  )
}

export default Userstateexam