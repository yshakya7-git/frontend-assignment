import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const AddProducts = () => {

    const products = useSelector((state)=> state.products);
    console.log(products);
    return (
        <div>
            <h3>AddProducts Page</h3>
            <NavLink className="btn btn-success ms-2" to="/create">Create Product</NavLink>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>(
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <button className='btn btn-primary my-3'>Edit</button>
                                <button className='btn btn-danger my-3'>Delete</button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>


        </div>
    )
}

export default AddProducts