import React, { useState } from 'react'
useState
const Counter = () => {
    const [counter, setcounter] = useState(10)
    
    
    // let counter = 0;
    
    const increase = () => {
    // 
    setcounter(counter+1)
    console.log(counter);
};
const decrease = () => {
    // counter--
    setcounter(counter-1)
    console.log(counter);
    };
    console.log(counter);


    return (


    <div className='text'>{counter}<br/>
        <button onClick={increase}>Increase</button><br/>
        <button onClick={decrease}>Decrease</button><br/>
    </div>
    )
};
export default Counter
