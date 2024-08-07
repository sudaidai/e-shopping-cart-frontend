import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client'

// const APOLLO_CLIENT_CONNECT = new ApolloClient({
//   uri: process.env.API_SERVER_URL,
//   cache: new InMemoryCache(),
// })

const APOLLO_CLIENT_CONNECT = () => {
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {},
  })

  const httpLink = createHttpLink({
    // uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    uri: 'http://localhost:8000/graphql',
    useGETForQueries: false, // Use GET method for queries
  })

  const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    ssrMode: typeof window === 'undefined', // Set SSR mode based on whether the window object is available
    cache, // Assign the previously created InMemoryCache instance
    link: httpLink, // Assign the HttpLink instance as the link for the ApolloClient
  })

  return apolloClient
}

export default APOLLO_CLIENT_CONNECT
