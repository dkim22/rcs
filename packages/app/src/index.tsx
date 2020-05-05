import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { Routes } from "./routes";
import { client } from "./apollo";

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
