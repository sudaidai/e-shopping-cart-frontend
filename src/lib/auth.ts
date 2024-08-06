import {apiAuth} from '@/services/api'
import {cookies} from 'next/headers'
import {NextRequest, NextResponse} from 'next/server'

export const TOKEN_EXPIRE_TIME = new Date(Date.now() + 15 * 1000 * 60)
export const SESSION_KEY = 'EShoppingAuJt'

export async function setJwtTokenHandler({token}: IAuthData) {
  // const expireTime = new Date(Date.now() + TOKEN_EXPIRE_TIME)
  cookies().set(SESSION_KEY, `Bearer ${token}`, {
    expires: TOKEN_EXPIRE_TIME,
    httpOnly: true,
  })
}

export async function removeJwtTokenHandler() {
  cookies().set(SESSION_KEY, '', {expires: new Date(0)})
}

export async function getJwtTokenHandler() {
  const jwtToken = cookies().get(SESSION_KEY)?.value
  if (!jwtToken) return null
  return jwtToken
}

export async function updateJwtTokenHandler(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return null

  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: session,
    httpOnly: true,
  })

  return res
}

// export async function updateJwtTokenHandler() {
//   const jwtToken = await getJwtTokenHandler()
//   if (!jwtToken) return null

//   apiAuth
// }

import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentailProvider from 'next-auth/providers/credentials'

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt'
//   },
//   providers: [
//     CredentailProvider({
//       credentials: {
//         account: {},
//         password: {}
//       },
//       async authorize(credentials, req) {
//         const client = await clientPromise;
//         const db = client.db() as any;

//         const user = await db
//           .collection("users")
//           .findOne({ email: credentials?.email });

//         const bcrypt = require("bcrypt");

//         const passwordCorrect = await bcrypt.compare(
//           credentials?.password,
//           user?.password
//         );

//         if (passwordCorrect) {
//           return {
//             id: user?._id,
//             email: user?.email,
//           };
//         }

//         console.log("credentials", credentials);
//         return null;
//       })
//     },
//   ]

// }
