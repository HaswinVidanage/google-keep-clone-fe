import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {
	Grid,
	CssBaseline,
} from '@material-ui/core';
import CustomAppBar  from "../AppBar/customAppBar";
import AppBody from '../AppBody';
import Login from '../Login';
import Dashboard from '../Dashboard';
import {GetItem} from "../../utils/localstorage";
import LOCAL_STORAGE_KEYS from "../../const/localstorage";
const theme = createMuiTheme({
	palette: {
		primary: {
			main:'#FFF',
		},
		secondary: {
			main: '#5f6368',
		},
	},
});


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));


const HomePage = () => {
	return (
		<Grid container>
			<Grid container item xs={12} >
				<CustomAppBar/>
				<AppBody/>
			</Grid>
		</Grid>
	)
};

const LoginPage = () => {
	return (
		<Grid container>
			<Login/>
		</Grid>
	);
};

const AppContainer = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={classes.root}>
				<Router>
					<Switch>
						<Route path="/login">
							<LoginPage/>
						</Route>
						<PrivateRoute path="/">
							<Dashboard/>
						</PrivateRoute>
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
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
