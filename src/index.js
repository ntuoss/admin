import React, { lazy, Suspense, Component } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseApp, FirebaseContext } from 'api/firebase';
// import * as serviceWorker from 'serviceWorker';
import * as ROUTE from 'utils/routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
// import Loader from 'components/Loader';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/Theme';

import Header from 'components/Header';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faUsers,
  faUserAlt,
  faCalendarAlt,
  faImage,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const HomePage = lazy(() => import('pages/HomePage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const SignoutPage = lazy(() => import('pages/SignoutPage'));
const NotFound = lazy(() => import('pages/NotFound'));
const ProjectFormPage = lazy(() => import('pages/ProjectFormPage'));
const ProjectsListPage = lazy(() => import('pages/ProjectsListPage'));
const ProjectDetailPage = lazy(() => import('pages/ProjectDetailPage'));

class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new FirebaseApp()}>
        <ThemeProvider theme={Theme}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <React.Fragment>
                <Header />
                <Suspense fallback={<div />}>
                  <Switch>
                    {/* prettier-ignore */}
                    <Route exact path={ROUTE.LANDING} component={(props)=> <HomePage {...props}/>} />
                    {/* prettier-ignore */}
                    <Route path={ROUTE.LOG_IN} component={(props)=> <SigninPage {...props}/>} />
                    {/* prettier-ignore */}
                    <Route path={ROUTE.SIGN_OUT} component={props => <SignoutPage {...props} />} />
                    {/* prettier-ignore */}
                    <PrivateRoute path={ROUTE.FORM} component={(props)=> <ProjectFormPage {...props}/>} />
                    {/* prettier-ignore */}
                    <PrivateRoute exact path={ROUTE.PROJECTS} component={(props)=> <ProjectsListPage {...props}/>} />
                    {/* prettier-ignore */}
                    <PrivateRoute path={ROUTE.PROJECT_DETAIL} component={(props)=> <ProjectDetailPage {...props}/>} />
                    <Route component={props => <NotFound {...props} />} />
                  </Switch>
                </Suspense>
              </React.Fragment>
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </FirebaseContext.Provider>
    );
  }
}

library.add(faUsers, faUserAlt, faCalendarAlt, faImage, faMapMarkerAlt);

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
