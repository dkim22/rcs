import { gql } from '@apollo/client';
import { Mutation } from '@apollo/react-components';
import * as React from 'react';
import { LogoutMutation } from '../../schemaTypes';

const logoutMutation = gql`
  mutation LogoutMutation {
    logout
  }
`;

interface Props {
  children: (data: { logout: () => void }) => JSX.Element | null;
}

export const LogoutController: React.SFC<Props> = ({ children }) => (
  <Mutation<LogoutMutation, {}> mutation={logoutMutation}>
    {(mutate, { client }) =>
      children({
        logout: async () => {
          await mutate();
          if (client) {
            await client.resetStore();
          }
        },
      })
    }
  </Mutation>
);
