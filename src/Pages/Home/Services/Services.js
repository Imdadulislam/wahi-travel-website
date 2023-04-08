import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://wahi-travel-server.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="py-5" style={{ background: '#e9f2fa' }}>
            <Container>
                <h2>Services We Provide</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service =>
                            <Service
                                key={service._id} service={service}
                            ></Service>

                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;