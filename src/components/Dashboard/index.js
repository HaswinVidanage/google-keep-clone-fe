import {Container, Box} from "@material-ui/core";
import CustomAppBar  from "../AppBar/AppBar";
import React from "react";
import AppBody from "../AppBody";
import NavDrawer from "../NavDrawer/NavDrawer";
import {UiProvider, UserProvider, useUserStore} from "../../store";
import {ThemeProvider} from "styled-components";
import { dark, light } from "../../theme";

const Dashboard = () => {
	const [{ isDarkMode }] = useUserStore();
	return (
		<ThemeProvider theme={isDarkMode ? dark : light}>
			<CustomAppBar/>
			<NavDrawer/>
			<Container maxWidth={false}>
				<Box mt={8}>
					<AppBody />
				</Box>
			</Container>
		</ThemeProvider>
	)
};

export default Dashboard;
