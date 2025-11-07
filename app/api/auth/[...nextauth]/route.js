import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/config/mongodb-client";
import User from "@/models/User";
import connectDB from "@/config/database";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // Enable verbose debug logs in development to help diagnose OAuth issues
  debug: process.env.NODE_ENV !== 'production',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Get the user from database and attach the ID to the session
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  events: {
    // Log NextAuth errors server-side so you can inspect terminal output
    async error(message) {
      // message may be an object or string depending on NextAuth version
      console.error('NextAuth event error:', message);
    },
  },
  pages: {
    signIn: "/",
  },
});

export const GET = handlers.GET;
export const POST = handlers.POST;
