import React, { Fragment, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHead from './components/app-head'
import AppFooter from './components/app-footer'
const App = memo(() => {
  return (
    <Fragment>
      <AppHead />
      <div>{useRoutes(routes)}</div>
      <AppFooter />
    </Fragment>
  )
})

export default App
