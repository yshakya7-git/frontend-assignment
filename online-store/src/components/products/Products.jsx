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

            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className='btn btn-outline-dark me-2'>All</button>
                <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
                <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
                <button className='btn btn-outline-dark me-2'>Electronics</button>
            </div>


            <div className='row'>
                {productList.length > 0 ? productList.map((product) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div className="card" key={product.id}>
                                <img src={product.image}
                                    style={{ height: "250px", width: "250px", objectFit: "cover" }}
                                    alt={product.description}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>
                                    <p className="card-text">
                                        ${product.price}
                                    </p>
                                    {product.description ? product.description.substring(0, 100) : 'products'}
                                    <br />
                                    <br />
                                    <a href="" className='btn btn-outline-dark'>Buy Now</a>
                                </div>

                            </div>
                        </div>
                    )
                }) : isLoading ? "Loading..." : 'No Products Found!!!'}
            </div>
        </div>
    )
}

export default Products