import React from 'react';
import { Container, Col, Navbar, Button } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="d-flex justify-content-center">
      <Container>
        <Col xs={12}>{/* <Button variant="outline-info">Go Top</Button> */}</Col>
        <Col>
          <Navbar.Brand href="#home">Incli</Navbar.Brand>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
