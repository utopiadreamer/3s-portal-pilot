import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isHttps = req.headers["x-forwarded-proto"] === "https"
  const protocol = isHttps ? "https" : "http"

  const endSessionEndpoint = `${process.env.IDENTITYSERVERPROVIDER_ISSUER}/connect/endsession`
  const postLogoutRedirectUri = `${protocol}://${req.headers.host}/protected`

  const idToken = req.query.id_toke
  // Build the URL for the sign-out request
  const endSessionUrl = `${endSessionEndpoint}?id_token_hint=${idToken}&post_logout_redirect_uri=${postLogoutRedirectUri}`
  res.redirect(endSessionUrl)
}
