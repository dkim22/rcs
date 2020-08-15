import React from 'react';
import { Text } from 'react-native';
import { Query } from '@apollo/react-components';
import { gql } from '@apollo/client';

const meQuery = gql`
  {
    me {
      id
      email
    }
  }
`;

export class Me extends React.PureComponent {
  render() {
    return (
      <Query query={meQuery}>
        {({ data }: any) => <Text style={{ fontSize: 30 }}>{JSON.stringify(data)}</Text>}
      </Query>
    );
  }
}
