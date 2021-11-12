import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import loginImg from '../../Shared/Images/login.png'
const Login = () => {
    return (
        <div>
            <Card style={{ width: '23rem' }} className="login-page mb-5 mt-5">
                <Card.Img variant="top" style={{ height: '15rem' }} src={loginImg} />
                <Card.Body className="login-body">
                    <Card.Text>
                        <h2 className="text-center">Please Log in</h2>

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4 p-2">
                            <input type="email" id="form3Example3" className="form-control" />
                            <label className="form-label" for="form3Example3">Email address</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4 p-2">
                            <input type="password" id="form3Example4" className="form-control" />
                            <label className="form-label" for="form3Example4">Password</label>
                        </div>
                    </Card.Text>
                    <Link to="/home">
                        <Button variant="primary" className="login-btn">Login</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;