import React, { Fragment } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'

const CreateCategoryComponent = () => {
  return (
    <Fragment>
        <Container className='mt-5'>
            <Row>
                <h1>Create Category</h1>
                <Col lg={8} md={6} sm={12} className="m-auto">
                <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Title" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='mb-5'>
                    Submit
                  </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default CreateCategoryComponent