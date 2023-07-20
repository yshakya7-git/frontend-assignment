import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [tempDataList, setTempDataList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [filter, setFilter] = useState(productList);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`)
            .then((response) => {
                setProductList(response.data);
                setTempDataList(response.data);
                setIsLoading(false);
                console.log(response.data);

            });
    }, []);

    const searchProduct = (query) => {
        if (query === '') {
            setTempDataList(tempDataList);
        } else {
            const filterProductList = productList.filter((product) => {
                product.title = product.title === null ? '' : product.title;
                return product.title.includes(query);
            });
            setProductList(filterProductList);
        }
    }

    // const filterProduct =(cate)=>{
    //     const updateList= productList.filter((n)=> n.categories === cate);
    //     setFilter(updateList);
    // }

    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h3 className='display-6 fw-bolder text-center'>Products List</h3>
                    <hr />
                </div>
            </div>

            {/* <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className='btn btn-outline-dark me-2' onClick={()=> setFilter(productList)}>All</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct('womens clothing')}>Women's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct('accessories')}>Accessories</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct('electronics')}>Electronics</button> */}


            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => searchProduct(e.target.value)} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

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