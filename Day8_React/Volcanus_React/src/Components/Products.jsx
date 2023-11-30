import React from 'react';
import './Products'

const Products = ({product}) => {
    // console.log()
    return(
        <>
        <div id='container' className='container'>
            <div className='row'>
                { product.map((data)=>{
                return(
                <>
                    <div className='text-center'>

                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className='IMG'>
                            <img
                            style={{
                                height:"100%",
                                width:"30%",
                                objectFit:"contain",
                                borderRadius:"10px",
                            }}
                            src={data.imgUrl} alt='img'/>
                        </div><br/>
                        
                        <button className='btn btn-warning'>{data.price}{" "}₹</button>
                    </div>
                    </>

                )

            })
        }
        </div>
        </div>
        </>
    )
};

export default Products