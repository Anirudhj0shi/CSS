import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { product } from '../product_Data';


const Searchitems = () => {
    const{superman} = useParams();
    const [filterData, setFilterData] = useState([])
        useEffect(() => {
            const filterData = () =>{
                setFilterData(product.filter((data)=>
                data.title.toLowerCase().includes(superman.toLowerCase())
                )
              );
            };
            filterData();
        },[superman]);
        console.log(filterData);
  return (
    <>
    <div id="container" className="container">
        <div className="row">
          {filterData.map((data) => (
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
  )
}

export default Searchitems
