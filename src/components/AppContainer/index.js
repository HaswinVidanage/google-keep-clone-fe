import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import {
	Grid,
	CssBaseline,
} from '@material-ui/core';
import CustomAppBar  from "../AppBar/customAppBar";
import AppBody from '../AppBody';
import Login from '../Login';

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
						<Route path="/home">
							<HomePage/>
						</Route>
						<Route path="/login">
							<LoginPage/>
						</Route>
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default AppContainer;
