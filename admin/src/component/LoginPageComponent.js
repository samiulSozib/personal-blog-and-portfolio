import React, { Fragment } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'

const LoginPageComponent = () => {
  return (
    <Fragment>
        <Container>
            <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>Admin Login</h1>
            <Row>
                <Col lg={6} md={8} sm={12} className='m-auto p-5 shadow-sm rounded-sm'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='formLabel'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='formLabel'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="success btn-block" type="submit" className='formLabel'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default LoginPageComponent