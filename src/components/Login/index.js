import React, {useState} from "react";
import {withStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import {Paper, TextField, Button, Typography, Grid} from "@material-ui/core";
import {
	useHistory,
	useLocation
} from "react-router-dom";
import {
	Link
} from "react-router-dom";
import PropTypes from "prop-types";
import { useMutation } from 'urql';
import {get} from "lodash";
import {SetItem} from "../../utils/localstorage";
import LOCAL_STORAGE_KEYS from "../../const/localstorage";
import {SanitizeError} from "../../utils/errorhandler";

const LoginGql = `
	mutation login ($email: String!, $password: String!) {
	  login(input: {email: $email, password: $password})
	}
`;

const Login = (props) => {
	const { classes } = props;
	const inputProps = {
		classes: {
			root: classes.inputRoot,
			notchedOutline: classes.inputNotchedOutline,
			focused: classes.inputFocused
		}
	};
	const inputLabelProps = {
		classes: {
			root: classes.inputLabelRoot,
			focused: classes.inputFocused
		}
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [doLoginResult, doLogin] = useMutation(LoginGql);

	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };

	const onLoginClick = async(event) => {
		event.preventDefault();
		const params = {
			email,
			password,
		};

		const res  = await doLogin(params);
		handleToken(get(res, 'data.login', ''))
	};

	const handleToken = (token => {
		if (token !== '') {
			SetItem(LOCAL_STORAGE_KEYS.TOKEN, token);
			history.replace(from);
		}
	});

	return (
		<Grid container>
			<div className={classes.pageWrapper}>
				<Container maxWidth="md" className={classes.pageContainer}>
					<Paper elevation={3}>
						<form className={classes.boxWrapper} onSubmit={onLoginClick}>
							<img
								className={classes.logo}
								src={`../assets/logo.png`}
								alt={"logo"} />

							<Typography className={classes.textWelcome} color="textSecondary" variant="subtitle1">Welcome back!</Typography>
							<TextField
								type="email"
								error={doLoginResult.error}
								InputLabelProps={inputLabelProps}
								InputProps={inputProps}
								name="email"
								onChange={event => setEmail(event.target.value)}
								label="Email"
								variant="outlined"
								fullWidth margin="normal" />

							<TextField
								error={doLoginResult.error}
								InputLabelProps={inputLabelProps}
								InputProps={inputProps}
								name="password"
								onChange={event => setPassword(event.target.value)}
								label="Password"
								type="password"
								variant="outlined"
								fullWidth
								margin="normal"
								helperText={doLoginResult.error && SanitizeError(get(doLoginResult, 'error.graphQLErrors[0].message',  'Server error occurred. Please try again.'))}/>

							<Button
								classes={{ root: classes.loginButtonRoot, label: classes.loginButtonText }}
								type="submit"
								disabled={doLoginResult.fetching || email === "" || password === ""}
								variant="contained"
								color="secondary"
								disableElevation
								fullWidth
								size="large">
								Log In
							</Button>

							<Typography
								className={classes.textNotice}
								color="textSecondary"
								variant="caption">
								Your user login &amp; data will be deleted<br />on container restart, and happens so<br />often as I'm running this on Free Tier<br />
							</Typography>
						</form>
					</Paper>

					<Typography
						className={classes.textRegisterText}
						color="textSecondary"
						variant="body2">
						Don't have an account?
						<Link
							className={classes.textRegister}
							to="/register">
							Register
						</Link>
					</Typography>
				</Container>
				<Typography
					className={classes.textAttribution}
					color="textSecondary"
					variant="body2">
					Created by <a className={classes.textCreator} href=" https://github.com/HaswinVidanage/google-keep-clone-fe">Haswin Vidanage</a>
				</Typography>
			</div>
		</Grid>
	);
};

const styles = theme => ({
	pageWrapper: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		flexGrow: "1",
		width: '100%',
	},
	pageContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		flexGrow: "1"
	},
	boxWrapper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(3)
	},
	logo: {
		height: theme.spacing(7),
		padding: theme.spacing(0, 0, 1, 0)
	},
	textWelcome: {
		// ...theme.custom.fontFamily.metropolis
	},
	textRegister: {
		textDecoration: "none",
		color: theme.palette.secondary.dark
	},
	textRegisterText: {
		// ...theme.custom.fontFamily.metropolis,
		paddingTop: theme.spacing(3)
	},
	textNotice: {
		// ...theme.custom.fontFamily.roboto,
		lineHeight: "unset",
		textAlign: "center",
		paddingTop: theme.spacing(2)
	},
	textAttribution: {
		padding: theme.spacing(0, 2, 2, 0),
		textAlign: "right"
	},
	textCreator: {
		textDecoration: "none",
		color: theme.palette.secondary.dark
	},
	loginButtonRoot: {
		marginTop: theme.spacing(3)
	},
	loginButtonText: {
		// ...theme.custom.fontFamily.metropolis,
		color: theme.palette.secondary.contrastText,
		textTransform: "capitalize"
	},
	inputRoot: {
		'&$inputFocused $inputNotchedOutline': {
			borderColor: theme.palette.secondary.main
		},
	},
	inputNotchedOutline: {},
	inputFocused: {},
	inputLabelRoot: {
		'&$inputFocused': {
			color: theme.palette.secondary.main
		},
	}
});

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

