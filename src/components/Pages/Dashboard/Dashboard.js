import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    function clicked() {
        alert('Payment System comming Soon');
    }

    return (
        <div>
            <div className="table-settings mb-4">
                <Row className="justify-content-between align-items-center">
                    <Col xs={9} lg={3}>
                        <ListGroup>
                            <ListGroup.Item action onClick={clicked}>Pay</ListGroup.Item>
                            <Link to="/myOrders">
                                <ListGroup.Item action >My Orders </ListGroup.Item>
                            </Link>
                            <ListGroup.Item action>Review</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </div>


        </div>
    );
};

export default Dashboard;