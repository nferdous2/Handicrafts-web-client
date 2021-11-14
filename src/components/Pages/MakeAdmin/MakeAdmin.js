import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState((false));
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdmin = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setDone(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <Form onSubmit={handleAdmin} className=" m-auto p-5">
                <h4>Make An Admin </h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="w-25 m-auto p-3" type="email" placeholder="Enter email" onBlur={handleOnBlur} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
            {done && <Alert severity="success">Maked Admin successfully!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;