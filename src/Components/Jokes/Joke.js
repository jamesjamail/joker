import React, { Fragment } from "react";
import { Paper, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  jokeCard: {
    background: theme.palette.secondary.light
  }
}));

function Joke(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.jokeCard}>
        <CardContent>
          <Typography variant="h5" color="inherit">
            {props.joke}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Joke;
