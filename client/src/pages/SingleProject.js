import React, { Fragment } from 'react'
import Footer from '../component/Footer'
import PageTop from '../component/PageTop'
import SingleProjectComponent from '../component/SingleProjectComponent'
import TopNavigation from '../component/TopNavigation'

const SingleProject = () => {
  return (
    <Fragment>
        <TopNavigation/>
        <PageTop pageTitle="Project Title"/>
        <SingleProjectComponent/>
        <Footer/>
    </Fragment>
  )
}

export default SingleProject