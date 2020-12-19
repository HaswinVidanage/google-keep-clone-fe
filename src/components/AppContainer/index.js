import React from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {
	CssBaseline,
} from '@material-ui/core';
import Login from '../Login';
import Dashboard from '../Dashboard';
import {GetItem} from "../../utils/localstorage";
import LOCAL_STORAGE_KEYS from "../../const/localstorage";
import Register from "../Register";

const AppContainer = () => {
	return (
		<>
			<CssBaseline />
			<Router>
				<Switch>
					<PrivateRoute exact path="/">
						<Dashboard/>
					</PrivateRoute>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/register">
						<Register/>
					</Route>
				</Switch>
			</Router>
		</>
	);
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
	const token = GetItem(LOCAL_STORAGE_KEYS.TOKEN);
	const loggedIn = token;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default AppContainer;
