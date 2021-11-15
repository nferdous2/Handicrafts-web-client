import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Admin.css'
const Admin = () => {
    const { admin, logOut, user } = useAuth();
    return (
        <div className="table-settings">
            <div className="mb-4 mt-4 p-5 w-75">
                <Row className="justify-content-between align-items-center">
                    <Col xs={9} lg={5}>
                        <ListGroup>
                            <Link to="/myOrders">
                                <ListGroup.Item action >Manage All Orders </ListGroup.Item>
                            </Link>
                            <Link to="/addProduct">
                                <ListGroup.Item action >Add Product </ListGroup.Item>
                            </Link>

                            {user?.admin ?
                                <Link to="/makeAdmin">
                                    <ListGroup.Item action >Make Admin </ListGroup.Item>
                                </Link>
                                :
                                <p>You are not an admin</p>
                            }
                            <ListGroup.Item action onClick={logOut}>Log Out </ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            </div>


        </div>
    );
};

export default Admin;