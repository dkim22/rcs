import { gql } from '@apollo/client';
import { graphql } from '@apollo/react-hoc';
import {
  ViewListingQuery_viewListing,
  ViewListingQuery,
  ViewListingQueryVariables,
} from '../../schemaTypes';

const viewListingQuery = gql`
  query ViewListingQuery($id: String!) {
    viewListing(id: $id) {
      id
      name
      category
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithViewListing {
  listing: ViewListingQuery_viewListing | null;
  loading: boolean | undefined;
}

export const withViewListing = graphql<
  any,
  ViewListingQuery,
  ViewListingQueryVariables,
  WithViewListing
>(viewListingQuery, {
  props: ({ data }) => {
    let listing: ViewListingQuery_viewListing | null = null;

    if (data && !data.loading && data.viewListing) {
      listing = data.viewListing;
    }

    return {
      listing,
      loading: data?.loading,
    };
  },
  options: (props) => ({ variables: { id: props.listingId } }),
});
