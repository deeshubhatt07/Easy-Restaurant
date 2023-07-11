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
            <Link className='headerLinks' to='/'>Home</Link>
            <Link className='headerLinks' to='/about'>About</Link>
            <Link className='headerLinks' to='/contact'>Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
