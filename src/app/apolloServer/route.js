import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import resolvers from "../resolvers/route";
import typeDefs from "../typeDefs/route";
import connectDb from "../../helper/db";
// import Cookies from "cookies";
import { cookies } from 'next/headers'

// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true
//   };

 connectDb();

 const verifyToken = (token) => {
    if (!token) return null;
    try {
      return jwt.verify(token, process.env.JWT_KEY);
    } catch {
      return null;
    }
  };


const server = new ApolloServer({
    
    resolvers,
    typeDefs,
    context: ({ req, res }) => {
      // const cookie = new cookies(req, res);
      let cookie = cookies();
      const token = cookies().get("auth-token");
      const user = verifyToken(token);
      return {
        cookie,
        user
      };
    },
    //cors: corsOptions


});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };