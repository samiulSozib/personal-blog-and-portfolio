import React, { Fragment } from 'react'
import AllPostsContent from '../component/AllPostsContent'
import Footer from '../component/Footer'
import HomePageContent from '../component/HomePageContent'
import PageTop from '../component/PageTop'
import TopNavigation from '../component/TopNavigation'

const AllPosts = () => {
  return (
    <Fragment>
        <TopNavigation/>
        <PageTop pageTitle="All Posts"/>
        <AllPostsContent/>
        <Footer/>
    </Fragment>
  )
}

export default AllPosts