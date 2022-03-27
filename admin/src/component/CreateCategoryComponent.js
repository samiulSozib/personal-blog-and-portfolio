import React, { Fragment, useState,useEffect } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'

const CreateCategoryComponent = () => {

    const [category,setCategory]=useState('')
    const history=useHistory()
    const [token,setToken]=useState('')
    const [expire,setExpire]=useState('')
  useEffect(() => {
    refreshToken();
  }, [])

  const refreshToken=async(e)=>{
    try{
        const response=await axios.get('http://localhost:2000/token')
        console.log(response)
        if(response.data.access_token){
            console.log(response.data)
        }else{
          console.log('no response')
          history.push('/login')
        }
    }catch(e){
        if(e.response){
            console.log(e)
            history.push('/login')
        }
    }
}

  const axiosJWT=axios.create();
  axiosJWT.interceptors.request.use(async (config)=>{
    const currentData=new Date()
        if(expire*1000<currentData.getTime()){
            const response=await axios.get('http://localhost:2000/token')
            config.headers.Authorization=`Bearer ${response.data.access_token}`
            setToken(response.data.access_token)
            const decode=json_decode(response.data.access_token)
            setExpire(decode.exp)
        }
        //console.log(config)
        return config
  },(error)=>{
    return Promise.reject(error)
  })

  const CreateCategory=async(e)=>{
    e.preventDefault();
    try{
      await axiosJWT.post('http://localhost:2000/categories/create',{
        name:category
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
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
        <Container className='mt-5'>
            <Row>
                <h1>Create Category</h1>
                <Col lg={8} md={6} sm={12} className="m-auto">
                <Form onSubmit={CreateCategory}>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category Name" value={category} onChange={(e)=>setCategory(e.target.value)}/>
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