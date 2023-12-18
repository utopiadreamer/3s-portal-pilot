// /pages/api/sampe/index.ts
import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.SECRET

export default async function sample(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret })
  if (!token?.access_token) {
    return res.status(401).json({
      status: "Need Authorization!",
    })
  }
  try {
    const result = await fetch("https://localhost:44307/codes", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token?.access_token,
      },
    })
    var vv = await result.json()
    // return res.status(200).json({
    //     status: 'Ok',
    //     data: await result.json()
    // })
    res.send(JSON.stringify(vv, null, 2))
  } catch (e: any) {
    return res.status(400).json({
      statusss: e.message,
    })
  }
}
