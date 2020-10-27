import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import white from '@material-ui/core/colors/grey';
// import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import CustomAppBar  from "../AppBar/customAppBar";
import AppBody from '../AppBody';

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


const AppContainer = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Grid container>
					<Grid container item xs={12} >
						<CustomAppBar/>
						<AppBody/>
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);
};

export default AppContainer;
