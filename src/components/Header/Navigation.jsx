import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import './Header.css'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='header'>
          <Navbar.Brand href="#home">Easy Restaurant</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
