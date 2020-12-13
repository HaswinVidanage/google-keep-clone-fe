import React, { useState } from "react";
import {withStyles, useTheme, fade} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {
	PinDropOutlined as PinIcon,
	CheckBoxOutlined as CheckIcon,
	BrushOutlined  as BrushIcon,
	ImageOutlined  as ImageIcon,
	AddAlertOutlined as ReminderIcon,
	PersonAddOutlined as CollabIcon,
	PaletteOutlined as ColourIcon,
	ArchiveOutlined as ArchiveIcon,
	MoreVertOutlined as MoreIcon,
	UndoOutlined as UndoIcon,
	RedoOutlined as RedoIcon,
} from "@material-ui/icons";


const TakeNote = (props) => {
	const { classes } = props;

	const [isFocussed, setFocussed] = useState(false);

	const theme = useTheme();
	return (
		<div className={classes.root}>
			<ClickAwayListener onClickAway={() => {
				if(isFocussed) {
					alert('saved');
					setFocussed(false);
				}
			}}>
			<Paper elevation={5}
			       classes={{ root: classes.paperWrapper }}
			       className={classes.paper}>
				<Collapse
					classes={{ wrapperInner: classes.wrapper }}
					collapsedHeight="3rem"
					in={isFocussed}>
					<div className={classes.inputWrapper}>
						<InputBase
							placeholder={"Title"}
							classes={{
								root:  classes.inputRoot,
								input: classes.inputInput,
							}}
							onFocus={() => setFocussed(true)}
							// onBlur={() => setFocussed(false)}
						/>
						<div className={classes.tools}>
							{isFocussed ? (
								<div className={classes.toolsWrapper} >
									<IconButton color="inherit">
										<Badge >
											<PinIcon/>
										</Badge>
									</IconButton>
								</div>
							) : (
								<div className={classes.toolsWrapper} >
									<IconButton color="inherit">
										<Badge >
											<CheckIcon/>
										</Badge>
									</IconButton>
									<IconButton color="inherit">
										<Badge >
											<BrushIcon/>
										</Badge>
									</IconButton>
									<IconButton color="inherit">
										<Badge >
											<ImageIcon/>
										</Badge>
									</IconButton>
								</div>
							)}
						</div>
					</div>
					{isFocussed && (
						<div>
							<div className={classes.takeNoteContainer}>
								<InputBase
									placeholder={"Take a note..."}
									multiline
									autoFocus
									classes={{
									root: classes.inputRoot,
									input: classes.takeNoteInput,
									}}
								/>
							</div>
							<div className={classes.takeNoteFooter}>
								<Grid container spacing={1}>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<ReminderIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<CollabIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<ColourIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<ImageIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<ArchiveIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<MoreIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<UndoIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small'>
											<Badge >
												<RedoIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={4} xs={12}>
										<div className={classes.closeBtnWrapper}>
											<Button
												size="small"
												style={{textTransform: 'none', fontWeight: 'bold'}}
												onClick={() => { setFocussed(false) }}
											>
												Close
											</Button>
										</div>
									</Grid>
								</Grid>
							</div>
						</div>

					)}
				</Collapse>
			</Paper>
			</ClickAwayListener>
		</div>
	);
};

const styles = theme => ({
	root: {
		display: 'grid',
		marginTop: 32,
		marginBottom: 16,
	},
	paper: {
		margin: 'auto',
		width: 598,
		// minimumHeight: 44,
	},
	inputWrapper: {
		display: 'flex',
		justifyContent: 'flex',
		alignItems: 'center',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.primary,
		borderWidth: "1px",
		borderColor: theme.palette.divider,
		height: 'inherit',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
		// backgroundColor: 'blue',
	},
	inputInput: {
		// backgroundColor: 'red',
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 2,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	takeNoteInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 2,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
	tools: {
		display: 'flex',
		flexDirection: 'row',
	},
	toolsWrapper : {
		all: 'inherit'
	},
	collapsedContainer: {
		display: 'flex',
	},
	paperWrapper: {
		transition: theme.transitions.create("all", {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.short
		}),
		borderColor: theme.palette.divider,
		borderWidth: theme.spacing(0.1),
		borderStyle: "solid"
	},
	wrapper: {
		display: "flex",
		flexDirection: "column"
	},
	takeNoteContainer: {
		display: "flex",
		flexDirection: "row",
		// backgroundColor: 'red',
	},
	takeNoteFooter: {
		display: "flex",
		flexDirection: "row",
		flexWrap: 'wrap',
		height: 34,
		marginRight: 15,
		marginLeft: 15,
	},
	closeBtnWrapper: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexWrap: 'wrap',
	}
});

TakeNote.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TakeNote);

