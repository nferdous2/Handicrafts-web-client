import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/review', data)
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
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="p-3 mb-2 w-50" />
                <br />
                <textarea {...register("opinion")} placeholder="opinion" className="p-3 mb-2 w-50" /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;