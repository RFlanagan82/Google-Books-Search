import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "../Container/Container";
import "./Jumbotron.css";


const Jumbo = () => {
  return (
    <Jumbotron className="jumbotron">
      <Container className="jumbotext">
        <h1>Which One Will You Get Lost In?</h1>
        <p>
          Search for & Save Books of Interest!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;