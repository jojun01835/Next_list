import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "e4080e1f235335509177",
      clientSecret: "39953f8ffc5883e5269e6fd6c73be3917378e7df",
    }),
  ],
  secret: "1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
