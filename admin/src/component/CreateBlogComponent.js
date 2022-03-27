import React, { Fragment, useState } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';

const CreateBlogComponent = () => {

  const [body,setBody]=useState('')
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

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Thumbnail Image
                    </Form.Label>
                    <Form.Control type="file" name="thumbnail_image" />
                  </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Blog Description</Form.Label>
                    <Editor
                      textareaName='Body'
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
                      onEditorChange={(newText) => setBody(newText)}
                  ></Editor>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Author" />
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