import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from 'utils/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			Auth.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						origin: { from: props.location }
					}}
				/>
			)
		}
	/>
);

export default PrivateRoute;
