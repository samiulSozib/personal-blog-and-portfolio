import React, { Fragment } from 'react'
import CreateAboutComponent from '../component/CreateAboutComponent'
import Navigation from '../component/Navigation'

const CreateAbout = () => {
  return (
    <Fragment>
        <Navigation/>
        <CreateAboutComponent/>
    </Fragment>
  )
}

export default CreateAbout