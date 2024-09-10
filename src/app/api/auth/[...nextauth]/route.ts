import generateRandomString from "@/libs/randomString";
import axios from "axios";
import { hash } from "bcrypt";
import { url } from "inspector";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";

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

          const pesan = await hash("admin", 10)
          const user = res.data;

          if (user.statusCode === 200) {
            return {
              ...user.data,
              randomKey: generateRandomString(),
            };
          }
        } catch (error) {

          console.log("kontoll")
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const data = user as unknown as any;
        return {
          ...token,
          id: data.id,
          randomKey: data.randomKey,
        };
      }
      return token;
    },
    redirect: ({ url, baseUrl }) => {
      return `${baseUrl}/dashboard`;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
