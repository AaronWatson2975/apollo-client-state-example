import React from "react";
import NameForm from "./NameForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { cache } from "./cache";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import NameDisplay from "./NameDisplay";

const client = new ApolloClient({
  cache
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h2 className="header">Apollo useReactiveVar Example!</h2>
      <div className="input">
        <NameForm />
      </div>
      <NameDisplay />
    </ApolloProvider>
  );
}
