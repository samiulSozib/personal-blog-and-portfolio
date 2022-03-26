import React, { Fragment } from 'react'
import CreateCategoryComponent from '../component/CreateCategoryComponent'
import Navigation from '../component/Navigation'

const CreateCategoryPage = () => {
  return (
    <Fragment>
        <Navigation/>
        <CreateCategoryComponent/>
    </Fragment>
  )
}

export default CreateCategoryPage