import React, { Fragment } from 'react'
import BlogsComponent from '../component/BlogsComponent'
import Navigation from '../component/Navigation'

const BlogsPage = () => {
  return (
    <Fragment>
        <Navigation/>
        <BlogsComponent/>
    </Fragment>
  )
}

export default BlogsPage