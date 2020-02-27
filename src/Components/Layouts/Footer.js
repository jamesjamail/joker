import React from "react";
import { AppBar, Toolbar } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    top: "auto",
    bottom: 0
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar></Toolbar>
    </AppBar>
  );
}

export default Footer;
