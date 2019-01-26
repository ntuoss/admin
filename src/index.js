import React, { lazy, Suspense, Component } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseApp, FirebaseContext } from 'api/firebase';
import * as serviceWorker from 'serviceWorker';
import * as ROUTE from 'utils/routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
// import Loader from 'components/Loader';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/Theme';

import Header from 'components/Header';

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
										<Route exact path={ROUTE.LANDING} component={() => <HomePage />} />
										<Route path={ROUTE.LOG_IN} component={() => <SigninPage />} />
										<Route path={ROUTE.SIGN_OUT} component={() => <SignoutPage />} />
										<PrivateRoute path={ROUTE.FORM} component={() => <ProjectFormPage />} />
										<PrivateRoute path={ROUTE.PROJECTS} component={() => <ProjectsListPage />} />
										{/* prettier-ignore */}
										<PrivateRoute path={ROUTE.PROJECT_DETAIL} component={() => <ProjectDetailPage />} />
										<Route component={() => <NotFound />} />
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

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
