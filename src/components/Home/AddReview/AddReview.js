import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fast-chamber-11448.herokuapp.com/addReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank You,Review added successfully');
                    reset();
                }

            })
    }
    return (
        <div className="w-75 m-auto p-2">
            <h2>Please <span className="heading">Put </span>Your <span className="heading">Valuable</span> Opinion</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="adds mt-3 p-3">
                <h4>Your <span className="heading">Name</span></h4>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="p-3 mb-2 w-50" />

                <h4><span className="heading">Your</span> Opinion</h4>
                <textarea {...register("opinion")} placeholder="opinion" className="p-3 mb-2 w-50" /><br />
                <input type="submit" className="p-3 mb-2 w-50" />
            </form>
        </div>
    );
};

export default AddReview;