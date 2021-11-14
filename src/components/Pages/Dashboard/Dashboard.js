import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './Dashboard.css'
const Dashboard = () => {
    const { admin } = useAuth();
    function clicked() {
        alert('Payment System comming Soon');
    }

    return (
        <div className="table-settings">
            <div className="mb-4 mt-4 p-5 w-75">
                <Row className="justify-content-between align-items-center">
                    <Col xs={9} lg={5}>
                        <ListGroup>
                            <ListGroup.Item action onClick={clicked}>Pay</ListGroup.Item>
                            <Link to="/myOrders">
                                <ListGroup.Item action >My Orders </ListGroup.Item>
                            </Link>
                            <Link to="/makeAdmin">
                                <ListGroup.Item action >Make Admin </ListGroup.Item>
                            </Link>
                            {admin && <div>
                                <Link to="/myorders">
                                    <ListGroup.Item action >Manage All Orders </ListGroup.Item>
                                </Link>
                                <Link to="/explore">
                                    <ListGroup.Item action >Manage Products </ListGroup.Item>
                                </Link>
                            </div>
                            }
                            <Link to="/addreview">
                                <ListGroup.Item action >Review </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Col>
                </Row>
            </div>


        </div>
    );
};

export default Dashboard;
