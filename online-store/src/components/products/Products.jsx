import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const Products = () => {
    const [productList, setProductList] = useState([]);
    const [tempDataList, setTempDataList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [filter, setFilter] = useState(productList);
    useEffect(() => {
        document.title = "Product Page";
        axios.get(`https://fakestoreapi.com/products/`)
            .then((response) => {
                setProductList(response.data);
                setTempDataList(response.data);
                setIsLoading(false);
                console.log(response.data);

            });
    }, []);

    const searchProduct = (query) => {
        if (query === " ") {
            setTempDataList(tempDataList);
        } else {
            const filterProductList = productList.filter((product) => {
                product.title = product.title === null ? 'images' : product.title;
                return product.title.includes(query);
            });
            setProductList(filterProductList);
        }
    }

    return (
        <div className='container my-5 py-5'>
            <h3 className='display-6 fw-bolder text-center'>Products List</h3>
            <br />

            <center>
                    <input style={{ height: "40px", width: "50%", borderRadius: "10px" }} type="search" placeholder="Search Product" onChange={(e) => searchProduct(e.target.value)} />
            </center>

            <br />

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
                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
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