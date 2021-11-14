import { faStar, faStarHalf, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Review.css'
const Review = () => {

    return (
        <div className="p-5">
            <h1>
                Happy Clients says
            </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="review-card">
                        <div className="card h-100">
                            <div className="card-image">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </div>
                            <div className="card-body">
                                <p className="card-text">I'm a regular customer of this page and never found any bad produtcs.Good products at low prices.</p>
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
                                <p className="card-text">I buy some products from here for the first time.And each products quality is good.Delivery Man's behavior was good.</p>
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
                                <p className="card-text">I'm very satisfied with your products.Packaging was good and fast delivery.</p>

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
            </div>
        </div>
    );
};

export default Review;