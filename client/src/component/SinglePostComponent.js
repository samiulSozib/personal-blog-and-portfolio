import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SinglePostComponent = () => {
  return (
    <Fragment>
      <Container className='mt-3'>
          <Row>
              <Col lg={8} md={8} sm={12}>
              <h1 className='homePageAllHeader'>post title</h1><hr />
              </Col>
              <Col lg={4} md={4} sm={12}>
              <Container>
                        <h1 className='homePageAllHeader'>CATEGORIES</h1><hr />
                        <h5 className='categories'>Node Js</h5>
                        <h5 className='categories'>Javascript</h5>
                        <h5 className='categories'>Express</h5>
                        <h5 className='categories'>Basic Programming</h5>
                    </Container>
                    <hr />
                    <Container>
                        <h1 className='homePageAllHeader mt-5'>RELATED POSTS</h1><hr />
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

export default SinglePostComponent
