import React from 'react'
import banner from '../../assets/bg.avif'

const Homepage = () => {
    return (
        <div className='home'>
            <div className="card text-bg-dark">
                <img src={banner} className="card-img" alt="Background" height='550px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT THE TRENDS</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homepage