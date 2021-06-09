import React from "react";
import {Navbar, Container, Nav, Card, Row, Col} from "react-bootstrap";
import {
    Link,
} from "react-router-dom";

export default function Home () {
    return (
        <div className="d-flex flex-column vh-100 bg-light">
            <Navbar variant="light" bg="light" className="shadow">
                <Container>
                    <Navbar.Brand>
                        <h5 className="fw-bold px-3 pb-2 pt-1 bg-primary text-white rounded-sm">Rhn:Quiz Web Application</h5>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="https://web.facebook.com/profile.php?id=100014762419049">Facebook</Nav.Link>
                        <Nav.Link href="#features">GitHub</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="vh-100">
                <Row className="justify-content-center align-items-center py-4">
                    <Col md="6" >
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src="/Gambar.jpg" 
                                className="mx-auto py-4"
                                style={{width: "200px"}} 
                            />
                            <Card.Body className="text-center">
                                <Card.Title>Quiz Web Application</Card.Title>
                                <Card.Text>
                                    Create using the javascript language and use the react framework.
                                </Card.Text>
                                <Link to="/quiz" className="btn btn-primary">Getting Started !!</Link>
                            </Card.Body>
                            <Card.Footer className="text-sm text-center">
                                &copy; Copyright 2021,Created with <i className="bi bi-heart-fill text-danger"></i> by Raihan Adi Nugroho
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}