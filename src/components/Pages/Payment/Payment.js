import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <div style={{ height: '50vh' }}>
                <h2 style={{ textAlign: 'center' }}>PAYMENT GATEWAY UNDER CONSTRUCTION  </h2>
                <h2 style={{ textAlign: 'center' }}>STAY WITH US ... :)</h2>
                <NavLink to="/dashboard" ><Button>BACK TO DASHBOARD</Button></NavLink>
            </div>
        </div>
    );
};

export default Payment;