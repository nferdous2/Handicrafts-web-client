import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fast-chamber-11448.herokuapp.com/addReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }

            })
    }
    return (
        <div className="add-review">
            <h2>Please AddReview</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Product name", { required: true, maxLength: 20 })} placeholder="Product Name" className="p-3 mb-2 w-50" />
                <br />
                <textarea {...register("Description")} placeholder="Description" className="p-3 mb-2 w-50" /><br />
                <textarea {...register("price")} placeholder="Price" className="p-3 mb-2 w-50" /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;