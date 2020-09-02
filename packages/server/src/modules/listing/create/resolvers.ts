import { ResolverMap } from '../../../types/graphql-utils';
import { Listing } from '../../../entity/Listing';
import { processUpload } from '../shared/processUpload';
// import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input: { picture, ...data } }, { session }) => {
      // isAuthenticated(session);

      // upload my computer
      const pictureUrl = picture ? await processUpload(picture) : null;

      await Listing.create({
        ...(data as Listing),
        pictureUrl,
        userId: session.userId,
      }).save();

      return true;
    },
  },
};
