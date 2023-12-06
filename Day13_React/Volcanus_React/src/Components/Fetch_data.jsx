import React, { useEffect, useState } from 'react'


const Fetch_data = () => {
    const[apiData,setApiData] = useState([])
    useEffect(()=>{
        const fetchData  = async() =>{
            // const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            // const data = await api.json()
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json()

            console.log(data)
            setApiData(data)
        };
        fetchData();
    },[]);
    console.log("data in state",apiData)
  return (
    <div>
        {apiData.map((data)=>{
            return(<>
            <div className="container text-center ">
                <h1>userId{data.userId}</h1>
                <h1>title{data.title}</h1>
                <h1>body{data.body}</h1>
                
                </div>
                </>)
        })}
    </div>
  )
}

export default Fetch_data
