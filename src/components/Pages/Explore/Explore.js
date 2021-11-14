import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://fast-chamber-11448.herokuapp.com/products')
            .then(res => res.json())
            .then((data) => {
                setproducts(data.slice(0, 10))
            });
    }, [])
    return (
        <div>
            <h2 className=" mt-5 text-center">Explore Products</h2>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default Explore;