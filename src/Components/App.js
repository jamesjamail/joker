import React, { Component, Fragment, useState, useEffect } from "react";
import { Header, Footer } from "./Layouts/";
import Joke from "./Jokes/Joke";

function fetchJokes() {}

function App() {
  const [jokes, setJokes] = useState("default joke");
  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setJokes(data.joke);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <br></br>
      <Joke joke={jokes} />
      <br></br>
      <Footer />
    </>
  );
}

export default App;
