import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { useCartCounter } from '../../contexts/CartCounterContext'

function DisplayProducts({ product, isCart = false }) {
    // const { productOnCart, updateProductOnCart } = useCartCounter();

    // const productCountHandler = (product, type) => {
    //     let currentProducts = productOnCart
    //     const productIndex = currentProducts.findIndex(prod => prod.id === product.id)
    //     console.log(currentProducts,'hello')
    //     if (productIndex !== -1) {
    //         if (type === 'add') {
    //             currentProducts[productIndex] = { ...product, quantity: product.quantity + 1 }
    //         } else {
    //             currentProducts[productIndex] = { ...product, quantity: product.quantity - 1 }
    //         }
    //     }
    //     updateProductOnCart(currentProducts)
    //     // console.log(productCountHandler,'add')
    // }
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4" height="250px" width="250px">
                <img src={product?.image}
                    style={{ height: "250px", width: "250px", objectFit: "cover" }}
                    alt={product.description ?? ''}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.title ?? ''}
                    </h5>
                    <p className="card-text ms-2">
                        ${product.price}
                    </p>
                    <p className='card-text'>{product.description ? product.description.substring(0, 100) : 'products'}</p>

                </div>

                {!isCart && <center>
                    <NavLink to={`/products/${product.id}`} className='btn btn-danger'>Buy Now</NavLink>
                </center>}
                {isCart && <center>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                            {/* <button onClick={() => productCountHandler(product, 'add')}>+</button> */}
                            {/* <button onClick={() => productOnHandleCart(product)}>+</button> */}
                            <p>{product.quantity ?? 0}</p>
                            {/* <button onClick={() => productCountHandler(product, 'substract')}>-</button> */}
                        </div>
                        <NavLink to={`/products`} className="btn btn-danger">Checkout</NavLink>
                    </div>
                </center>
                }
            </div>
        </div>
    )
}

export default DisplayProducts