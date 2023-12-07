
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
      <h1 className="main-heading">Products</h1>
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
