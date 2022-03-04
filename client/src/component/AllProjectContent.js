import React, { Fragment } from 'react'
import '../assets/css/custom.css'
import '../assets/css/bootstrap.min.css'
import { Col, Container, Row,Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllProjectContent = () => {
  return (
    <Fragment>
        <Container className='mt-3'>
        <h1 className='homePageAllHeader'>All PROJECT</h1><hr />
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className='homePageCard'>
                        <Card.Img className='homePageCardImage' variant="top" src="https://thumbs.dreamstime.com/b/office-life-concepts-person-drinking-coffee-using-computer-laptop-window-view-135173696.jpg" />
                        <Card.Body>
                            <Link className='projectTitle' to="/all-projects/1"><h4 className='homePageCardTitle'> Some quick example text to build on the card title and make up the bulk of
                            the card's content</h4></Link>
                            <p className='homePageCardAutherAndTags'>Md. Samiul Bashar | 22-02-2020</p>
                            <p className='homePageCardAutherAndTags'>NodeJs, Express</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='homePageCard'>
                        <Card.Img className='homePageCardImage' variant="top" src="https://thumbs.dreamstime.com/b/office-life-concepts-person-drinking-coffee-using-computer-laptop-window-view-135173696.jpg" />
                        <Card.Body>
                            <h4 className='homePageCardTitle'> Some quick example text to build on the card title and make up the bulk of
                            the card's content</h4>
                            <p className='homePageCardAutherAndTags'>Md. Samiul Bashar | 22-02-2020</p>
                            <p className='homePageCardAutherAndTags'>NodeJs, Express</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='homePageCard'>
                        <Card.Img className='homePageCardImage' variant="top" src="https://thumbs.dreamstime.com/b/office-life-concepts-person-drinking-coffee-using-computer-laptop-window-view-135173696.jpg" />
                        <Card.Body>
                            <h4 className='homePageCardTitle'> Some quick example text to build on the card title and make up the bulk of
                            the card's content</h4>
                            <p className='homePageCardAutherAndTags'>Md. Samiul Bashar | 22-02-2020</p>
                            <p className='homePageCardAutherAndTags'>NodeJs, Express</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='homePageCard'>
                        <Card.Img className='homePageCardImage' variant="top" src="https://thumbs.dreamstime.com/b/office-life-concepts-person-drinking-coffee-using-computer-laptop-window-view-135173696.jpg" />
                        <Card.Body>
                            <h4 className='homePageCardTitle'> Some quick example text to build on the card title and make up the bulk of
                            the card's content</h4>
                            <p className='homePageCardAutherAndTags'>Md. Samiul Bashar | 22-02-2020</p>
                            <p className='homePageCardAutherAndTags'>NodeJs, Express</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='homePageCard'>
                        <Card.Img className='homePageCardImage' variant="top" src="https://thumbs.dreamstime.com/b/office-life-concepts-person-drinking-coffee-using-computer-laptop-window-view-135173696.jpg" />
                        <Card.Body>
                            <h4 className='homePageCardTitle'> Some quick example text to build on the card title and make up the bulk of
                            the card's content</h4>
                            <p className='homePageCardAutherAndTags'>Md. Samiul Bashar | 22-02-2020</p>
                            <p className='homePageCardAutherAndTags'>NodeJs, Express</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default AllProjectContent