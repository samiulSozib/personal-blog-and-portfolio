import React, { Fragment } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import '../assets/css/custom.css'
import '../assets/css/bootstrap.min.css'

const TopBanner = () => {
  return (
    <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
            <div className='topBannerOverlay'>
                <Container className='topContant'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='topTitle'>Md. Samiul Bashar</h1>
                            <p className='topSubTitle'>Mobile and Web Application Developer</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </Fragment>
  )
}

export default TopBanner
