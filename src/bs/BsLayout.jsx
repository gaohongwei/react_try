import React, {Fragment} from "react"
import {Container, Row, Col} from 'react-bootstrap';

// import BsLayout from './BsLayout'
const BsLayout = (props) => {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default BsLayout;