// import React, { useState } from 'react';
// import './Products'
// import { product } from "../product_Data"
// import {Link} from 'react-router-dom'

// const Products = ( ) => {
//     const [products, setProducts] = useState(product);
//     // console.log()
//     const filterMethod = (Category) => {
//         setProducts(product.filter((data)=> data.Category == Category));
//     }
//     return(
//         <>
//         <h1>Products</h1>
//         <div className="container d-flex justify-content-center sticky-top">
//             <button onClick={()=>setProducts(product)}
//             className="btn btn-info mx-3">No_filter</button>
//             <button onClick={()=>filterMethod("Mobiles")}
//             className="btn btn-primary mx-3">Mobiles</button>
//             <button onClick={()=>filterMethod("Watches")}
//             className="btn btn-warning mx-3">Watches</button>
//             <button onClick={()=>filterMethod("Speaker")}
//             className="btn btn-danger mx-3">Speaker</button>
//             <button onClick={()=>filterMethod("Tablets")}
//             className="btn btn-secondary mx-3">Tablets</button>
//         </div>
//         <div class="search-bar" id='Search_bar'>
//                 <input type="text" id="sear-ch" placeholder="Search for products..."></input>
//                 <button onclick="search()">Search</button>
//             </div>
//         <div id='container' className='container'>
//             <div className="coloumn">

//             <div className='row'>
//                 { products.map((data)=>{
//                     return(
//                         <>
//                     <div className='text-center'>

//                         <h1>{data.title}</h1>
//                         <p>{data.description}</p>
//                         <Link to={`/products/${data.id}`}
//                         style={{
//                             display:'flex',
//                             justifyContent:'center',
//                             alignItems:'center',
//                             margin:'1rem',
//                         }}>
//                             <img
//                             style={{
//                                 height:"300px",
//                                 width:"30%",
//                                 objectFit:"contain",
//                                 borderRadius:"10px",
//                             }}
//                             src={data.imgUrl} alt='img'/>
//                         </Link>
                        
//                         <button className='btn btn-warning'>{data.price}{" "}₹</button>
//                         </div>,<br/><br/>
//                         </>
//                     )

// })
// }
//                     </div>
//                             </div>
//         </div>
//         </>
//     )
// };

// export default Products


// import React, { useState } from 'react';
// import './Products.css'; // Assuming the CSS file is named Products.css
// import { product } from '../product_Data';
// import { Link } from 'react-router-dom';

// const Products = () => {
//   const [products, setProducts] = useState(product);

//   const filterMethod = (Category) => {
//     setProducts(product.filter((data) => data.Category === Category));
//   };

//   return (
//     <>
//       <h1 className="main-heading">Products</h1>
//       <div className="container d-flex justify-content-center sticky-top p-2">
//       <button onClick={()=>setProducts(product)}
//             className="btn btn-info mx-3">No_filter</button>
//             <button onClick={()=>filterMethod("Mobiles")}
//             className="btn btn-primary mx-3">Mobiles</button>
//             <button onClick={()=>filterMethod("Watches")}
//             className="btn btn-warning mx-3">Watches</button>
//             <button onClick={()=>filterMethod("Speaker")}
//             className="btn btn-danger mx-3">Speaker</button>
//             <button onClick={()=>filterMethod("Tablets")}
//             className="btn btn-secondary mx-3">Tablets</button>
//       </div>
//       <div className="search-bar" id="Search_bar">
//             <input type="text" id="sear-ch" placeholder="Search for products..."></input>
//             <button onclick="search()">Search</button>
//       </div>
//       <div id="container" className="container">
//         <div className="column">
//           <div className="row">
//             {products.map((data) => (
//               <div className="text-center product-card" key={data.id}>
//                 <h2 className="product-title">{data.title}</h2>
//                 <p className="product-description">{data.description}</p>
//                 <Link
//                   to={`/products/${data.id}`}
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     margin: '1rem',
//                   }}
//                 >
//                   <img
//                     style={{
//                       height: '300px',
//                       width: '30%',
//                       objectFit: 'contain',
//                       borderRadius: '10px',
//                     }}
//                     src={data.imgUrl}
//                     alt="img"
//                   />
//                 </Link>
//                 <button className="btn btn-warning">
//                   {data.price} ₹
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;




import React, { useState } from 'react';
import './Products.css'; // Assuming the CSS file is named Products.css
import { product } from '../product_Data';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState(product);

  const filterMethod = (Category) => {
    setProducts(product.filter((data) => data.Category === Category));
  };

  return (
    <>
      <h1 className="main-heading">Products</h1><br/><br/>
      <div className="container d-flex justify-content-center sticky-top ">
      <button onClick={()=>setProducts(product)}
            className="btn btn-primary mx-3">No_filter</button>
            <button onClick={()=>filterMethod("Mobiles")}
            className="btn btn-primary mx-3">Mobiles</button>
            <button onClick={()=>filterMethod("Watches")}
            className="btn btn-primary mx-3">Watches</button>
            <button onClick={()=>filterMethod("Speaker")}
            className="btn btn-primary mx-3">Speaker</button>
            <button onClick={()=>filterMethod("Tablets")}
            className="btn btn-primary mx-3">Tablets</button>   
      </div><br/>
      <div className="search-bar" id="Search_bar">
        <input type="text" id="sear-ch" placeholder="Search for products..."></input>
        <button onclick="search()">Search</button><br/><br/><br/>
      </div>
      <div id="container" className="container">
        <div className="row">
          {products.map((data) => (
            <div className="col-md-4 mb-4" key={data.id}>
              <div className="card product-card">
                <div className="card-body">
                  <h2 className="product-title">{data.title}</h2>
                  <p className="product-description">{data.description}</p>
                  <Link
                    to={`/products/${data.id}`}
                    className="d-block text-center"
                  >
                    <img
                      className="img-fluid"
                      src={data.imgUrl}
                      alt="Product"
                    />
                  </Link>
                  <div className="text-center">
                    <button className="btn btn-warning">
                      {data.price} ₹
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
