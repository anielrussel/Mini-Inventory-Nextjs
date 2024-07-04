"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

import { HiOutlineUser } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };
  return (
    <div className="grid place-content-center">
      <section className="border border-gray-800 p-10 rounded-md min-w-[400px]">
        <h1 className="text-center text-4xl font-semibold text-gray-800">
          Login
        </h1>
        <article className="flex flex-col gap-3 mt-10">
          <label htmlFor="username">Username</label>
          <span className="flex items-center gap-2  border-b border-gray-400 pb-2">
            <HiOutlineUser size={25} color="gray" />
            <input
              type="text"
              id="username"
              placeholder="Type your username"
              className="outline-none"
            />
          </span>
          <label htmlFor="password" className="mt-5">
            Password
          </label>
          <span className="flex items-center gap-2  border-b border-gray-400 pb-2">
            <IoLockClosedOutline size={25} color="gray" />
            <input
              type="password"
              id="password"
              placeholder="Type your password"
              className="outline-none"
            />
          </span>
          <Link href={"/forgot_password"} className="text-end text-gray-400">
            Forgot Password?
          </Link>
          <button
            type="submit"
            onClick={handleLogin}
            className="border border-gray-800 rounded-full py-2 mt-10"
          >
            LOGIN
          </button>
        </article>
        <article className="flex flex-col items-center text-center mt-16 gap-5">
          <h1 className="text-sm text-gray-400">Or Sign Up Using</h1>
          <span className="flex items-center gap-4">
            <FaFacebook size={40} className="text-blue-900" />
            <FaTwitter size={40} className="text-blue-400" />
            <FcGoogle size={40} />
          </span>
        </article>
        <h1 className="text-sm text-gray-400 text-center mt-16">
          Or Sign Up Manually
        </h1>
      </section>
    </div>
  );
};

export default Login;
