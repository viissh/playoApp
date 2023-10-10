import { User } from "@/models/user";
import mongoose from "mongoose";
export const connectDb = async () =>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "playo_project"
        });
        console.log("db connected");

        // const user = new User({
        //     name: "pummy",
        //     email: "pummmy@gmail.com"
        // });

        // await user.save();

        // console.log("user is created");



        //console.log(connection);
        
    } catch (error) {
        console.log("failed to connect with db");
        console.log(error);
    }
}

module.exports = connectDb;