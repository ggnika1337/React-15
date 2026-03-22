import React, { useState } from "react";
import Film from "../../assets/Images/FilmEmoji.svg";
import { Link } from "react-router-dom";

function Login() {
  const [ErrorLogin, setErrorLogin] = useState(false);
  const [ErrorPassword, setErrorPassword] = useState(false);
  return (
    <>
      <div className="flex flex-col self-center justify-self-center gap-[82px] pt-[90px] text-[15px] font-[400] whitespace-nowrap items-center">
        <img src={Film} className="w-[32px] h-[25px]" />
        <div className="bg-[#161D2F] rounded-[20px] p-[32px] gap-[40px] flex flex-col">
          <h1 className="text-[32px] text-white">Login</h1>
          <input
            type="text"
            name="login"
            className="cursor-pointer text-white h-[47px] focus:outline-none px-[16px] pb-[16px] border-t-0 border-l-0 border-r-0 border-1 border-b-[#5A698F]"
            placeholder="Login"
          />
          <input
            type="text"
            name="password"
            className="cursor-pointer text-white h-[47px] focus:outline-none px-[16px] pb-[16px] border-t-0 border-l-0 border-r-0 border-1 border-b-[#5A698F]"
            placeholder="Password"
          />
          <button className="bg-white border-none text-[#161D2F] rounded-[6px] h-[48px] min-w-[336px] cursor-pointer">
            Login to your account
          </button>
          <div className="flex gap-[10px] self-center">
            <span className="text-white">Don’t have an account?</span>
            <button className="cursor-pointer text-[#FC4747]">
              <Link to={"/Register"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
