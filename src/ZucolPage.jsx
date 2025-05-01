// ZucolPage.js
import React from 'react';
import { Container, Row, Col, Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

const ZucolPage = () => {
    return (
        <>

            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">ZUCOL</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Our Experience</Nav.Link>
                            <Nav.Link href="#">Services</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <div style={{ background: 'linear-gradient(to right, #0d6efd, #007bff)', color: 'white', padding: '40px 0' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1>OUTSOURCING <span style={{ fontWeight: 'normal' }}>Services</span></h1>
                            <p>
                                We are an agency that believe in the power of digital to transform your business.
                                Whether it be a new website, marketing
                            </p>
                            <div className="d-flex gap-3 mt-3">
                                <Button variant="light" className="text-primary">Contact Us</Button>
                                <Button variant="outline-light">Join Us</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img
                                src="https://via.placeholder.com/600x300" // Replace with actual collage/image
                                alt="Digital Outsourcing"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="py-4 text-center">
                <h5 className="text-primary">Services Offered in :</h5>
                <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
                    {[
                        { flag: "🇬🇧", country: "UK" },
                        { flag: "🇦🇺", country: "Australia" },
                        { flag: "🇦🇪", country: "Dubai" },
                        { flag: "🇻🇳", country: "Vietnam" },
                        { flag: "🇦🇪", country: "UAE" },
                        { flag: "🇸🇬", country: "Singapore" },
                    ].map(({ flag, country }, index) => (
                        <div key={index} className="d-flex align-items-center gap-2">
                            <span style={{ fontSize: '1.5rem' }}>{flag}</span>
                            <span>{country}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ZucolPage;
