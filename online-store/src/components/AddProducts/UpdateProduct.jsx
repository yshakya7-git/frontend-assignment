import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProducts } from '../../redux/ProductReducer';

const UpdateProduct = () => {

    const { id } = useParams();
    const products = useSelector((state) => state.products);
    const existingProducts = products.filter(pro => pro.id == id);

    const { name, price, description } = existingProducts[0];

    const [pname, setName] = useState(name);
    const [pprice, setPrice] = useState(price);
    const [pdescription, setDescription] = useState(description);

    const updateDispatch = useDispatch();
    const navigate= useNavigate();

    const handleOnUpdate = (event) => {
        event.preventDefault();
        updateDispatch(updateProducts({
            id: id,
            name: pname,
            price: pprice,
            description: pdescription
        }));
        navigate('/add');

    }

    return (
        <div className='container'>
            <h3>Add Products </h3>
            <div>
                <form className="col g-3 needs-validation" onSubmit={handleOnUpdate} >
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip01" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={pname} onChange={e => setName(e.target.value)} />

                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip02" className="form-label">Price</label>
                        <input type="text" className="form-control" name="price" value={pprice} onChange={e => setPrice(e.target.value)} />

                    </div>

                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip02" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" value={pdescription} onChange={e => setDescription(e.target.value)} />
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

export default UpdateProduct