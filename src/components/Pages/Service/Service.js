import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const [btn, setBtn] = useState({})
    const { id, name, description, img, price } = service;
    const handle = (e) => {
        setBtn(e.target.value);
    };
    return (

        <div>
            <Col>
                <Card className="service-body mb-4 p-2">
                    <Card.Img variant="top" style={{ height: '10rem' }} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>Price: {price} $
                        </Card.Text>
                        <NavLink to={`/purchase/${id}`} ><Button className='btn-success' onClick={handle}>Buy now</Button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;