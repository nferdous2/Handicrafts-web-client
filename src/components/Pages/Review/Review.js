// import { faStar, faStarHalf, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://fast-chamber-11448.herokuapp.com/review')
            .then(res => res.json())
            .then((data) => setReviews(data))
    }, [])
    return (
        <div className="p-5">
            <h1>
                Happy Clients says
            </h1>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {
                    reviews.map(review => <Reviews review={review}></Reviews>)
                }
            </Row>
            {/* <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="review-card">
                        <div className="card h-100">
                            <div className="card-image">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </div>
                            <div className="card-body">
                                <p className="card-text">I'm a regular customer of this page and never found any bad produtcs.Good reviews at low prices.</p>
                            </div>
                            <div className="stars">
                                <div>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Alex</h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="review-card">
                        <div className="card h-100">
                            <div className="card-image">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </div>
                            <div className="card-body">
                                <p className="card-text">I buy some reviews from here for the first time.And each reviews quality is good.Delivery Man's behavior was good.</p>
                            </div>
                            <div className="stars">
                                <div>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStarHalf}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Devin</h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="review-card">
                        <div className="card h-100">
                            <div className="card-image">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </div>
                            <div className="card-body">
                                <p className="card-text">I'm very satisfied with your reviews.Packaging was good and fast delivery.</p>

                            </div>
                            <div className="stars">
                                <div>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="filled" icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>Das</h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Review;