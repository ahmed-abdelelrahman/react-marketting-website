import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Authentication = () => {
  return (
    <div>
      <div className='fixed flex justify-end items-center text-3xl font-bold p-4  bg-black w-full text-white h-20 top-0 left-0  '>
        Nona
      </div>
      <div className='absolute top-1/2 left-1/2 '>
        <GoogleLogin
          className='fixed left-1/2 top-1/2'
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Authentication;
