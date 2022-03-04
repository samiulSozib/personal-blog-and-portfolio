import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SingleProjectComponent = () => {
  return (
    <Fragment>
      <Container className='mt-3'>
          <Row>
              <Col lg={8} md={8} sm={12}>
              <h1 className='homePageAllHeader'>project title</h1><hr />
              <Row>
                  <Col>
                  </Col>
              </Row>
              </Col>
              <Col lg={4} md={4} sm={12}>
                    <Container>
                        <h1 className='homePageAllHeader'>Recent Project</h1><hr />
                        <p className='homePageRecentProjectTitle'>* Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><br />
                        <p className='homePageRecentProjectTitle'>* Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><br />
                        <p className='homePageRecentProjectTitle'>* Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><br />
                    </Container>
              </Col>
          </Row>
      </Container>
    </Fragment>
  )
}

export default SingleProjectComponent