import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }
  componentDidMount() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ jokes: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Card className={classes.root}>
        <CardContent>This is a joke</CardContent>
      </Card>
    );
  }
}

export default Joke;
