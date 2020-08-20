import * as React from 'react';
import { Subscription } from '@apollo/react-components';
import { gql } from '@apollo/client';

const SUB = gql`
  subscription {
    newMessage(listingId: "b5283467-2c7a-4bac-8991-eda8ae422e5e") {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export class TestSub extends React.PureComponent {
  render() {
    return (
      <Subscription subscription={SUB}>
        {(data: any) => {
          console.log(data);
          return null;
        }}
      </Subscription>
    );
  }
}
