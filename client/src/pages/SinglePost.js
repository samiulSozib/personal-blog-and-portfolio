import React, { Fragment } from 'react'
import Footer from '../component/Footer'
import PageTop from '../component/PageTop'
import SinglePostComponent from '../component/SinglePostComponent'
import TopNavigation from '../component/TopNavigation'

const SinglePost = () => {
  return (
    <Fragment>
        <TopNavigation/>
        <PageTop pageTitle="This isi the post detais page This isi the post detais page This isi the post detais page This isi the post detais page"/>
        <SinglePostComponent/>
        <Footer/>
    </Fragment>
  )
}

export default SinglePost