import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then((data) => {
                setServices(data.slice(0, 6))
            });
    }, [])

    return (
        <div>
            <h2 className="service-text mt-5 text-center">Our Products</h2>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;