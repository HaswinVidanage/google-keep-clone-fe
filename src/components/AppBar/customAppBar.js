import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {fade, withStyles} from '@material-ui/core/styles';
import {
	AccountCircleOutlined as AccountCircle,
	Brightness4Outlined as ToggleDarkModeIcon,
	Brightness5Outlined as ToggleLightModeIcon,
	DashboardOutlined as TileViewIcon,
	SearchOutlined as SearchIcon,
	Menu as MenuIcon,
	ViewAgendaOutlined as ListIcon,
	Refresh as Refresh
} from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Handler from './customAppBar.Handler';

const CustomAppBar = (props) => {

	const {
		anchorEl,
		mobileMoreAnchorEl,
		handleProfileMenuOpen,
		handleMenuClose,
		handleMobileMenuOpen,
		handleMobileMenuClose
	} = Handler(props);

	const { classes } = props;
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMobileMenuClose}>
				<IconButton color="inherit">
					<Badge color="secondary">
						<Refresh color="secondary" />
					</Badge>
				</IconButton>
				<p>Refresh</p>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<IconButton color="inherit">
					<Badge color="secondary">
						<ListIcon  color="secondary"/>
					</Badge>
				</IconButton>
				<p>Toggle List View</p>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<IconButton color="inherit">
					<Badge color="secondary">
						<ToggleDarkModeIcon  color="secondary"/>
					</Badge>
				</IconButton>
				<p>Toggle dark mode</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton color="inherit">
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.root}>
			<AppBar position="static" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar} id="tootlbar-hdv">
					<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" color="inherit" noWrap>
						Keep
					</Typography>
					<div className={classes.search} >
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton color="inherit">
							<Badge color="secondary">
								<Refresh color="secondary"/>
							</Badge>
						</IconButton>
						<IconButton color="inherit">
							<Badge color="secondary">
								<ListIcon  color="secondary"/>
							</Badge>
						</IconButton>
						<IconButton color="inherit">
							<Badge color="secondary">
								<ToggleDarkModeIcon  color="secondary"/>
							</Badge>
						</IconButton>
						<IconButton
							aria-owns={isMenuOpen ? 'material-appbar' : undefined}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMenu}
			{renderMobileMenu}
		</div>
	);
};

CustomAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = theme => ({
	root: {
		width: '100%',
	},
	appBar: {
		borderBottomWidth: "1px",
		borderBottomColor: theme.palette.divider,
		borderBottomStyle: "solid",
	},
	toolbar: {
		// backgroundColor: 'yellow',
		height: '64px',
		padding: 0,
		margin: 0,
		borderShadow: 'none'
	},

	grow: {
		flexGrow: 1,
	},
	menuButton: {
		// marginLeft: -12,
		// marginRight: 20,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: '#f1f3f4',
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto',
		},
		[theme.breakpoints.up('md')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 615,
		},
		borderWidth: "1px",
		borderColor: theme.palette.divider,
		borderStyle: "solid",
		background: '#f1f3f4',
		border: '1px solid transparent',
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
			boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
});

export default withStyles(styles)(CustomAppBar);
