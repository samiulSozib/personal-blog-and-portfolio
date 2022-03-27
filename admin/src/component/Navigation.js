import React, { Fragment } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'

const Navigation = () => {
  const history=useHistory()
    



    const Logout=async()=>{
        try{
            await axios.delete('http://localhost:2000/auth/logout')
            history.push('/login')
        }catch(err){
            if(err.response){
                console.log(err)
            }
        }
    }
  return (
    <Fragment>
        <Navbar className='navBack' expand="lg" fixed='top'>
        <Container>
            <Navbar.Brand href="/" className='navTitle'>Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                
            </Nav>
            <Nav.Link><NavLink className='navItem' to="" onClick={Logout}>Logout</NavLink></Nav.Link>
            <Nav.Link href="/" className='navItem'>Home</Nav.Link>
                
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </Fragment>
  )
}

export default Navigation