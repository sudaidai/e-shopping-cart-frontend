import {GET_FILMS_QUERY} from './queries/films.queries'
import APOLLO_CLIENT_CONNECT from '../apollo-client'

// mock api : https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer
// apollo client example : https://medium.com/@TGod-Ajayi/integrating-graphql-with-next-js-and-react-using-typescript-a-beginners-guide-e65e268dedd5

export const fetchFilms = async () => {
  try {
    const response = await APOLLO_CLIENT_CONNECT().query({
      query: GET_FILMS_QUERY,
    })
    return response
  } catch (error) {}
}
