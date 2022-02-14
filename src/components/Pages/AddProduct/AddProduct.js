import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fast-chamber-11448.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='m-auto p-2 w-75'>
            <form onSubmit={handleSubmit(onSubmit)} className="adds">
                <h2> Add <span className='heading'>A</span> Product</h2>
                <input {...register("img")} placeholder="Product Img Url" required />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Product name' required />
                <input {...register("price")} placeholder="Price" required />
                <input {...register("Description")} placeholder="Description" required />
                <input type="submit" value='Add Product' className='m-2' />
            </form>
        </div>
    );
};

export default AddProduct;