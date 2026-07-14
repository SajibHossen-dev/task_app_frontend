"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaLock, FaUserPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { link } from "fs";
import Button from "@/components/ui/Button";

const RegisterPage = () => {
  return (
    <div className="h-full w-full bg-[#eaf2ea]">
      <div className=" sm:w-full md:w-[30%] m-auto">
        <h2 className="text-3xl text-center mt-9 capitalize text-black ">sing up</h2>
        <div className="mt-10 mb-7">
          <Image className="m-auto" src="/img/logo.png" width={200} height={200} />
        </div>
        <div>
          <div className=" flex justify-center gap-5">
            <button className=" px-12 py-1 rounded-2xl cursor-pointer  bg-[#318130]">client</button>
            <button className=" px-12 py-1 rounded-2xl cursor-pointer  bg-[#318130]">tasker</button>
          </div>


          <form className=" flex flex-col gap-3 my-3">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                //   value={formData.name}
                //   onChange={handleChange}
                className="w-full rounded-lg border p-3 pl-10 outline-none focus:border-blue-500 bg-white text-black"
              />
            </div>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                //   value={formData.name}
                //   onChange={handleChange}
                className="w-full rounded-lg bg-white border p-3 pl-10 outline-none text-black focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type="password"
                name="password"
                placeholder="Create a Password"
                //   value={formData.name}
                //   onChange={handleChange}
                className="w-full rounded-lg border p-3 pl-10 outline-none bg-white text-black focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                //   value={formData.name}
                //   onChange={handleChange}
                className="w-full rounded-lg border p-3 pl-10 outline-none bg-white text-black focus:border-blue-500"
              />
            </div>

            <div>
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 h-4 w-4 accent-blue-600 cursor-pointer"
              />

              <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                By creating an account, I accept the Terms of Services, and
                Privacy Policy.
              </label>
            </div>
            <Button
              type="submit"
              
            >
              sing up
            </Button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
