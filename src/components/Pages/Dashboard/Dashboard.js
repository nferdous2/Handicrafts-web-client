import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css'
const Dashboard = () => {
    const { logOut } = useAuth()


    return (
        <div className="table-settings">
            <div className="mb-4 mt-4 p-5 w-75">
                <Row className="justify-content-between align-items-center">
                    <Col xs={9} lg={5}>
                        <ListGroup>
                            <Link to="/payment">
                                <ListGroup.Item action >Pay </ListGroup.Item>
                            </Link>
                            <Link to="/myOrders">
                                <ListGroup.Item action >My Orders </ListGroup.Item>
                            </Link>
                            <Link to="/addreview">
                                <ListGroup.Item action to="/addreview">Review </ListGroup.Item>
                            </Link>
                            <Link to="/addProduct">
                                <ListGroup.Item action to="/addProduct">Add product </ListGroup.Item>
                            </Link>

                            <ListGroup.Item action onClick={logOut}>Log Out </ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            </div>


        </div>
    );
};

export default Dashboard;