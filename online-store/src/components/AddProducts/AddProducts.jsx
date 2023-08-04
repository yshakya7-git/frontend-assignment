import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteProducts } from '../../redux/ProductReducer';

const AddProducts = () => {

    const products = useSelector((state)=> state.products);
    const deleteDispatch = useDispatch();
    
    const handleOnDelete =(id) =>{
        deleteDispatch(deleteProducts({id: id}));
    }
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
                                <NavLink to={`/edit/${product.id}`} className='btn btn-primary my-3'>Edit</NavLink>
                                <button onClick={()=> handleOnDelete(product.id)} className='btn btn-danger my-3'>Delete</button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>


        </div>
    )
}

export default AddProducts