import React, { Fragment, Component } from "react";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button
} from "@material-ui/core";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchJoke } from "../../Actions/jokeActions";

const styles = theme => ({
  jokeCard: {
    background: theme.palette.secondary.light
  }
});

class JokeCard extends React.Component {
  componentDidMount() {
    this.props.fetchJoke();
  }
  render() {
    const { classes } = this.props;

    return (
      <>
        <Card className={classes.jokeCard}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" color="inherit">
                {this.props.joke.joke}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                console.log("click");
                this.props.fetchJoke();
                console.log(this.props.joke);
              }}
            >
              Next
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => ({
  joke: state.joke.item
});

console.log(mapStateToProps);

export default connect(mapStateToProps, { fetchJoke })(
  withStyles(styles)(JokeCard)
);
