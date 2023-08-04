import React, { useState } from 'react'
import { addProducts } from '../../redux/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const products = useSelector((state) => state.products);
    const productDispatch = useDispatch();
    const navigateProduct = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        productDispatch(addProducts({
            id: products[products.length - 1].id + 1,
            name,
            price,
            description
        }))
        navigateProduct('/add');
    }
    return (
        <div className='container'>
            <h3>Add Products </h3>
                        <div>
                            <form className="col g-3 needs-validation" onSubmit={handleOnSubmit}>
                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltip01" className="form-label">Name</label>
                                    <input type= "text" className="form-control" name="name" onChange= {e=> setName(e.target.value)}/>

                                </div>
                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltip02" className="form-label">Price</label>
                                    <input type= "text" className="form-control" name="price" onChange= {e=> setPrice(e.target.value)}/>

                                </div>

                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltip02" className="form-label">Description</label>
                                    <input type= "text" className="form-control" name="description" onChange= {e=> setDescription(e.target.value)} />
                                </div>
                                <br />
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
        </div>
    )
}

export default CreateProduct