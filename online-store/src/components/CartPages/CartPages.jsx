import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useParams } from 'react-router-dom';
import { useCartCounter } from '../../contexts/CartCounterContext';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

const CartPages = () => {
    const { productOnCart } = useCartCounter();
    const { id } = useParams();
    const [productList, setProductList] = useState([]);
    console.log(productList, 'prooduct')

    const { isLoading, error } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            axios
                .get(`https://fakestoreapi.com/products/${id}`)
                .then((res) => {
                    setProductList(res.data)
                }
                ),
    });

    if (isLoading) { return 'Loading...' }

    if (error) { return 'An error has occurred: ' + error.message }

    return (
        <>
        <div className="container">
            {productOnCart.length > 0 &&
                <div className="row">
                    {productOnCart.map((product, idx) => (
                        <DisplayProducts key={`${product.id}-${idx}`} product={product} isCart />
                    ))}

                </div>
            }

            {productOnCart.length === 0 && <><div className="d-flex align-items-center justify-content-center vh-100">
                <div className="card" height="250px" width="250px">
                    No Data on cart. Please add data to Cart
                    <center>
                    <NavLink to={`/products`} className="btn btn-danger">Go back to Products</NavLink>
                    </center>
                </div>
            </div></>}
            </div>
        </>
    )
}

export default CartPages;