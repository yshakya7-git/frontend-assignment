import React from 'react'
import banner from '../../assets/b1.avif'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='home'>
            <div className="card text-bg-dark">
                <img src={banner} className="card-img" alt="Background" height='550px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">LATEST SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">STAY AHEAD WITH OUR LATEST COLLECTIONS</p>
                        <NavLink to={`/products`} className='btn btn-danger'>Buy Here</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homepage