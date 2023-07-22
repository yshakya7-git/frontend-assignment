import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { AiFillStar } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useCartCounter } from '../../contexts/CartCounterContext'
import { useQuery } from 'react-query'


const ProductsDetails = () => {
    const { productOnCart, updateProductOnCart } = useCartCounter()
    const { id } = useParams();
    const [productList, setProductList] = useState([]);

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

    const handleAddToCart = (product) => {
        let currentProductsOnCart = productOnCart;
        if (product.id) {
            let checkProductDetails = productOnCart.find(productData => +productData.id === +product.id)
            if (checkProductDetails?.id) {
                const findProductIndex = productOnCart.findIndex(productData => +productData.id === +product.id);
                currentProductsOnCart[findProductIndex] = { ...product, quantity: checkProductDetails.quantity + 1 }
            } else {
                currentProductsOnCart = [...productOnCart, { ...product, quantity: 1 }]
            }
        }
        updateProductOnCart(currentProductsOnCart)

    }
    return (
        <div className="container py-5">
            <div className="row py=4">
                <div className="col-md-6">
                    <img src={productList.image} alt={productList.image} height="350px" width="350px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{productList.category}</h4>
                    <h1 className="display-5">{productList.title}</h1>
                    <p className="rates fw-bolder"><br />
                        Rating{productList.rating && productList.rating.rate}
                        <AiFillStar />
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${productList.price}
                    </h3>
                    <p className="description">{productList.description}</p>
                    <button className='btn btn-outline-danger px-2' onClick={() => handleAddToCart(productList)}>
                        Add to Cart
                    </button>
                    <NavLink to='/products' className='btn btn-success ms-2'>
                        View Products
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails;