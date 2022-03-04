import React, { Fragment } from 'react'
import AllProjectContent from '../component/AllProjectContent'
import Footer from '../component/Footer'
import PageTop from '../component/PageTop'
import TopNavigation from '../component/TopNavigation'

const AllProjects = () => {
  return (
    <Fragment>
        <TopNavigation/>
        <PageTop pageTitle="All Project"/>
        <AllProjectContent/>
        <Footer/>
    </Fragment>
  )
}

export default AllProjects