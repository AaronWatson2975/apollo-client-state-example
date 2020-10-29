import { makeVar, InMemoryCache } from "@apollo/client";

export const nameVar = makeVar("");

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        name: { read: () => nameVar() }
      }
    }
  }
});
