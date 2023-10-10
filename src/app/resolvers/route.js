import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { server } from "../apolloServer/route";
import { cookies } from 'next/headers'

async function addNewUser(name, email, password) {
  try {
    console.log("inside addNewUSer function");
    let user = new User({
      name,
      email,
      password,
    });
    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    console.log("the salt is ", parseInt(process.env.BCRYPT_SALT));
    console.log("the jwt key here is ", process.env.JWT_KEY);
    const createdUser = await user.save();
    return createdUser;
  } catch (error) {
    console.log("in error of addNewUser function");
    console.log(error);
  }
}

// async function findUser(email, password) {

//   const requiredUser = await User.findOne({ email: email });
//   let matched = bcrypt.compareSync(password, requiredUser.password);

//   let token;

//   if (matched) {

//     token = jwt.sign(
//       {
//         _id: requiredUser._id,
//         name: requiredUser.name,
//       },
//       process.env.JWT_KEY
//     );

//     context.cookies.set("auth-token", token, {
//       httpOnly: true,
//       sameSite: "lax",
//       // here we put 6 hours, but you can put whatever you want (the shorter the safer, but also more annoying)
//       maxAge: 6 * 60 * 60,
//       //secure: process.env.NODE_ENV === "production",
//     });

//     console.log("the generated token is ",token);

//   }
//   return token;
// }

const resolvers = {
  Query: {

    
  },
  
  Mutation: {
    addUser: async (_, { name, email, password }) => {
      try {
        console.log("inside addUser mutation");
        let createdNewUser = await addNewUser(name, email, password);
        
        // console.log("hello "+createdNewUser);
        return {
          code: 200,
          success: true,
          message: `Successfully added a user`,
          user: createdNewUser,
        };
      } catch (error) {
        console.log("error");
        return {
          code: 300,
          success: false,
          message: `some error is coming`,
          user: null,
        };
      }
    },
    
    doLogin: async (parent, { email, password }, context) => {
      // let token = findUser(email, password);
      //const requiredUser = await User.findOne({ email: email });
    
      const requiredUser = await User.findOne({ email: email });
      let matched = bcrypt.compareSync(password, requiredUser.password);
    
      let token;
    
      if (matched) {
        token = jwt.sign(
          {
            _id: requiredUser._id,
            name: requiredUser.name,
          },
          process.env.JWT_KEY
        );
    
        cookies().set("auth-token", token, {
          httpOnly: true,
          sameSite: "lax",
          // here we put 6 hours, but you can put whatever you want (the shorter the safer, but also more annoying)
          maxAge: 6 * 60 * 60,
          //secure: process.env.NODE_ENV === "production",
        });
      }
    
      return requiredUser;
    },
  },
};

module.exports = resolvers;
