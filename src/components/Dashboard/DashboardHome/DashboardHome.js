import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AddReview from '../../Home/AddReview/AddReview';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import MyOrders from '../../Pages/MyOrders/MyOrders';
import Payment from '../../Pages/Payment/Payment';
import Dashboard from '../Dashboard/Dashboard';
const DashboardHome = () => {
    return (
        <div class="container-dash">
            <Tab.Container id="left-tabs-example" defaultActiveKey="dash">
                <Row>
                    <Col sm={3}>
                        <Nav className="dash-nav flex-column">
                            <Nav.Item>
                                <Nav.Link className="dash-Items text-white p-3" eventKey="dash">DashBoard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items text-white p-3" eventKey="addProduct">Add a Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items text-white p-3" eventKey="myOrders">Manage Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items text-white p-3" eventKey="addReview">Add Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items text-white p-3" eventKey="payment">Payment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <h2 class="text-center text-black">
                            <span className='heading'>Dash</span>Board</h2>
                        <Tab.Content>
                            <Tab.Pane eventKey="dash">
                                <Dashboard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="addProduct">
                                <AddProduct />
                            </Tab.Pane>
                            <Tab.Pane eventKey="myOrders">
                                <MyOrders />
                            </Tab.Pane>
                            <Tab.Pane eventKey="addReview">
                                <AddReview />
                            </Tab.Pane>
                            <Tab.Pane eventKey="payment">
                                <Payment />
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    );
};

export default DashboardHome;