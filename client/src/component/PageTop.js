import React, { Fragment } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import '../assets/css/custom.css'
import '../assets/css/bootstrap.min.css'

const PageTop = (props) => {
  return (
    <Fragment>
        <Container fluid={true} className="pageTopFixedBanner p-0">
            <div className='pageTopBannerOverlay'>
                <Container className='pageTopContant'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='topTitle'>{props.pageTitle}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </Fragment>
  )
}

export default PageTop