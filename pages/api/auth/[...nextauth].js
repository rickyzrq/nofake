import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
        secret: process.env.SECRET,
        version: "2.0", 
      }),
  ],
}
export default NextAuth(authOptions)