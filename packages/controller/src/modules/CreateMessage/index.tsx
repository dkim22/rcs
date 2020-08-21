import * as React from 'react';
import { gql, MutationFunction } from '@apollo/client';
import { Mutation } from '@apollo/react-components';
import { CreateMessageMutation, CreateMessageMutationVariables } from '../../schemaTypes';

const createMessageMutation = gql`
  mutation CreateMessageMutation($message: MessageInput!) {
    createMessage(message: $message)
  }
`;

export interface WithCreateMessage {
  createMessage: MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;
}

interface Props {
  children: (data: WithCreateMessage) => JSX.Element | null;
}

export class CreateMessage extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<CreateMessageMutation, CreateMessageMutationVariables>
        mutation={createMessageMutation}
      >
        {(mutate) => {
          return children({
            createMessage: mutate,
          });
        }}
      </Mutation>
    );
  }
}
