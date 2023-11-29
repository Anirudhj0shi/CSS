import React from 'react';

const Person = (props) => {
    return(
        <>
        <div className='Person'>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.gmail}</h1>
            <h1>{props.fathername}</h1>
        </div>
        </>
    );
}

export default Person 