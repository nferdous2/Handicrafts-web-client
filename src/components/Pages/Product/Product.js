import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, description, img, price } = product;
    return (
        <div className="product-body p-3">
            <Col className="products">
                <Card className="products-style mb-4 p-2">
                    <Card.Img variant="top" style={{ height: '10rem' }} src={img} />
                    <Card.Body>
                        <Card.Title className='heading'>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>Price: {price} $
                        </Card.Text>

                        <NavLink to={`/purchase/${_id}`} ><Button className='btn-success'>Buy now</Button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;