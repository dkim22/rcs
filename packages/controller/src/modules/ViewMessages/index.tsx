import * as React from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/react-components';
import {
  ViewMessagesQuery_messages,
  ViewMessagesQuery,
  ViewMessagesQueryVariables,
} from '../../schemaTypes';

const viewMessagesQuery = gql`
  query ViewMessagesQuery($listingId: String!) {
    messages(listingId: $listingId) {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export const newMessageSubscription = gql`
  subscription($listingId: String!) {
    newMessage(listingId: $listingId) {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export interface WithViewMessages {
  messages: ViewMessagesQuery_messages[];
  loading: boolean | undefined;
  subscribe: () => () => void;
}

interface Props {
  listingId: string;
  children: (data: WithViewMessages) => JSX.Element | null;
}

export class ViewMessages extends React.PureComponent<Props> {
  render() {
    const { children, listingId } = this.props;
    return (
      <Query<ViewMessagesQuery, ViewMessagesQueryVariables>
        query={viewMessagesQuery}
        variables={{ listingId }}
      >
        {({ data, loading, subscribeToMore }) => {
          let messages: ViewMessagesQuery_messages[] = [];

          if (data && data.messages) {
            messages = data.messages;
          }

          return children({
            messages,
            loading,
            subscribe: () =>
              subscribeToMore({
                document: newMessageSubscription,
                variables: { listingId },
                updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) {
                    return prev;
                  }

                  // update prev with new data

                  return {
                    ...prev,
                    messages: [...prev.messages, (subscriptionData.data as any).newMessage],
                  };
                },
              }),
          });
        }}
      </Query>
    );
  }
}
