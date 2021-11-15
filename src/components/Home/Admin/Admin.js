import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Admin = () => {
    const { admin } = useAuth();
    return (
        <div>
            <div className="row">
                <div className="col-md-6">

                    <Link to="/makeAdmin">
                        <p>Make An Admin</p>
                    </Link>

                    <Link to="/myOrders">
                        <p> Manage All Orders</p>
                    </Link>

                </div>
                <div className="col-md-6">
                    <div className="side">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;