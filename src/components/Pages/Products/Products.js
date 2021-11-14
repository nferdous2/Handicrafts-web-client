import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://fast-chamber-11448.herokuapp.com/products')
            .then(res => res.json())
            .then((data) => {
                setproducts(data.slice(0, 6))
            });
    }, [])
    return (
        <div id="Products">
            <h2 className="mt-5 text-center">Our Products</h2>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;