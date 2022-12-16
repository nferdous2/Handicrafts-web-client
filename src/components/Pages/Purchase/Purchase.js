import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './Purchase.css';
const Purchase = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    useEffect(() => {
        fetch(`https://handicrafts-web-server.onrender.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://handicrafts-web-server.onrender.com/myOrders', data)
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
            <form className=" form-container mt-5 mb-3 p-3" onSubmit={handleSubmit(onSubmit)}  >
                <h2>Place <span className="heading">Your</span> Order</h2>
                <input {...register("productId")} value={product.name} defaultValue={productId} className="form-control mb-3 " />
                <input {...register("price")} placeholder="Price" required className="form-control mb-3 " />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required className="form-control mb-3 " />
                <input {...register("address")} placeholder="Address" required className="form-control mb-3 " />
                <input {...register("phone")} placeholder="Phone Number" required className="form-control mb-3 " />
                <input type="email" {...register("email")} placeholder="Email" required className="form-control mb-3 " />
                <input type="submit" value='Confirm Order' style={{ height: '35px' }} className="btn btn-success mt-3 " />
            </form>
        </div>
    );
};

export default Purchase;