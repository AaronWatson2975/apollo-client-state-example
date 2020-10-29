const { makeVar, InMemoryCache } = require("@apollo/client");

export const nameVar = makeVar("");

export const cache = new InMemoryCache();
