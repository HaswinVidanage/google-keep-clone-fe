import React, { useState } from "react";
import {makeStyles, useTheme, fade} from '@material-ui/core/styles';
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
import {useMutation} from "urql";

const CreateNoteGql = `
	mutation createNote($title: String!, $content: String!) {
	  createNote(input:{title: $title, content: $content}) {
	    id
	    title
	    content
	    user {
	      id
	      name
	      email
	    }
	  }
	}
`;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'grid',
		marginTop: 32,
		marginBottom: 16,
		backgroundColor: theme.palette.primary,
	},
	paper: {
		margin: 'auto',
		width: 598,
		backgroundColor: theme.palette.primary,
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
	toolsWrapper: {
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
		borderColor: theme.custom.palette.itemBorderColor,
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
		flexWrap: 'wrap'
	}
}));

const TakeNote = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [isFocussed, setFocussed] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [doCreateNoteResult, doCreateNote] = useMutation(CreateNoteGql);
	const handleSaveNote = async () => {
		setFocussed(false);
		const params = {
			title,
			content
		};
		if (title.trim() === '') {
			return;
		}
		await doCreateNote(params);
	};
	const [color, setColor] = useState("default");
	return (
		<div className={classes.root}>
			<ClickAwayListener onClickAway={() => {
				if(isFocussed) {
					handleSaveNote();
				}
			}}>
			<Paper elevation={5}
			       classes={{ root: classes.paperWrapper }}
			       style={{ backgroundColor: theme.custom.palette.noteBackground[color] }}
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
							onChange={event => setTitle(event.target.value)}
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
									onChange={event => setContent(event.target.value)}
								/>
							</div>
							<div className={classes.takeNoteFooter}>
								<Grid container spacing={1}>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge  >
												<ReminderIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge >
												<CollabIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge >
												<ColourIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge >
												<ImageIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge >
												<ArchiveIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge >
												<MoreIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
											<Badge >
												<UndoIcon/>
											</Badge>
										</IconButton>
									</Grid>
									<Grid item md={1} >
										<IconButton color="inherit" size='small' disabled>
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
												onClick={() => { handleSaveNote(); }}
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


export default TakeNote;

