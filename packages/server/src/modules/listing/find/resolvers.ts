import { ResolverMap } from '../../../types/graphql-utils';
import { listingCacheKey } from '../../../constants';

export const resolvers: ResolverMap = {
  Listing: {
    // TODO: 지금은 local에 저장 하지만 cloudinary, s3 고려
    pictureUrl: (parent, _, { url }) => {
      if (!parent.pictureUrl) {
        return parent.pictureUrl;
      }
      if (parent.pictureUrl.includes('http')) {
        return parent.pictureUrl;
      }
      return `${url}/images/${parent.pictureUrl}`;
    },
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId),
  },
  Query: {
    findListings: async (_, __, { redis }) => {
      const listings = (await redis.lrange(listingCacheKey, 0, -1)) || [];

      return listings.map((x) => JSON.parse(x));
    },
  },
};
