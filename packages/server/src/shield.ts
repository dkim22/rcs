// graphql-shield는 지금 사용하지 않는다.
import { rule, shield } from "graphql-shield";

const isAuthenticated = rule()((
  _: any,
  __: any,
  context: any,
) => {
  return !!context.session.userId;
});

export const middlewareShield = shield({
  Mutation: {
    createListing: isAuthenticated,
    deleteListing: isAuthenticated
  }
});
