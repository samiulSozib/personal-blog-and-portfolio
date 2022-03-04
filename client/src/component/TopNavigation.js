import React, { Fragment } from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import '../assets/css/custom.css'
import '../assets/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    const [navBarTitle,setNavBarTitle]=useState('navTitle')
    const [navBarBack,setNavBarBack]=useState('navBackground')
    const [navVarient,setNavVarient]=useState('dark')
    const [navBarItem,setNavBarItem]=useState('navItem')

    const onScroll=()=>{
        if(window.scrollY>100){
            setNavBarTitle('navTitleScroll')
            setNavBarBack('navBackgroundScroll')
            setNavBarItem('navItemScroll')
            setNavVarient('light')
        }
        else if(window.scrollY<100){
            setNavBarTitle('navTitle')
            setNavBarBack('navBackground')
            setNavBarItem('navItem')
            setNavVarient('dark')
        }
    }

    window.addEventListener('scroll',onScroll)

  return (
    <Fragment>
        <Navbar className={navBarBack} fixed='top' collapseOnSelect expand="lg" variant={navVarient}>
                    <Container>
                    <Navbar.Brand className={navBarTitle}>Samiul Bashar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        </Nav>
                        <Nav>
                        {/* <Nav.Link className={navBarItem}>Home</Nav.Link>
                        <Nav.Link className={navBarItem}>All Posts</Nav.Link>
                        <Nav.Link className={navBarItem}>Node-JS</Nav.Link>
                        <Nav.Link className={navBarItem}>Javascript</Nav.Link>
                        <Nav.Link className={navBarItem}>Project</Nav.Link>
                        <Nav.Link className={navBarItem}>About</Nav.Link> */}
                        <Nav.Link><NavLink className={navBarItem} to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={navBarItem} to="/all-posts">All Post</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={navBarItem} to="/">Node-Js</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={navBarItem} to="/">Javascript</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={navBarItem} to="/all-projects">All Project</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={navBarItem} to="/about">About</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
    </Fragment>
  )
}

export default TopNavigation