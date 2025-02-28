"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LogIn({
  showLogInModel,
  handelHideLogInModel,
  handelShowSingUpModel,
  isOpenLogIn,
}) {
  // !=========show pass state & fn()========>
  const [showPass, setShowPass] = useState("password");
  const [eyeToShow, setEyeToShow] = useState("fa-solid fa-eye-slash");
  function showPassword() {
    if (showPass === "password") {
      setShowPass("text");
      setEyeToShow("fa-regular fa-eye");
    } else {
      setShowPass("password");
      setEyeToShow("fa-solid fa-eye-slash");
    }
  }

  return (
    <>
      <div
        className={`${showLogInModel} z-[999999999999]  top-0 right-0 left-0  bottom-0 bg-[#000000cf] flex justify-center items-center`}
      >
        <div
          className="top-0 right-0 left-0  bottom-0 fixed "
          onClick={() => {
            handelHideLogInModel();
          }}
        />
        {isOpenLogIn && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-[450] mx-3 bg-white min-h-[500px]  z-10 rounded-xl"
          >
            <div className="w-full flex justify-between items-center">
              <h3 className="text-xl p-2 font-semibold text-black mt-4 ml-4">
                Create an Account to save your progress
              </h3>
              <button
                onClick={() => {
                  handelHideLogInModel();
                }}
                className=" p-2 cursor-pointer  group hover:rotate-180 text-2xl  mr-3 mt-2 duration-700 font-light  transition-all "
              >
                <i className="fa-solid fa-x group-hover:text-red-600 text-lg  duration-300 transition-colors "></i>
              </button>
            </div>

            <p className="text-[15px] text-[#888] px-6 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo cupiditate eveniet quaerat beatae deleniti.
            </p>
            <form className="p-4 pb-6 pt-3 space-y-6 ">
              <div className="email relative w-full ">
                <label htmlFor="email" className="w-full ">
                  <input
                    type="text"
                    id="email"
                    placeholder=" "
                    className="w-full px-2  py-3 input-1  transition-color duration-700  outline-none border-b-1 border-gray-300 "
                  />
                  <span className="w-0 h-[2px] input-animate inline-block transition-all duration-700  absolute bg-[#9B76ED] left-0 bottom-0 text-center"></span>
                  <span className="top-[20px] lap left-2 text-gray-600 transition-all duration-700  text-sm  absolute  ">
                    Email
                  </span>
                </label>
              </div>
              <div className="password relative w-full ">
                <label htmlFor="password" className="w-full ">
                  <input
                    type={showPass}
                    id="password"
                    placeholder=" "
                    className="w-full px-2  py-3 input-1  transition-color duration-700  outline-none border-b-1 border-gray-300 "
                  />
                  <span className="w-0 h-[2px] input-animate inline-block transition-all duration-700  absolute bg-[#9B76ED] left-0 bottom-0 text-center"></span>
                  <span className="top-[20px] lap left-2 text-gray-600 transition-all duration-700  text-sm  absolute  ">
                    Password
                  </span>
                </label>
                <div
                  onClick={showPassword}
                  className=" absolute right-[10px]  top-[20px]"
                >
                  <i className={` ${eyeToShow} text-[#9B76ED] text-md `}></i>
                </div>
              </div>

              <div className="flex  flex-col sm:flex-row items-center gap-4 sm:gap-10">
                <button
                  type="button"
                  className="btn px-12 py-3 text-xs hover:scale-105 transition-all uppercase  tracking-wider duration-300"
                >
                  {" "}
                  login
                </button>
                <p className="text-[15px] text-[#888]">
                  Don't have account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      handelShowSingUpModel();
                      handelHideLogInModel();
                    }}
                    className="text-[#9B76ED] cursor-pointer hover:text-[#0056b3] transition-color duration-300"
                  >
                    SingUp
                  </button>
                </p>
              </div>
              <div className="header-bg p-6 space-y-4 ">
                <p className="text-center text-[15px] text-white ">
                  Signup with other account
                </p>
                <div className=" flex gap-2 justify-center items-center ">
                  <a
                    href="#"
                    className="rounded-full bg-white w-7 h-7 flex justify-center items-center"
                  >
                    <i className="fa-brands fa-facebook-f text-xs text-[#9B76ED]"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white w-7 h-7 flex justify-center items-center"
                  >
                    {" "}
                    <i className="fa-brands fa-twitter text-xs text-[#9B76ED]"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white w-7 h-7 flex justify-center items-center"
                  >
                    <i className="fa-brands fa-google-plus-g text-xs text-[#9B76ED]"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white w-7 h-7 flex justify-center items-center"
                  >
                    <i className="fa-brands fa-instagram text-xs text-[#9B76ED]"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white w-7 h-7 flex justify-center items-center"
                  >
                    <i className="fa-brands fa-linkedin-in text-xs text-[#9B76ED]"></i>
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </>
  );
}
