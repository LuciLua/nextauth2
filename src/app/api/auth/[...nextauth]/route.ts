import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //   vai pra essa pagina assim que invocar a funcao sigin/signout no useSession!
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
