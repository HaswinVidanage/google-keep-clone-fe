import {Grid} from "@material-ui/core";
import CustomAppBar  from "../AppBar/customAppBar";
import React from "react";
import AppBody from "../AppBody";

const Dashboard = () => {
	return (
		<Grid container>
			<Grid container item xs={12} >
				<CustomAppBar/>
				<AppBody/>
			</Grid>
		</Grid>
	)
};

export default Dashboard;
