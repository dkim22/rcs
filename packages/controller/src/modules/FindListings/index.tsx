import { gql } from "@apollo/client";
import { FindListingsQuery, FindListingsQuery_findListings } from "../../schemaTypes";
import { graphql } from "@apollo/react-hoc";

const findListingsQuery = gql`
  query FindListingsQuery{
    findListings {
      id
      name
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithFindListings {
  listings: FindListingsQuery_findListings[];
  loading: boolean | undefined;
}

export const withFindListings = graphql<
  any,
  FindListingsQuery,
  {},
  WithFindListings
>(findListingsQuery, {
  props: ({ data }) => {
    let listings: FindListingsQuery_findListings[] = [];

    if (data && !data.loading && data.findListings) {
      listings = data.findListings;
    }
    
    return {
      listings,
      loading: data?.loading
    }
  }
})
