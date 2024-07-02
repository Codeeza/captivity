import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});
// InMemoryCache is when ever we create a graphQl query and we already created that query before apollo will use the cache it has for that query
export default client;
