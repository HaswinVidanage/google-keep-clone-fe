import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomAppBar  from "../AppBar/customAppBar";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));


const AppContainer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid container item xs={12} >
					<CustomAppBar/>
				</Grid>
			</Grid>
		</div>
	);
};

export default AppContainer;
