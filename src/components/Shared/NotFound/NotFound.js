import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notfound from '../Images/AW3876169_01.gif'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '50%' }} src={notfound} alt="" />
            <br />
            <div>
                <Link to="/"><button className=" go-back mb-5">Go Back</button>
                </Link>
            </div>
        </div >

    );
};

export default NotFound;