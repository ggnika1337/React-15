import React, { useState } from "react";
import Film from "../../assets/Images/FilmEmoji.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  // const [ErrorLogin, setErrorLogin] = useState(false);
  // const [ErrorPassword, setErrorPassword] = useState(false);
  // const [RepeatError, setRepeatError] = useState(false);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const schema = yup.object().shape({
    login: yup
      .string("Not valid")
      .email("Not valid")
      .required("Can't be empty"),
    password: yup
      .string("Not valid")
      .required("Can't be empty")
      .min(2, "Password is too short")
      .max(20, "Password is too long"),
    repeatPassword: yup
      .string("Not Valid")
      .oneOf([yup.ref("password")], "Passwords don't match")
      .required("Can't be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col self-center justify-self-center gap-[82px] pt-[90px] text-[15px] font-[400] whitespace-nowrap items-center">
        <img src={Film} className="w-[32px] h-[25px]" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#161D2F] rounded-[20px] p-[32px] gap-[40px] flex flex-col"
        >
          <h1 className="text-[32px] text-white">Sign Up</h1>
          <div className="w-full relative">
            <input
              type="text"
              name="login"
              className={`cursor-pointer w-full text-white h-[47px] focus:outline-none px-[16px] pb-[16px] border-t-0 border-l-0 border-r-0 border-1  ${errors.login ? "border-red-500" : "border-[#5A698F]"}`}
              placeholder="Email address"
              {...register("login")}
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
            <h1 className="absolute right-5 top-2 text-[#FC4747] text-[13px]">
              {errors.login?.message}
            </h1>
          </div>
          <div className="w-full relative">
            <input
              type="password"
              name="password"
              className={`cursor-pointer w-full text-white h-[47px] focus:outline-none border-t-0 border-l-0 border-r-0 border-1  ${errors.login ? "border-red-500" : "border-[#5A698F]"} px-[16px] pb-[16px]`}
              placeholder="Password"
              {...register("password")}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <h1 className="absolute right-5 top-2 text-[#FC4747] text-[13px]">
              {errors.password?.message}
            </h1>
          </div>
          <div className="w-full relative">
            <input
              type="password"
              name="password"
              className={`cursor-pointer w-full text-white h-[47px] focus:outline-none px-[16px] pb-[16px] border-t-0 border-l-0 border-r-0 border-1  ${errors.login ? "border-red-500" : "border-[#5A698F]"}`}
              placeholder="Repeat password"
              {...register("repeatPassword")}
            />
            <h1 className="absolute right-5 top-2 text-[#FC4747] text-[13px]">
              {errors.repeatPassword?.message}
            </h1>
          </div>
          <button className="bg-white border-none text-[#161D2F] rounded-[6px] h-[48px] min-w-[336px] cursor-pointer">
            Login to your account
          </button>
          <div className="flex gap-[10px] self-center">
            <span className="text-white">Already have an account?</span>
            <button className="cursor-pointer text-[#FC4747]">
              <Link to={"/"}>Login</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
