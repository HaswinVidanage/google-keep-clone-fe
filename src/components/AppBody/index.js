import React from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import TakeNote from "../TakeNote";
import ListNotes from "../ListNotes";

const AppBody = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<TakeNote/>
			<ListNotes/>
		</div>
	);
};

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
});

AppBody.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBody);

