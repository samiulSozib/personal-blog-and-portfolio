import axios from 'axios'
import React, { Fragment,useEffect } from 'react'
import { Col, Container, Row,Nav, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DashBoardCompenentt = () => {

    const history=useHistory()
    useEffect(() => {
        refreshToken();
    }, [])

    const refreshToken=async(e)=>{
        try{
            const response=await axios.get('http://localhost:2000/token')
            console.log(response)
            if(response.data.access_token){
                history.push('/')
            }
        }catch(e){
            if(e.response){
                console.log(e)
                history.push('/login')
            }
        }
    }

  return (
    <Fragment>
        <Container className='mt-5'>
            <Row>
                <hr />
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Category</Card.Title>
                            <Card.Link href="#" className='dashBoardCardLink'>View All Category</Card.Link>
                            <Link to="/create-category" className='link'><Card.Link className='dashBoardCardLink'>Create Category</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mb-3 dashBoardCard'>
                        <Card.Body>
                            <Card.Title className='dashBoardCardTitle'>Card Title</Card.Title>
                            
                            <Card.Link href="#" className='dashBoardCardLink'>View All Blogs</Card.Link>
                            <Link to="/create-blog" className='link'><Card.Link className='dashBoardCardLink'>Create Blogs</Card.Link></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default DashBoardCompenentt