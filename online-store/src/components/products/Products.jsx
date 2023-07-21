import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Products = () => {
    const [productList, setProductList] = useState([]);
    const [displayProductList, setDisplayProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Online Store";
        axios.get(`https://fakestoreapi.com/products/`)
            .then((response) => {
                setProductList(response.data);
                setDisplayProductList(response.data);
                setIsLoading(false);
                console.log(response.data);

            });
    }, []);

    const searchProduct = (query) => {
        if (!!query) {
            const filterProductList = productList.filter((product) => {
                return product.title.includes(query) || product.description.includes(query);
            });
            setDisplayProductList(filterProductList);
        } else {
            setProductList(displayProductList);
        }
    }

    console.log(productList,'productList');
    return (
        <div className='container py-5'>
            <h3 className='display-6 fw-bolder text-center'>Products List</h3>
            <br />

            <center>
                <input style={{ height: "40px", width: "50%", borderRadius: "10px" }} type="search" placeholder="Search Product" onChange={(e) => searchProduct(e.target.value)} />
            </center>

            <br />

            <div className='row'>
                {!!displayProductList.length ? displayProductList.map((product) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div className="card" key={product.id} height="250px" width="250px">
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
                                    <center>
                                        <NavLink to={`/products/${product.id}`} className='btn btn-danger'>Buy Now</NavLink>
                                    </center>
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