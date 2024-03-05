import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import authOptions from "../../../libs/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// refer to docs
