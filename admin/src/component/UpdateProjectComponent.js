import React, { Fragment, useState,useEffect } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'
import { useLocation } from 'react-router-dom'

const UpdateProjectComponent = (props) => {

    const location=useLocation()
    const id=location.state.id


    const [title,setTitle]=useState('')
    const [features,setFeatures]=useState('')
    const [developer,setDeveloper]=useState('')
    const [live_demo,setLive_demo]=useState('')
    const [githubLink,setGithubLink]=useState('')
    const [description,setDescription]=useState('')
    const [type,setType]=useState('')
    const history=useHistory()
    const [token,setToken]=useState('')
    const [expire,setExpire]=useState('')

    useEffect(() => {
        refreshToken();
        singleProject();
      })
    
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

      const singleProject=async()=>{
        try{
            const response=await axiosJWT.get('http://localhost:2000/projects/'+id,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)
            setTitle(response.data.title)
            setFeatures(response.data.features)
            setDeveloper(response.data.developer)
            setLive_demo(response.data.live_demo)
            setGithubLink(response.data.githubLink)
            setDescription(response.data.description)
            setType(response.data.type)
        }catch(error){
            if(error.response){
                console.log(error)
            }
        }
      }

      const UpdateProject=async(e)=>{
        e.preventDefault();
        try{
            const formData=new FormData()
            formData.append('title',title)
            formData.append('features',features)
            formData.append('developer',developer)
            formData.append('live_demo',live_demo)
            formData.append('githubLink',githubLink)
            formData.append('description',description)
            formData.append('type',type)

        await axiosJWT.put('http://localhost:2000/projects/update-project/'+id,{
          title:title,
          features:features,
          developer:developer,
          live_demo:live_demo,
          githubLink:githubLink,
          description:description,
          type:type
        },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then((response)=>{
        alert('Update success')
      })
      .catch((error)=>{
        console.log(error)
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
          <h1>Update Project</h1>
          <Col>
            <Form onSubmit={UpdateProject}>
                  <Form.Group className="mb-3">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                  </Form.Group>

                  
                  <Form.Group className="mb-3">
                    <Form.Label>Project Feature</Form.Label>
                    <Editor
                      textareaName='features'
                      initialValue={features}
                      init={{
                          height: 200,
                          menubar: false,
                          
                          plugins:["advlist lists link autolink autosave code",
                            'preview','searchreplace','wordcount','media table emoticons image imagetools'],
                          toolbar: 'bold italic underline | alignleft alignright aligncenter alignjustify | bullist numlist outdent indent | link image media | forecolor backcolor emoticons | code preview',
    
                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                          
                      }}
                      value={features}
                      onEditorChange={(newText) => setFeatures(newText)}
                  ></Editor>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Developer</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Developer" value={developer} onChange={(e)=>setDeveloper(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Live Demo</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Live Demo" value={live_demo} onChange={(e)=>setLive_demo(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>GitHub Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Live Demo" value={githubLink} onChange={(e)=>setGithubLink(e.target.value)}/>
                  </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Project Description</Form.Label>
                    <Editor
                      textareaName='description'
                      initialValue={description}
                      init={{
                          height: 350,
                          menubar: false,
                          
                          plugins:["advlist lists link autolink autosave code",
                            'preview','searchreplace','wordcount','media table emoticons image imagetools'],
                          toolbar: 'bold italic underline | alignleft alignright aligncenter alignjustify | bullist numlist outdent indent | link image media | forecolor backcolor emoticons | code preview',
    
                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                          automatic_uploads:true,
                          file_picker_types: "file image media",
                          images_upload_url:'http://localhost:2000/uploads/blog-image',
                          relative_urls: false,
                          images_upload_handler:function(blobInfo,success,failure){
                            let headers=new Headers()
                            headers.append('Accept','Application/JSON')

                            let formData=new FormData()
                            formData.append('blogImage',blobInfo.blob())

                            let req=new Request('http://localhost:2000/uploads/blog-image',{
                              method:'POST',
                              headers,
                              mode:'cors',
                              body:formData
                            })
                            console.log(req)

                            fetch(req)
                              .then(res=>res.json())
                              .then(data=>success(data.imageUrl))
                              .catch((error)=>failure('HTTP ERROR '+error))
                          }
                      }}
                      value={description}
                      onEditorChange={(newText) => setDescription(newText)}
                  ></Editor>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Project Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter Project Title" value={type} onChange={(e)=>setType(e.target.value)}/>
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

export default UpdateProjectComponent