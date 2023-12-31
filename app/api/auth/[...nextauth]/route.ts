import NextAuth from "next-auth"
import IdentityServer4Provider from "next-auth/providers/identity-server4"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
var configration =process.env;
const handler = NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    IdentityServer4Provider({
      id: configration.IDENTITYSERVERPROVIDER_ID,
      name: configration.IDENTITYSERVERPROVIDER_NAME,
      authorization: {
        params: { scope: configration.IDENTITYSERVERPROVIDER_SCOPE,
      },
      },
      issuer: configration.IDENTITYSERVERPROVIDER_ISSUER,
      clientId: configration.IDENTITYSERVERPROVIDER_CLIENTID,
      clientSecret: configration.IDENTITYSERVERPROVIDER_CLIENTSECRET,
      idToken:true,
    }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: configration.NEXTAUTH_SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: 'app/api/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    error: 'app/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user?.access_token) {
        account.access_token = user?.access_token as string
        // console.log(parseJwt(account.access_token));
      }
      if (user?.refresh_token) {
        account.refresh_token = user?.refresh_token as string
      }

      return true
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT on callback ...nextAuth",user,profile,isNewUser);
      // Add access_token to the token right after signin
      console.log(account);
      if (account?.access_token) {
        token.access_token = account?.access_token
      }

      if (account?.refresh_token) {
        token.refresh_token = account?.refresh_token
      }
      if (account) {
        token.id_token = account.id_token;
      }
      return token
    },

    async redirect({ url, baseUrl }) { 
      // Allows relative callback URLs
    if (url.startsWith("/")) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url
      console.log("Redirect on callback ...nextAuth", url , baseUrl);
      return baseUrl 
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.id_token = token.id_token;
      return session
    }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {
    async signOut(message) { console.log("signOut on callback ...nextAuth success", message); },
  },

  // Enable debug messages in the console if you are having problems
  debug: true,
})
export { handler as GET, handler as POST };
