/* eslint-disable no-unused-vars */

declare interface IMember {
  password: string
  account: string
}

declare interface IAuthData {
  token: string
}

declare interface IProduct {
  id: string
  name: string
  price: number
  description: string
  image: [string]
}
