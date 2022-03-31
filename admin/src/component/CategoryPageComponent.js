import React, { Fragment,useEffect,useState } from 'react'
import { Container, Row,Table,Button, Col } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import json_decode from 'jwt-decode'

const CategoryPageComponent = () => {

  const history=useHistory()
  const [token,setToken]=useState('')
  const [expire,setExpire]=useState('')
  const [categories,setCategories]=useState([])

  
  useEffect(() => {
      refreshToken();
      getCategories()
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

  const getCategories=async()=>{
    try{
      const response=await axiosJWT.get('http://localhost:2000/categories',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setCategories(response.data)
    }catch(error){
      if(error.response){
        console.log(error)
      }
    }
  }

  const Delete=async(id)=>{
    try{
        await axiosJWT.delete('http://localhost:2000/categories/delete/'+id,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res)
            if(res.status==200){
                history.push("/categories")
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
        <Row>
          <h1>Category</h1>
          <hr />
          <Col lg={8} md={12} sm={12} className='m-auto'>
            <Table striped bordered hover className='text-center'>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category,index)=>(
                  <tr key={category.id}>
                  <td>{index+1}</td>
                  <td>{category.name}</td>
                  <td>
                  <Link to=""><Button className='m-2 profilePageButtonText' variant="danger" onClick={()=>Delete(category.id)}>Delete</Button></Link>
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default CategoryPageComponent