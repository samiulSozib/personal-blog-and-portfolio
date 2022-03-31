import React, { Fragment, useState,useEffect } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'

const AboutComponent = () => {

    
  const [title,setTitle]=useState('')
  const [name,setName]=useState('')
  const [basic_description,setBasic_description]=useState('')
  const [facebook_link,setFacebook_link]=useState('')
  const [github_link,setGithub_link]=useState('')
  const [linkedin_link,setLinkedin_link]=useState('')
  const [location,setLocation]=useState('')
  const [email_address,setEmail_address]=useState('')
  const [copy_right,setCopy_right]=useState('')
  const [description,setDescription]=useState('')
  const [education,setEducation]=useState('')

  const history=useHistory()
  const [token,setToken]=useState('')
  const [expire,setExpire]=useState('')
  useEffect(() => {
    refreshToken();
    getAbout()
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

  const getAbout=async()=>{
      try{
        const response=await axiosJWT.get('http://localhost:2000/about',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)
            setTitle(response.data.title)
            setName(response.data.name)
            setBasic_description(response.data.basic_description)
            setFacebook_link(response.data.facebook_link)
            setGithub_link(response.data.github_link)
            setLinkedin_link(response.data.linkedin_link)
            setLocation(response.data.location)
            setEmail_address(response.data.email_address)
            setCopy_right(response.data.copy_right)
            setDescription(response.data.description)
            setEducation(response.data.education)
        
      }catch(error){
          if(error.response){
              console.log(error)
          }
      }
  }

  const UpdateAbout=async(e)=>{
    e.preventDefault();
    try{
      const formData=new FormData()
      formData.append('title',title)
      formData.append('name',name)
      formData.append('basic_description',basic_description)
      formData.append('facebook_link',facebook_link)
      formData.append('github_link',github_link)
      formData.append('linkedin_link',linkedin_link)
      formData.append('location',location)
      formData.append('email_address',email_address)
      formData.append('copy_right',copy_right)
      formData.append('description',description)
      formData.append('education',education)
    

      // const config={
      //   Headers:{
      //     'Content-type':'multipart/form-data'
      //   }
      // }

      await axiosJWT.post('http://localhost:2000/about/create',formData,{
        headers:{
          'Content-type':'multipart/form-data',
          Authorization:`Bearer ${token}`
        }
      })
      .then((response)=>{
        alert('Upload success')
      })
      .catch((error)=>{
        console.log(error)
      })
      history.push('/')
      //console.log(formData)
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
          <h1>Update About</h1>
          <Col>
            <Form onSubmit={UpdateAbout}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Basic Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Basic Description" value={basic_description} onChange={(e)=>setBasic_description(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Facebook Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Facebook Link" value={facebook_link} onChange={(e)=>setFacebook_link(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>GitHub Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter GitHub Link" value={github_link} onChange={(e)=>setGithub_link(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>LinkedIn Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter LinkedIn Link" value={linkedin_link} onChange={(e)=>setLinkedin_link(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter Email Address" value={email_address} onChange={(e)=>setEmail_address(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Copy Right</Form.Label>
                    <Form.Control type="text" placeholder="Enter Copy Right" value={copy_right} onChange={(e)=>setCopy_right(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Education</Form.Label>
                    <Form.Control type="text" placeholder="Enter Education" value={education} onChange={(e)=>setEducation(e.target.value)}/>
                  </Form.Group>
                  

                  <Button variant="primary" type="submit" className='mb-5'>
                    Update
                  </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default AboutComponent