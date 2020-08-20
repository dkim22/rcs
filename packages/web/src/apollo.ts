import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from 'apollo-link-ws';

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_SERVER_URL,
  credentials: 'include',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink as any,
  httpLink as any,
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
} as any);
