import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../../Pages/Service/Service';
import './Services.css';
const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://spooky-beast-33270.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    return (
        <Container className="my-5" id="services">
            <h1 className="section-title">Featured places to stay</h1>
            <p className="section-title-des">
                Popular places to stay that Chisfis recommends for you
            </p>
            <span className="line"></span>

            <Row xs={1} md={2} lg={3} className="g-4">
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </Row>
        </Container>
    );
};

export default Services;
