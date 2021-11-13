import React from 'react';
import { Card } from 'react-bootstrap';
import './Login.css'
import loginImg from '../../Shared/Images/login.png'
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { handleEmailChange, handlePasswordChange, loginHandle } = useAuth()
    return (
        <div>

            <Card style={{ width: '23rem' }} className="login-page mb-5 mt-5">
                <Card.Img variant="top" style={{ height: '15rem' }} src={loginImg} />
                <Card.Body className="login-body">

                    <Card.Text >
                        <h2 className="text-center mb-2">Please Log in</h2>

                        <form onSubmit={loginHandle}>
                            <input
                                onChange={handleEmailChange}
                                className="form-control mb-4 p-2"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onChange={handlePasswordChange}
                                className="form-control mb-4 p-2"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <input
                                className="login-btn"
                                type="submit"
                                value="Login"
                            />
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;