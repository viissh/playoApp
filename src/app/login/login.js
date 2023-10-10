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

  // const { loading, error, data } = useQuery(DO_LOGIN, {
  //   variables: { email: email, password: password },
  // });
  const router = useRouter();

  const [loginMutatedFunction] = useMutation(DO_LOGIN, {
    variables: { email: email, password: password },
    onCompleted: () => router.push('/')
  });

  // console.log("data before form submission is ",JSON.stringify(data));

  function SubmitForm(e) {

    e.preventDefault();
    console.log("in submit form function of login");
    loginMutatedFunction();

    setEmail("");
    setPassword("");
    // return response;
  }

  return (
    <div className=" grid max-w-xl  md:max-w-full m-auto place-content-center h-screen bg-green-400 text-md">
      <div className="border-2 shadow-md border-green-800 p-5 m-5">
        <form onSubmit={SubmitForm} className="p-6">
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
            className="bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black"
          >
            Submit
          </button>
        </form>
        {/* <Image className="h-48 w-full md:h-full md:w-60" src="https://images.pexels.com/photos/14240490/pexels-photo-14240490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"/> */}
      </div>
    </div>
  );
};
