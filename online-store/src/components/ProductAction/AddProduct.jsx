import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const data ={ name: '',price: '', description: ''};
    const[inputData, setInputData] = useState(data);
    const navigateProduct = useNavigate();


    const handleData =(event) =>{
        setInputData({...inputData, [event.target.name]: event.target.value});
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        axios.post('https://fakestoreapi.com/products', inputData)
        .then((response)=>{
            return response;
        })
        navigateProduct('/add');

    }
    return (
        <div className='container'>
            <h3>Add Products </h3>
            <div>
                <form className="col g-3 needs-validation" onSubmit={handleSubmit}>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip01" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={inputData.name} onChange={handleData} />

                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip02" className="form-label">Price</label>
                        <input type="text" className="form-control" name="price" value={inputData.price} onChange={handleData}/>

                    </div>

                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip02" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" value={inputData.description} onChange={handleData}/>
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

export default AddProduct