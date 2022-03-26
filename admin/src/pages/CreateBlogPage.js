import React, { Fragment } from 'react'
import CreateBlogComponent from '../component/CreateBlogComponent'
import Navigation from '../component/Navigation'

const CreateBlogPage = () => {
  return (
    <Fragment>
        <Navigation/>
        <CreateBlogComponent/>
    </Fragment>
  )
}

export default CreateBlogPage