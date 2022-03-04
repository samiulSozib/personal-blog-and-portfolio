import React, { Fragment } from 'react'
import Footer from '../component/Footer'
import HomePageContent from '../component/HomePageContent'
import TopBanner from '../component/TopBanner'
import TopNavigation from '../component/TopNavigation'

const HomePage = () => {
  return (
    <Fragment>
        <TopNavigation/>
        <TopBanner/>
        <HomePageContent/>
        <Footer/>
    </Fragment>
  )
}

export default HomePage