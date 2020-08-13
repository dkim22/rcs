import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Listing: {
    // TODO: 지금은 local에 저장 하지만 cloudinary, s3 고려
    pictureUrl: (parent, _, { url }) => parent.pictureUrl && `${url}/images/${parent.pictureUrl}`
  },
  Query: {
    findListings: async () => {
      return Listing.find();
    }
  }
};
