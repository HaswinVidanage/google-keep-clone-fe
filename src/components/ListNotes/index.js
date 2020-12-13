import React, {useEffect, useState} from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {useMutation, useQuery} from "urql";
import {get} from "lodash";
import {
	Grid,
	Paper,
	Typography,
	useMediaQuery
} from '@material-ui/core';
import { useUiStore, useTodosStore, useUserStore } from "../../store";

const useStyles = makeStyles(theme => ({
	content: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: theme.mixins.drawer.minWidth - theme.spacing(2.5),
		marginRight: -1 * theme.spacing(3)
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	todoCreateContainer: {
		display: "flex",
		padding: theme.spacing(4, 0),
		margin: theme.spacing(0, 1)
	},
	todoCreateWrapper: {
		flex: 1,
		maxWidth: theme.spacing(75),
		margin: "0 auto"
	},
	todosWrapper: {
		margin: "0 auto",
		columnWidth: theme.spacing(29),
		columnGap: "0.5rem"
	},
	todoWrapper: {
		width: theme.spacing(29),
		margin: "0 auto",
		breakInside: "avoid",
		pageBreakInside: "avoid",
		padding: "0.5rem 0",
		transition: theme.transitions.create("all", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.standard
		})
	},
	noteCard: {
		minWidth: 240,
		minHeight: 300,
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
}));

const NotesGql = `
	query notes {
	  notes {
	    id
	    title
	    content
	  }
	}
`;

const ListNotes = (props) => {
	const classes = useStyles();
	const [result, getNotes] = useQuery({
		query: NotesGql
	});
	const { data, fetching, error } = result;
	const notes  = get(data, 'notes', []);
	useEffect( () => {
		// Update the document title using the browser API
		getNotes()
	}, []);


	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
	const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
	const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
	const isLaptopL = useMediaQuery(theme.breakpoints.up("lg"));
	const is4K = useMediaQuery(theme.breakpoints.up("xl"));
	const numberOfColumns = is4K
		? 8
		: isLaptopL
			? 4
			: isLaptop
				? 3
				: isTablet
					? 2
					: 1;
	var width = is4K
		? "100%"
		: isLaptopL
			? "1000px"
			: isLaptop
				? "730px"
				: isTablet
					? "480px"
					: "100%";
	const [{ isListView }] = useUserStore();
	width = isListView
		? isLaptop || isLaptopL
			? theme.spacing(75)
			: "100%"
		: width;

	return (
		<div
			className={classes.todosWrapper}
			style={{
				columnCount: isListView ? 1 : numberOfColumns,
				width: width
			}}
		>
			{notes.map(note => (
				<div
					key={note.id}
					className={classes.todoWrapper}
					style={{ width: isMobile || isListView ? "100%" : null }}
				>
					<Paper className={classes.noteCard}>
						<div className={classes.noteTitle}>
							<Typography variant="subtitle1" align={'left'}>
								{note.title}
							</Typography>
						</div>
						<div className={classes.noteBody}>
							<Typography variant="body2" align={'left'}>
								{note.content}
							</Typography>
						</div>
					</Paper>
				</div>
			))}
		</div>
	);
};

ListNotes.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default ListNotes;

