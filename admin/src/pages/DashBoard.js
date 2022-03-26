import React, { Fragment } from 'react'
import DashBoardComponent from '../component/DashBoardCompenentt'
import Navigation from '../component/Navigation'

const DashBoard = () => {
  return (
    <Fragment>
        <Navigation/>
        <DashBoardComponent/>
    </Fragment>
  )
}

export default DashBoard