import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import purchase from '../../Shared/Images/purchase.png'
import './Purchase.css'
const Purchase = () => {
    const { user } = useAuth();
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("")
    const handleProductName = (e) => {
        setProductName(e.target.value);
    };
    const handlePrice = (e) => {
        setProductPrice(e.target.value);
    };
    const handleAdd = () => {
        console.log({ productName, productPrice });
        const data = { productName, productPrice };

        fetch("https://fast-chamber-11448.herokuapp.com/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return (
        <div >

            <form className=" form-container mt-5 mb-3 p-3">
                <h2 className="text-center">Place Order</h2>
                <div>
                    <img src={purchase} className="w-25" alt="" />
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 p-2">
                    <input type="text" name="" id="" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-outline mb-4 p-2">
                    {user.email}
                    <input type="email" id="form3Example3" className="form-control text-bold" placeholder="Your Email" />
                </div>

                <div className="form-outline mb-4 p-2">
                    <input type="text" name="" id="" className="form-control" placeholder="Product name" onChange={handleProductName} />
                </div>
                <div className="form-outline mb-4 p-2">
                    <input type="number" name="" id="" className="form-control" placeholder="Price" onChange={handlePrice} />
                </div>

                <div className="form-outline mb-4 p-2">
                    <input type="text" name="" id="" className="form-control" placeholder="Your Address" />
                </div>
                <div className="form-outline mb-4 p-2">
                    <input type="number" name="" id="" className="form-control" placeholder="Give Your PhoneNumber" />
                </div>
                <br />
                <Link to="/addreview">
                    <button className="btn btn-success mt-3" onClick={handleAdd}>
                        Add
                    </button>
                </Link>
            </form >
        </div>
    );
};

export default Purchase;