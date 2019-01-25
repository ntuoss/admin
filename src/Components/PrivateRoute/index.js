import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withFirebase } from 'api/firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return class Private extends PureComponent {
		constructor(props) {
			super(props);
			this.state = {
				authUser: null
			};
		}
		componentDidMount() {
			this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
				authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
			});
		}
		componentWillUnmount() {
			this.listener();
		}
		render() {
			return (
				<Route
					{...rest}
					render={props =>
						this.state.authUser !== null ? (
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
		}
	};
};
export default withFirebase(PrivateRoute);
