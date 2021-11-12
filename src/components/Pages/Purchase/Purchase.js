import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import purchase from '../../Shared/Images/purchase.png'
import './Purchase.css'
const Purchase = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div >

            <form className=" form-container mt-5 mb-3 p-3">
                <h2 className="text-center">Place Order</h2>
                <div>
                    <img src={purchase} className="w-25" alt="" />
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 p-2">
                    {/* {user.displayName} */}
                    <input type="text" name="" id="" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-outline mb-4 p-2">
                    {/* {user.email} */}
                    <input type="email" id="form3Example3" className="form-control text-bold" placeholder="Your Email" />
                </div>

                <div className="form-outline mb-4 p-2">
                    <input type="text" name="" id="" className="form-control" placeholder="Product name" />
                </div>
                <div className="form-outline mb-4 p-2">
                    <input type="number" name="" id="" className="form-control" placeholder="Price" />
                </div>

                <div className="form-outline mb-4 p-2">
                    <input type="text" name="" id="" className="form-control" placeholder="Your Address" />
                </div>
                <div className="form-outline mb-4 p-2">
                    <input type="number" name="" id="" className="form-control" placeholder="Give Your PhoneNumber" />
                </div>
                <br />
                <Link to="/home">
                    <button className="btn btn-success mt-3">
                        Add
                    </button>
                </Link>
            </form >
        </div>
    );
};

export default Purchase;