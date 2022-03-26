import React, { Fragment } from 'react'
import { Col, Container, Row,Nav, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DashBoardCompenentt = () => {
  return (
    <Fragment>
        <Container className='mt-5'>
            <Row>
                <hr />
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            <Card.Text className='dashBoardCardDesc'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            <Card.Text className='dashBoardCardDesc'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            <Card.Text className='dashBoardCardDesc'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            <Card.Text className='dashBoardCardDesc'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            <Card.Text className='dashBoardCardDesc'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default DashBoardCompenentt