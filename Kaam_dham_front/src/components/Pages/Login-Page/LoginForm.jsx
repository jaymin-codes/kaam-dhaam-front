// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const SignUpButtonClick = () => {
    navigate("/");
  }

  const [loginInfo, setLoginInfo] = useState();
  const onSubmit = (data) => {
    setLoginInfo(data);
    var Url=window.API_PREFIX+"user/login"
    fetch(Url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",

        },
        body: JSON.stringify({
          Email:data['loginEmail'],
          Password:data['loginPassword'],
        }),
    })
    
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Handle the data returned from the API
        
        if (data["status"] === "1") {
          console.log(data["Token"])
          localStorage.setItem("SToken", data["Token"]);
          navigate("/profile_student")

        } 
        else if (data["status"] === "0") {
          alert(data['message'])

        } 
        else {
          alert(data['message'])
        }
        // You can do whatever you want with the data here
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });
    
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex md:flex-row flex-col">
        <pre>{JSON.stringify(loginInfo, undefined)}</pre>
        <div
          className="main-form bg-gray-200 h-screen flex justify-center items-center 
      md:w-2/3 w-full p-2"
        >
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <p className="md:text-5xl text-3xl text-center font-extrabold mb-2 p-[10px]">
              Login to your Account
            </p>
            <hr className="mb-10" />

            <div className="p-3">
              <label htmlFor="email" className="labels text-lg">
                Email
              </label>
              <br />
              <input
                type="email"
                name="loginEmail"
                placeholder="Email"
                className="input w-full px-3"
                {...register("loginEmail", { required: true })}
              />
              <p>{errors.loginEmail && "Email is required."}</p>
            </div>

            <div className="p-3">
              <label htmlFor="password" className="labels text-lg">
                Password
              </label>
              <br />
              <input
                type="password"
                name="loginPassword"
                placeholder="Password"
                className="input w-full px-3"
                {...register("loginPassword", { required: true })}
              />
              <p>{errors.loginPassword && "Password is required."}</p>
            </div>

            <div className="text-center">
              <button>
                <Button 
                
                className="mt-2 w-[150px] h-[50px] text-2xl font-semibold bg-green-500 text-black">
                  Log In
                </Button>
              </button>
            </div>
          </form>
        </div>
        
        <div className="side flex justify-center items-center md:w-1/3 w-full md:h-screen h-[250px]">
          <div>
            <h1 className="text-center text-3xl mt-10  md:mb-16 md:mt-0 mb-8 md:text-4xl font-bold">
              New to Kaam-Dhaam
            </h1>
            <h1 className="mb-8 md:mb-16 text-center text-2xl md:text-3xl font-semibold">
              Join Now
            </h1>
            <div className="flex items-center justify-center">
              <button>
                <Button
                onClick={SignUpButtonClick} 
                className="bg-green-500 font-semibold text-2xl w-[160px] h-[50px]">
                  Sign Up
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginForm;
