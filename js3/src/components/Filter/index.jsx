import React from "react";
import { Container, Col, FloatingLabel, Form,  Navbar, Row } from "react-bootstrap";

const Filter = (props) => {

    return (
        <Navbar bg="light" expand="sm">
        <Container>
        <Row>
            <Col sm>
                <h4>Filtros:</h4>
            </Col>
            <Col sm>
                <FloatingLabel controlId="floatingInputGrid" label="Data Início">
                    <Form.Control type="date" />
                </FloatingLabel>
            </Col>

            <Col sm>
                <FloatingLabel controlId="floatingInputGrid" label="Data Fim">
                    <Form.Control type="date" />
                </FloatingLabel>
            </Col>

        </Row>

        </Container>
        </Navbar>
    );
} 

export default Filter;