import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import ReactPaginate from 'react-paginate';


const Product = () => {
    const [productList, setProductList] = useState([]);
    const [displayProductList, setDisplayProductList] = useState([]);

    const { isLoading, error } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            axios
                .get(`https://fakestoreapi.com/products/`)
                .then((res) => {
                    setProductList(res.data)
                    setDisplayProductList(res.data)
                }
                ),
    });

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

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
                        <DisplayProducts key={product.id} product={product} />
                    )
                }) : isLoading ? "Loading..." : 'No Products Found!!!'}

            </div>

           
        </div>
    )
}

export default Product