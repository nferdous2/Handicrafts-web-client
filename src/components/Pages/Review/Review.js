
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://handicrafts-web-server.onrender.com/review')
            .then(res => res.json())
            .then((data) => setReviews(data))
    }, [])
    return (
        <div className="p-5">
            <h1>
                What <span className="heading">Our </span> Clients <span className="heading">Says</span>
            </h1>
            <Row xs={1} md={3} className=" gx-4 gy-5 m-2">
                {

                    reviews.map(review => <Reviews review={review}></Reviews>)
                }
            </Row>

        </div>
    );
};

export default Review;