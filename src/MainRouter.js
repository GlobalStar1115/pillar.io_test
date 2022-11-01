import React, { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import Ninja from './pages/Ninja'


const MainRouter = () => {


  return (
    <Switch>
      <Redirect
        from="/"
        to='/ninja'
        exact
      />
      <Route
        path='/ninja'
        component={Ninja}
      />
    </Switch>
  )
}

export default MainRouter
