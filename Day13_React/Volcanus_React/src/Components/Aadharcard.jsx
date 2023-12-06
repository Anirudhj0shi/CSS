import React from 'react';

const Aadharcard = () => {
    const Aadhar ={
        number:18641351464,

    };
    return (
        <>
        <div style={{
            fontSize:'50px',
            color:'white',

        }}>
            <p className='person'>number:{Aadhar.number}</p>
        </div>
        </>

    );
};
export default Aadharcard