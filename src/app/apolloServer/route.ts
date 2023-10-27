import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import {resolvers} from "../resolvers/route";
import {typeDefs} from "../typeDefs/route";
import connectDb from "../../helper/db";
import { NextRequest, NextResponse } from "next/server";
// import Cookies from "cookies";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { User } from "@/models/user";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true
//   };

 connectDb();

 const verifyToken = (token: RequestCookie) => {
    if (!token) return null;
    try {
      return jwt.verify(token.toString(), process.env.JWT_KEY!);
    } catch {
      return null;
    }
  };


const server = new ApolloServer({
    
    resolvers,
    typeDefs,
    // context: ({ req, res }:{req: Request, res:Response}) => {
    //   // const cookie = new cookies(req, res);
    //   let cookie = cookies();
    //   const token = cookies().get("auth-token");
    //   const user = verifyToken(token!);
    //   return {
    //     cookie,
    //     user
    //   };
    // },

    //cors: corsOptions


});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };