import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Reviews = ({ review }) => {
    const { name, opinion, img } = review;
    return (
        <div>
            <Col>
                <Card className="product-body mb-4 p-2">
                    <Card.Img variant="top" style={{ height: '10rem' }} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {opinion}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Reviews;