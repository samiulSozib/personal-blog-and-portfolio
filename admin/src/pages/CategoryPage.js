import React, { Fragment } from 'react'
import CategoryPageComponent from '../component/CategoryPageComponent'
import Navigation from '../component/Navigation'

const CategoryPage = () => {
  return (
    <Fragment>
        <Navigation/>
        <CategoryPageComponent/>
    </Fragment>
  )
}

export default CategoryPage