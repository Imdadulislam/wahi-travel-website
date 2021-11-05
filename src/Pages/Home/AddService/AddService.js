import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Footer/Footer';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://infinite-savannah-05869.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Service Added SuccessFully');
                    reset();
                }
            })
    }
    return (
        <div className="NewService-container">
            <form onSubmit={handleSubmit(onSubmit)} className="NewService-form mb-5">
                <h3>Add New Service</h3>
                <input {...register("name")} placeholder="Name" />
                <input {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="description" />
                <input {...register("image")} placeholder="Image URL" />
                <input  type="submit" className="Add-button"/>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;