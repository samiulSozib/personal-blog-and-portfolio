import React, { Fragment,useEffect,useState } from 'react'
import { Container, Row,Table,Button, Col,Card } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'

const BlogsComponent = () => {

    const history=useHistory()
  const [token,setToken]=useState('')
  const [expire,setExpire]=useState('')
  const [blogs,setBlogs]=useState([])

  
  useEffect(() => {
      refreshToken();
      getBlogs()
  }, [])

  const refreshToken=async(e)=>{
      try{
          const response=await axios.get('http://localhost:2000/token')
          console.log(response)
          if(response.data.access_token){
              //history.push('/')
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

  const getBlogs=async()=>{
    try{
      const response=await axiosJWT.get('http://localhost:2000/blogs',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
      setBlogs(response.data)
    }catch(error){
      if(error.response){
        console.log(error)
      }
    }
  }

  const Delete=async(id)=>{
    try{
        await axiosJWT.delete('http://localhost:2000/blogs/delete/'+id,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res)
            if(res.status==200){
                history.push("/blogs")
            }
        })
        
    }catch(error){
        if(error.response){
            console.log(error)
        }
    }
}

  return (
    <Fragment>
        <Container className='mt-5'>
            <h1>Blogs</h1>
            <hr />
            <Row>
                {blogs.map((blog,index)=>(
                    <Col lg={4} ms={6} sm={12}>
                    <Card key={blog.id}>
                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <hr />
                        <Card.Link>
                        <Link to={{pathname:"/update-blog",state:{id:blog.id}}}><Button className='m-2 profilePageButtonText' variant="primary">Edit</Button></Link>
                        </Card.Link>
                        <Card.Link>
                        <Link to=""><Button className='m-2 profilePageButtonText' variant="danger" onClick={()=>Delete(blog.id)}>Delete</Button></Link>
                        </Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    </Fragment>
  )
}

export default BlogsComponent