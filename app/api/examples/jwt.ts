// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.NEXTAUTH_SECRET;

export default async function jwt(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret })
  console.log(`req is ${req} and token is ${token}`)
  res.send(JSON.stringify(token, null, 2))
}
