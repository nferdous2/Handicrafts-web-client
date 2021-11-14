import React, { useEffect, useState } from "react";
const MyOrders = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((result) => setProduct(result));
    }, []);
    //DELETE A product
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                mathod: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Sucessfully');
                        const remainingProducts = product.filter(user => user._id !== id);
                        setProduct(remainingProducts);
                    }
                })
        }
    }
    console.log(product)

    return (
        <div>
            <div className="allproducts d-flex justify-content-center align-items-center">
                <div className="row">
                    {product?.map((pd) => (
                        <div className="col-md-6 ">
                            <div className="product border border p-2 m-2">
                                <h1>{pd.name}</h1>
                                <h6>{pd.price}</h6>
                                <h6>{pd.description}</h6>
                                <button onClick={handleDelete} className="btn btn-danger p-1 m-2">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;