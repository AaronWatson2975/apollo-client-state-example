import React from "react";
import { useQuery } from "@apollo/client";
import { Jumbotron } from "react-bootstrap";
import { GET_NAME } from "./queries";

function NameDisplay() {
  const {
    data: { name }
  } = useQuery(GET_NAME);

  return name ? (
    <Jumbotron>
      <h1>{`Hello, ${name}!`}</h1>
      <p>This component is reading the client state and displaying the name!</p>
    </Jumbotron>
  ) : null;
}

export default NameDisplay;
