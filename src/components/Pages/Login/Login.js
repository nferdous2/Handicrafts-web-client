import React, { useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import './Login.css'
import loginImg from '../../Shared/Images/login.png'
import useAuth from '../../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const { user, loginHandle } = useAuth()
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const handleSubmit = e => {
        loginHandle(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <div>

            <Card style={{ width: '23rem' }} className="login-page mb-5 mt-5">
                <Card.Img variant="top" style={{ height: '15rem' }} src={loginImg} />
                <Card.Body className="login-body">

                    <Card.Text >
                        <h2 className="text-center mb-2">Please Log in</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                className="form-control mb-4 p-2"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onChange={handleChange}
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
                            {user?.email &&
                                <Alert severity="success">Logged In successfully!</Alert>
                            }

                        </form>
                        <p className="text-white">Are You New User? </p>
                        <Link to="/register">
                            <input
                                className="login-btn w-50 text-white"
                                value="Registration Page >>"
                            />                            </Link>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
