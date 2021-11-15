
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios'
import './Purchase.css'

const Purchase = () => {
    const [product, setProduct] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const { productId } = useParams()

    useEffect(() => {
        fetch(`https://fast-chamber-11448.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    // POST DATA TO SERVER
    const onSubmit = data => {
        axios.post('https://fast-chamber-11448.herokuapp.com/myOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
        console.log(data);
    }

    return (
        <div>
            <div>
                <h2>PURCHASE PRODUCT</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" form-container mt-5 mb-3 p-3" >
                    <input {...register("productName")} defaultValue={product?.name} className="form-control mb-3 " />
                    <input {...register("name", { required: true })} placeholder={user.displayName} required className="form-control mb-3 " />
                    <input {...register("email")} value={user.email} className="form-control mb-3 " />
                    <textarea {...register("description")} value={product?.description} className="form-control mb-3 " />
                    <input {...register("address")} placeholder="Address" required className="form-control mb-3 " />
                    <input type="submit" value='Confirm Order' style={{ height: '35px' }} className="btn btn-success mt-3 " />
                </form>
            </div>
        </div>
    );
};

export default Purchase;