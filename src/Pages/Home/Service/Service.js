import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, image,price } = service;
    return (
        <div>
            <Col>
                <Card className="p-2" >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title><i className="fas fa-map-marker-alt fs-4 text-secondary"></i>  {name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <h3>Price: ${price}</h3>
                        <Link to={`/details/${_id}`}>
                            <Button className="px-5 text-decoration-none " variant="info">Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;