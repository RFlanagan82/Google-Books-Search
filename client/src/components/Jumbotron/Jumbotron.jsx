import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "../Container/Container";


const Jumbo = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Google Books Search</h1>
        <p>
          Search for & Save Books of Interest!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;