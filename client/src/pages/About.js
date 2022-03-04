import React, { Fragment } from 'react'
import AboutComponet from '../component/AboutComponet'
import Footer from '../component/Footer'
import PageTop from '../component/PageTop'
import TopNavigation from '../component/TopNavigation'

const About = () => {
  return (
    <Fragment>
        <TopNavigation/>
        <PageTop pageTitle="About Me"/>
        <AboutComponet/>
        <Footer/>
    </Fragment>
  )
}

export default About