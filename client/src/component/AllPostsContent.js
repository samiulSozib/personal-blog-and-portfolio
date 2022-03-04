import React, { Fragment } from 'react'
import {Col, Container, Row,Card,Button} from 'react-bootstrap'
import '../assets/css/custom.css'
import '../assets/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const AllPostsContent = () => {
  return (
    <Fragment>
        <Container className='mt-3'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className='homePageAllHeader'>All POSTS</h1><hr />
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className='homePageCard'>
                                <Card.Img className='homePageCardImage' variant="top" src="https://thumbs.dreamstime.com/b/office-life-concepts-person-drinking-coffee-using-computer-laptop-window-view-135173696.jpg" />
                                <Card.Body>
                                    <h4 className='homePageCardTitle'> Some quick example text to build on the card title and make up the bulk of
                                    the card's content</h4>
                                    <p className='homePageCardAutherAndTags'>Md. Samiul Bashar | 22-02-2020</p>
                                    <p className='homePageCardAutherAndTags'>NodeJs, Express</p>
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Link to="/all-posts/1">
                                    <Button variant="primary">Read More</Button>
                                    </Link>
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
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Button variant="primary">Go somewhere</Button>
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
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Button variant="primary">Go somewhere</Button>
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
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Button variant="primary">Go somewhere</Button>
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
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Button variant="primary">Go somewhere</Button>
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
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Button variant="primary">Go somewhere</Button>
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
                                    <hr />
                                    <h6 className='homePageCardSubTitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus, facilis distinctio perferendis ducimus unde quaerat ullam quis aut alias mollitia at, quos provident odit maiores earum repellat esse reprehenderit.
                                    </h6>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default AllPostsContent