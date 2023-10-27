"use client"
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {ADD_USER} from '../../mutations/userMutations'

function Page(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [addUserMutatedFunction] = useMutation(ADD_USER,{
        variables:{ name: name, email: email, password: password} 
    });
    function submitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("in submit form function");
        if(name.trim() === '' || email.trim() === '' || password.trim() ==='')
           alert("Enter valid value"); 
        addUserMutatedFunction();
        setName('');
        setEmail('');
        setPassword('');
    }

  return (
    <div className=" grid max-w-xl  md:max-w-full m-auto place-content-center h-screen bg-green-400 text-md">
      <div className="border-2 shadow-md border-green-800 p-5 m-5">

      <form onSubmit={ submitForm} className="p-6">
        <div>
          <label> Name </label>
          <br />
          <input
            className="rounded-md"
            placeholder="    Enter your name  "
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            id="exampleCheck1"
          />
        </div>

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
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
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
      </div>
    </div>
    
  );
};

export default Page;
