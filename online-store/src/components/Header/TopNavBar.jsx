import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import {BiLogIn} from 'react-icons/bi';
import { useCartCounter } from '../../contexts/CartCounterContext';

const TopNavBar = () => {
    const { productOnCart } = useCartCounter();
    console.log(productOnCart,'productOnCart')
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">ONLINE STORE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add">Products </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">View Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/paginated">Paginated</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="cart">
                    <NavLink className="btn btn-outline-danger ms-2" to={`/carts/${5}`}>
                        <FaCartPlus></FaCartPlus>Cart({productOnCart.length})</NavLink>
                    <NavLink className="btn btn-outline-danger ms-2" to={'/login'}>
                        <BiLogIn></BiLogIn>Login</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopNavBar