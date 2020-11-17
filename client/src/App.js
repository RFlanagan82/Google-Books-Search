import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import BooksArea from "./components/BooksArea/BooksArea";


function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Jumbotron />
        <BooksArea />
        <Switch>
        {/* <Route exact path="/" component={Search} /> */}
          {/* <Route exact path="/about" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;