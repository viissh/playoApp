"use client";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ONE_USER } from "../../queries/userQueries";
import {DO_LOGIN} from "../../mutations/userMutations"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import Image from "next/image";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [loginMutatedFunction] = useMutation(DO_LOGIN, {
    variables: { email: email, password: password },
    onCompleted: () => router.push('/')
  });

  function SubmitForm(e: React.FormEvent) {

    e.preventDefault();
    console.log("in submit form function of login");
    loginMutatedFunction();

    setEmail("");
    setPassword("");
    // return response;
  }


  return (

    <div  className= " grid max-w-3xl h-screen md:max-w-full mx-auto  place-content-center  bg-green-400 text-md">
      
      <img className=" w-screen h-screen bg-opacity-50 absolute" src="https://playo-website.gumlet.io/playo-website-v2/static_pages/hero-images/Landing+Page.jpeg?q=70&h=1200&w=1200&flip=h" alt="pic" />

      
        <form onSubmit={SubmitForm} className=" bg-slate-400 rounded-lg hover:shadow-2xl bg-opacity-50 m-5 relative z-10 p-6">

          <div>
            <br />
            <label>Email address </label>
            <br />
            <input
              className="rounded-md"
              type="email"
              id="exampleInputEmail1"
              placeholder="   Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <br />
            <label>Password</label>
            <br />
            <input
              className="rounded-md"
              type="password"
              id="exampleInputPassword1"
              placeholder="   Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />

          <button
            type="submit"
            className="bg-black text-white p-2 rounded-lg hover:bg-green-600 hover:text-black"
          >
            Submit
          </button>
        </form>
           </div>
    
  );
};
