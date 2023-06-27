import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import signup from "../../../imgs/signup.svg";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  // const OtpButtonClick = () => {
  //   navigate("/otp_verification");
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
    var Url="http://127.0.0.1:8000/user/issue_otp"
    fetch(Url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",

        },
        body: JSON.stringify({
          name:data,
        }),
    })
    
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Handle the data returned from the API
        console.log(data); // You can do whatever you want with the data here
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });
    alert('Submitted')
    navigate("/otp_verification")
    }
    
  // console.log(errors);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main-signup inset-0 opacity-100 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col justify-center md:w-1/2 m-2 p-4">
          <img src={signup} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/2 m-2 p-4">
          <pre>{JSON.stringify(userInfo, undefined)}</pre>
          <h1 className="text-2xl"></h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <div className=" my-4">
                <label
                  htmlFor="username"
                  className="text-xl font-semibold mb-1"
                >
                  Name
                </label>
                <br />
                <input
                  className="inputs"
                  type="text"
                  placeholder="Enter your name"
                  name="username"
                  {...register("username", { required: true })}
                />
                <p>{errors.username && "Username is required."}</p>
              </div>

              <div className="input-div my-4">
                <label htmlFor="email" className="text-xl font-semibold mb-1">
                  Email
                </label>
                <br />
                <input
                  className="inputs"
                  type="email"
                  placeholder="name@email.com"
                  name="email"
                  {...register("email", { required: true })}
                />
                <p>{errors.email && "Email is required."}</p>
              </div>

              <div className="input-div my-4">
                <label
                  htmlFor="password"
                  className="text-xl font-semibold mb-1"
                >
                  Password
                </label>
                <br />
                <input
                  className="inputs"
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password", { required: true })}
                />
                <p>{errors.password && "Password is required."}</p>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type=""
                  className="mt-2 font-semibold bg-green-500 text-black"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default SignUpForm;
