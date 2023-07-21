import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    // signIn: '/auth/signin'
  },
  //   vai pra essa pagina assim que invocar a funcao sigin/signout no useSession!
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
