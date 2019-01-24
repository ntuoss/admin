import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'Components/PrivateRoute';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/Theme';

// import Header from 'Components/Header';

import HomePage from 'Pages/HomePage';
import LoginPage from 'Pages/LoginPage';
import NotFound from 'Pages/NotFound';
import ProjectFormPage from 'Pages/ProjectFormPage';
import ProjectsListPage from 'Pages/ProjectsListPage';
import ProjectDetailPage from 'Pages/ProjectDetailPage';

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.Fragment>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/login" component={LoginPage} />
					<PrivateRoute path="/form" component={ProjectFormPage} />
					<PrivateRoute path="/projects" component={ProjectsListPage} />
					<PrivateRoute path="/project/:id" component={ProjectDetailPage} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</React.Fragment>
	</ThemeProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
