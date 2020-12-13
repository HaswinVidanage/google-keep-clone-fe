import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  Typography,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import {
  WbIncandescentOutlined as IdeaIcon,
  LabelOutlined as LabelIcon
} from "@material-ui/icons";
import DrawerItem from "./DrawerItem";
import { useUiStore, useLabelsStore } from "../../store";

const useStyles = makeStyles(theme => (
    {
      drawer: {
        width: theme.mixins.drawer.minWidth,
        flexShrink: 0
      },
      drawerPaper: {
        background: theme.palette.background.default,
        width: theme.mixins.drawer.minWidth,
        border: 0
      },
      sectionTitle: {
        padding: theme.spacing(2, 1, 0, 2),
        color: theme.palette.text.secondary
      },
      toolbar: theme.mixins.toolbar
    }
));

export default function NavDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [{isNavBarOpen, toggleNavBar }] = useUiStore();

  const onDrawerItemSelected = (labelId) => {
    // todo handle drawer labels
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={isNavBarOpen}
      onClose={toggleNavBar}
      classes={{
        root: classes.drawer,
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <DrawerItem
          text={"Notes"}
          isSelected={true}
          icon={<IdeaIcon htmlColor={theme.custom.palette.iconColor} />}
          onClick={() => onDrawerItemSelected("")}
        />
      </List>
      <Divider />
    </Drawer>
  );
}
