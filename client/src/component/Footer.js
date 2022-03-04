import React, { Fragment } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import '../assets/css/custom.css'
import '../assets/css/bootstrap.min.css'
import {faFacebook,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <Fragment>
        <Container fluid={true} className="mt-4">
            <Row>
                <Col lg={4} md={6} sm={12} className='p-5 text-justify'>
                    <h2 className='homePageAllHeader'>Follow Me</h2><hr />
                    <a className='socialLink' href=""><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br />
                    <a className='socialLink' href=""><FontAwesomeIcon icon={faGithub}/> GitHub</a><br />
                    <a className='socialLink' href=""><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                </Col>
                <Col lg={4} md={6} sm={12} className='p-5 text-justify'>
                    <h2 className='homePageAllHeader'>Address</h2><hr />
                    <p className='serviceDescription'>Jashore University of Science and Technology</p>
                    <p className='serviceDescription'><FontAwesomeIcon icon={faEnvelope}/> samiulcse2018@gmail.com</p>
                    <p className='serviceDescription'><FontAwesomeIcon icon={faPhone}/> +8801798778978</p>
                </Col>
                <Col lg={4} md={6} sm={12} className='p-5 text-justify'>
                    <h2 className='homePageAllHeader'>Legal</h2><hr />
                    <a className='footerLink' href="">Terms and Condition</a><br />
                    <a className='footerLink' href="">Privacy Policy</a>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="text-center copyRightSection">
            <a className='copyRightSectionText' href="">samiulbashar.com &copy; 2022-23</a>
        </Container>
    </Fragment>
  )
}

export default Footer