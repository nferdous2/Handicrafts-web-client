import React from 'react';
import { Card } from 'react-bootstrap';
import bannerImg from '../../Shared/Images/banners.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Card className="banner bg-dark mt-2">
                <Card.Img src={bannerImg} alt="Card image" />
            </Card>
        </div>
    );
};

export default Banner;