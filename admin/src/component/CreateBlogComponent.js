import React, { Fragment, useState,useEffect } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

const CreateBlogComponent = () => {

  const [description,setDescription]=useState('')
  const [title,setTitle]=useState('')
  const [thumbnail_image,setThumbnail_image]=useState(null)
  const [author,setAuthor]=useState('')
  const history=useHistory()
  const [token,setToken]=useState('')
  const [expire,setExpire]=useState('')
  const [options,setOptions]=useState([])

  //
  const [value, setCategory] = useState('')

  const  handleOnchange  =  val  => {
    setCategory(val)
  }



  useEffect(() => {
    refreshToken();
    getCategories()
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

  
  const getCategories=async()=>{
    try{
      let categories=await axiosJWT.get('http://localhost:2000/categories',{
        headers:{Authorization:`Bearer ${token}`}
      })
      console.log(categories)
      let temp_array=[]
      let temp_object={}
      for(let i=0;i<categories.data.length;i++){
        temp_object['label']=categories.data[i].name
        temp_object['value']=categories.data[i].id
        temp_array.push(temp_object)
        temp_object={}
      }
      setOptions(temp_array)
    }catch(error){
      if(error.response){
        console.log(error)
      }
    }
  }

  const CreateBlog=async(e)=>{
    e.preventDefault();
    try{
      const formData=new FormData()
      formData.append('title',title)
      formData.append('description',description)
      formData.append('value',value)
      formData.append('thumbnail_image',thumbnail_image)
      formData.append('author',author)

      await axiosJWT.post('http://localhost:2000/blogs/create-blog',formData,{
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

      //console.log(title,description,thumbnail_image,author)
      


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
          <h1>Create Blog</h1>
          <Col>
            <Form onSubmit={CreateBlog}>
                  <Form.Group className="mb-3">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Blog Category</Form.Label>
                    <MultiSelect
                      onChange={handleOnchange}
                      options={options}
                    />
                  </Form.Group>

                
                  
                

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Thumbnail Image
                    </Form.Label>
                    <Form.Control type="file" name="thumbnail_image" onChange={(e)=>setThumbnail_image(e.target.files[0])}/>
                  </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Blog Description</Form.Label>
                    <Editor
                      textareaName='description'
                      initialValue=""
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
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
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