import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='header'>
          <Navbar.Brand href="#home">Easy Restaurant</Navbar.Brand>
          <Nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
