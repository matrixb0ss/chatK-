import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'
import SignupPage from '../../ui/pages/SignupPage.jsx'
import LoginPage from '../../ui/pages/LoginPage.jsx'
import EditPage from '../../ui/pages/EditPage.jsx'
import createContainer from '../../ui/pages/MainPage.jsx'

export const renderRoutes = () => (
	<Router history={browserHistory}>
    <Route path="login" component={LoginPage}/>
    <Route path="signup" component={SignupPage}/>

    <Route path="/" component={AppContainer}>
      <IndexRoute component={MainContainer}/>
    <Route path="/edit/profile" component={EditPage}/>
    <Route path=":location" component={createContainer}/>
    </Route>
  </Router>
);