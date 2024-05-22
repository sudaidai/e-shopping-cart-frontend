import {ApolloClient, InMemoryCache} from '@apollo/client'

// const APOLLO_CLIENT_CONNECT = new ApolloClient({
//   uri: process.env.API_SERVER_URL,
//   cache: new InMemoryCache(),
// })

const APOLLO_CLIENT_CONNECT = () => {
  const cache = new InMemoryCache({
    addTypename: false,
  })
}

export default APOLLO_CLIENT_CONNECT
