import {Container, Box} from "@material-ui/core";
import CustomAppBar  from "../AppBar/AppBar";
import React, {useEffect} from "react";
import AppBody from "../AppBody";
import NavDrawer from "../NavDrawer/NavDrawer";
import {UiProvider, UserProvider, useUserStore} from "../../store";
import {ThemeProvider} from "styled-components";
import { dark, light } from "../../theme";
import {useQuery} from "urql";
import {get} from "lodash";

const UserConfigGql = `
	query userConfig {
	  userConfig {
	    id
	    isDarkMode
	    isListMode
	    user {
	      id
	      name
	      email
	    }
	  }
	}
`;

const DashboardContent = () => {
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
	);
};

const Dashboard = () => {
	const [getUserConfigResult, getUserConfig] = useQuery({
		query: UserConfigGql
	});
	const { data, fetching, error } = getUserConfigResult;
	useEffect( () => {
		getUserConfig()
	}, []);

	const userConfig = get(data, 'userConfig', {});
	return (
		<UserProvider user={userConfig.user}>
			<UiProvider>
				<DashboardContent/>
			</UiProvider>
		</UserProvider>
	)
};

export default Dashboard;
