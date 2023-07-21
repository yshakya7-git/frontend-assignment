import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { AiFillStar } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action/AddCart'

const ProductDetails = () => {
    const { id } = useParams();
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const addProduct = (productList) => {
        dispatch(addCart(productList));
        console.log(addProduct);
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProductList(response.data);
                setIsLoading(false);
                console.log(response.data);

            });
    }, [id]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ListProducts = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={productList.image} alt={productList.image} height="350px" width="350px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{productList.category}</h4>
                    <h1 className="display-5">{productList.title}</h1>
                    <p className="rates fw-bolder"><br />
                        Rating{productList.rating && productList.rating.rate}
                        <AiFillStar></AiFillStar>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${productList.price}
                    </h3>
                    <p className="description">{productList.description}</p>
                    <NavLink className='btn btn-outline-dark px-2'
                        onClick={() => dispatch(addProduct(productList))}>
                        Add to Cart
                    </NavLink>
                    <NavLink to='/cart' className='btn btn-dark ms-2'>
                        View Cart
                    </NavLink>
                    <NavLink to='/products' className='btn btn-outline-dark ms-2'>
                        Back
                    </NavLink>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className="container py-5">
                <div className="row py=4">
                    {isLoading ? <Loading /> : <ListProducts />}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails