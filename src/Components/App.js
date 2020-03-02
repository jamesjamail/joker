import React, { Component, Fragment, useState, useEffect } from "react";
import { Header, Footer } from "./Layouts/";
import Joke from "./Jokes/Joke";

function App() {
  return (
    <>
      <Header />
      <br></br>
      <Joke />
      <br></br>
      <Footer />
    </>
  );
}

export default App;
