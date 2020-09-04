import * as React from 'react';
import { gql, MutationFunction } from '@apollo/client';
import { Mutation } from '@apollo/react-components';
import { UpdateListingMutation, UpdateListingMutationVariables } from '../../schemaTypes';

const updateListingMutation = gql`
  mutation UpdateListingMutation($listingId: String!, $input: UpdateListingInput!) {
    updateListing(listingId: $listingId, input: $input)
  }
`;

export interface WithUpdateListing {
  updateListing: MutationFunction<UpdateListingMutation, UpdateListingMutationVariables>;
}

interface Props {
  children: (data: WithUpdateListing) => JSX.Element | null;
}

export class UpdateListing extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateListingMutation, UpdateListingMutationVariables>
        mutation={updateListingMutation}
      >
        {(mutate) => {
          return children({
            updateListing: mutate,
          });
        }}
      </Mutation>
    );
  }
}
