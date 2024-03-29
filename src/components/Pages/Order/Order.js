import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const Order = ({ order }) => {
    const [orders, setOrders] = useState([])

    const { name, price, address, phone, email, productId } = order;
    //DELETE A product
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete order?')
        if (proceed) {
            fetch(`https://handicrafts-web-server.onrender.com/myOrders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully ')
                        const leftOrders = orders.filter(order => order._id !== id)
                        setOrders(leftOrders)
                    }
                })
        }
    }
    return (
        <Col>
            <Card className="mb-4 p-2  service-style">
                <Card.Body className='services'>
                    <Card.Title className='order-text'><span className="heading">Product Id: </span>{productId}</Card.Title>
                    <Card.Title className='order-text'><span className="heading">Customer Name: </span>{name}</Card.Title>
                    <Card.Text className='order-text'><span className="heading">Price: </span>{price}</Card.Text>
                    <Card.Text className='order-text'><span className="heading">Address: </span>{address}</Card.Text>
                    <Card.Text className='order-text'><span className="heading">Phone: </span>{phone}</Card.Text>
                    <Card.Text className='order-text'><span className="heading">Email: </span>{email}</Card.Text>
                    <Button onClick={() => handleDelete(order._id)} className='btn-allP'>Remove</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Order;