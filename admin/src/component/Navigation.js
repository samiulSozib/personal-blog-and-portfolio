import React, { Fragment } from 'react'
import {Container,Navbar,NavDropdown,Nav,FormControl,Form,Button} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Fragment>
        <Navbar className='navBack' expand="lg" fixed='top'>
        <Container>
            <Navbar.Brand href="#" className='navTitle'>Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                
            </Nav>
            <Nav.Link href="/" className='navItem'>Home</Nav.Link>
                
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </Fragment>
  )
}

export default Navigation