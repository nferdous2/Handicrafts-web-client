
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Order from '../Order/Order';
import './MyOrders.css'
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://handicrafts-web-server.onrender.com/myOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    return (
        <div id="myOrder">
            <h2 className='text-center text-black'><span className="heading">Your</span> Orders</h2>
            <Row xs={1} sm={12} md={3} className="gx-4 gy-5 px-5">
                {

                    orders.map(order => <Order order={order}></Order>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;