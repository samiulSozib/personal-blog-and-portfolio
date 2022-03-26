import React, { Fragment, useState } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const LoginPageComponent = () => {


    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory()

    const Login=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:2000/auth/login',{
                username:username,
                password:password
            })
            .then((response)=>{
                console.log(response)
            })
            history.push('/')
        }catch(error){
            if(error.response){
                console.log(error)
            }
        }
    }
 

  return (
    <Fragment>
        <Container>
            <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>Admin Login</h1>
            <Row>
                <Col lg={6} md={8} sm={12} className='m-auto p-5 shadow-sm rounded-sm'>
                    <Form onSubmit={Login}>
                        <Form.Group className="mb-3">
                            <Form.Label className='formLabel'>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='formLabel'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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