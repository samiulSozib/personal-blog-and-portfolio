import React, { Fragment,useEffect,useState } from 'react'
import { Container, Row,Table,Button, Col,Card } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'

const ProjectsComponent = () => {


    const history=useHistory()
  const [token,setToken]=useState('')
  const [expire,setExpire]=useState('')
  const [projects,setProjects]=useState([])

  
  useEffect(() => {
      refreshToken();
      getProjects()
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

  const getProjects=async()=>{
    try{
      const response=await axiosJWT.get('http://localhost:2000/projects',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
      setProjects(response.data)
    }catch(error){
      if(error.response){
        console.log(error)
      }
    }
  }

  const Delete=async(id)=>{
    try{
        await axiosJWT.delete('http://localhost:2000/projects/delete/'+id,{
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
            <h1>Projects</h1>
            <hr />
            <Row>
                {projects.map((project,index)=>(
                    <Col lg={4} ms={6} sm={12}>
                    <Card key={project.id}>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <hr />
                        <Card.Link>
                        <Link to={{pathname:"/update-project",state:{id:project.id}}}><Button className='m-2 profilePageButtonText' variant="primary">Edit</Button></Link>
                        </Card.Link>
                        <Card.Link>
                        <Link to=""><Button className='m-2 profilePageButtonText' variant="danger" onClick={()=>Delete(project.id)}>Delete</Button></Link>
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

export default ProjectsComponent