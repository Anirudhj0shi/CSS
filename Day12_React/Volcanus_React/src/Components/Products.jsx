import React, { useState } from 'react';
import './Products'
import { product } from "../product_Data"

const Products = ( ) => {
    const [products, setProducts] = useState(product);
    // console.log()
    const filterMethod = (Category) => {
        setProducts(product.filter((data)=> data.Category == Category));
    }
    return(
        <>
        <h1>Products</h1>
        <div className="container d-flex justify-content-center sticky-top">
            <button onClick={()=>setProducts(product)}
            className="btn btn-info mx-3">No_filter</button>
            <button onClick={()=>filterMethod("Mobiles")}
            className="btn btn-primary mx-3">Mobiles</button>
            <button onClick={()=>filterMethod("Watches")}
            className="btn btn-warning mx-3">Watches</button>
            <button onClick={()=>filterMethod("Speaker")}
            className="btn btn-danger mx-3">Speaker</button>
            <button onClick={()=>filterMethod("Tablets")}
            className="btn btn-secondary mx-3">Tablets</button>
        </div>
        <div class="search-bar">
                <input type="text" id="sear-ch" placeholder="Search for products..."></input>
                <button onclick="search()">Search</button>
            </div>
        <div id='container' className='container'>
            <div className="coloumn">

            <div className='row'>
                { products.map((data)=>{
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
        </div>
        </>
    )
};

export default Products