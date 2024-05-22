import {IProducts} from './product.types'
import {GET_PRODUCTS_QUERY} from './apollo/user.queries'
import APOLLO_CLIENT_CONNECT from '../apollo-client'

export const fetchProducts = async () => {
  try {
    const response = await APOLLO_CLIENT_CONNECT().query({
      query: GET_PRODUCTS_QUERY,
    })
    const {products} = response.data
  } catch (error) {}
}
