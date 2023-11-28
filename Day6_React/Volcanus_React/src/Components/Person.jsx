import React from 'react';

const Person = () => {
    const person ={
        name: "Anirudh",
        age:22,
        gmail:"yashjoshi5525@gmail.com",
        phone:6266927816,
        
      };

    //   const style = {
    //         border: '5px solid blue',
    //         padding: '1rem',
    //         fontSize: '50px', 
    //         backgroundColor:'yellow'
    //   }
    //   const style2 = {
    //         border: '5px solid white',
    //         padding: '1rem',
    //         fontSize: '50px', 
    //         backgroundColor:'red'
    //   }
    //   const style3 = {
    //         border: '5px solid pink',
    //         padding: '1rem',
    //         fontSize: '50px', 
    //         backgroundColor:'brown'
    //   }
    return(
        <>
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.gmail}</h1>
            <h1 className='Person'>{person.phone}</h1>
        </div>
        </>
    );
}

export default Person 