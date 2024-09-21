import React from 'react'
import {
    Container,
    Row,
    Col,
   
  } from "react-bootstrap";
  import Header from '../Header.js';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
        <Outlet/>
        </Col>
      </Row>
    </Container>
  )
}

export default RootLayout