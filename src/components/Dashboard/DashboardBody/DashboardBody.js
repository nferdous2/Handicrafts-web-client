import React from 'react';
import DashboardHome from '../DashboardHome/DashboardHome';
import './DashboardBody.css'
const DashboardBody = () => {
    return (
        <div className='dash-container'>
            {/* dashboard items */}
            <DashboardHome />
        </div>
    );
};

export default DashboardBody;
