import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { faStar, faStarHalf, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Reviews = ({ review }) => {
    const { name, opinion } = review;
    return (
        <div>
            <Col>
                <Card className="review-card mb-4 p-2">
                    <div className="card-image">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {opinion}
                        </Card.Text>
                        <div>
                            <div>
                                <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="filled" icon={faStarHalf}></FontAwesomeIcon>
                                <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Reviews;