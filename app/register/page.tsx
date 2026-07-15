"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaLock ,FaEyeSlash , FaEye} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "@/components/ui/Button";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ShowconfirmPassword , setShowconfirmPassword] = useState(false)
    const [formData , setFormData]=useState({
        name : '',
        email : '',
        password : '',
        confirmPassword : ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
           
        })
    }
    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            alert("Password does not match")
            return
        }
        console.log(formData)
    }
  return (
    <div className="h-full w-full bg-[#eaf2ea]">
      <div className=" sm:w-full md:w-[30%] m-auto">
        <h2 className="text-3xl text-center mt-9 capitalize text-black ">sing up</h2>
        <div className="mt-10 mb-7">
          <Image className="m-auto" alt="logo_img" src="/img/logo.png" width={200} height={200}  priority />
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
                  value={formData.name}
                  onChange={handleChange}
                className="w-full rounded-lg border p-3 pl-10 outline-none focus:border-blue-500 bg-white text-black"
              />
            </div>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                className="w-full rounded-lg bg-white border p-3 pl-10 outline-none text-black focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a Password"
                  value={formData.password}
                  onChange={handleChange}
                className="w-full rounded-lg border p-3 pl-10 outline-none bg-white text-black focus:border-blue-500"
              />
                <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#318130]" />

              <input
                type={ShowconfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                className="w-full rounded-lg border p-3 pl-10 outline-none bg-white text-black focus:border-blue-500"
              />

               <button
              type="button"
              onClick={() =>setShowconfirmPassword (!ShowconfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {ShowconfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
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
