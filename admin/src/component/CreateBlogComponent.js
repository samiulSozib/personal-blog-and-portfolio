import React, { Fragment } from 'react'
import { Col, Container, Row,Form,Button,FloatingLabel } from 'react-bootstrap'

const CreateBlogComponent = () => {
  return (
    <Fragment>
      <Container className='mt-5'>
        <Row>
          <h1>Create Blog</h1>
          <Col>
            <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Title" />
                  </Form.Group>

                  <Form.Select aria-label="Default select example" className='mb-3'>
                  <option>Category</option>
                  <option value="1">Express</option>
                  <option value="2">Javascript</option>
                  <option value="3">Node JS</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className='mb-3'>
                  <option>Category</option>
                  <option value="1">Express</option>
                  <option value="2">Javascript</option>
                  <option value="3">Node JS</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className='mb-3'>
                  <option>Category</option>
                  <option value="1">Express</option>
                  <option value="2">Javascript</option>
                  <option value="3">Node JS</option>
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Blog Description</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" className='mb-3'>
                      <Form.Control
                        as="textarea"
                        style={{ height: '200px' }}
                      />
                    </FloatingLabel>
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

export default CreateBlogComponent