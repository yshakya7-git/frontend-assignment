import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [tempDataList, setTempDataList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`)
            .then((response) => {
                setProductList(response.data);
                setTempDataList(response.data);
                setIsLoading(false);
                console.log(response.data)

            });
    }, []);
    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h3 className='display-6 fw-bolder text-center'>Products List</h3>
                    <hr />
                </div>
            </div>

            <div className='row justify-content-center'>
            <div className='image-content'>
        {productList.length > 0 ? productList.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image}
                style={{ height: "250px", width: "250px", objectFit: "cover" }}
                alt={product.description}
              />
              <br />
              {product.description ? product.description.substring(0, 20) : 'images'}
            </div>
          )
        }): isLoading ? "Loading..." : 'No Products Found!!!'}
      </div>
            </div>
        </div>
    )
}

export default Products