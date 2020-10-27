import React from "react";
import {withStyles} from '@material-ui/core/styles';
import {
	Grid,
	Paper,
	Typography
} from '@material-ui/core';
import PropTypes from "prop-types";

const ListNotes = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
					<Paper className={classes.noteCard}>
						<div className={classes.noteTitle}>
							<Typography variant="subtitle1" align={'left'}>
								Workout Videos
							</Typography>
						</div>
						<div className={classes.noteBody}>
							<Typography variant="body2" align={'left'}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias aliquid, cum delectus dolore ea, eligendi eos error ex inventore minima nisi quibusdam rerum temporibus velit voluptatum? Laudantium, nesciunt.
							</Typography>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	noteCard: {
		minWidth: 240,
		minHeight: 300,
		backgroundColor: 'cyan',
		borderRadius: 8,
		display: 'flex',
		alignItems: 'start',
		padding: 16,
		flexDirection: 'column'
	},
	noteTitle: {

	},
	noteBody: {
		display: 'flex',
		alignContent: 'left',
	},
});

ListNotes.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListNotes);

