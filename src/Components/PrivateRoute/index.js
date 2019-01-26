import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withFirebase } from 'api/firebase';

// const PrivateRoute = ({ component: Component, ...rest }) => {
// 	return class extends React.Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				authUser: ''
// 			};
// 		}
// 		componentDidMount() {
// 			// this.listener = firebase.auth.onAuthStateChanged(authUser => {
// 			// 	authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
// 			// });
// 		}
// 		componentWillUnmount() {
// 			// this.listener();
// 		}

// 		render() {
// 			return (
// 				<Route
// 					{...rest}
// 					render={props =>
// 						// this.state.authUser !== null
// 						true ? (
// 							<Component {...props} />
// 						) : (
// 							<Redirect
// 								to={{
// 									pathname: '/login',
// 									origin: { from: props.location }
// 								}}
// 							/>
// 						)
// 					}
// 				/>
// 			);
// 		}
// 	};
// };

const PrivateRoute = ({ component: Component, ...rest }) => {
	class FirebaseWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				authUser: ''
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
	}
	const Private = withFirebase(FirebaseWrapper);
	return <Private />;
};

export default PrivateRoute;
