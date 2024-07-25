import axios from "axios";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Input Username Here...",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          const res = await axios.post(
            "http://localhost:3000/api/user/authentication",
            credentials,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          const user = res.data;

          if (user.statusCode === 200) {
            return user.data;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log("session", session);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const test = user as unknown as any;
        return {
          ...token,
          id: test.id,
          randomkey: test.randomkey,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
