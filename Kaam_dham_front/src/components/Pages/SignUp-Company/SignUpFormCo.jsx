import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import signupCo from "../../../imgs/signupCo.svg";
import { useNavigate } from "react-router-dom";

function SignUpFormCo() {

  const navigate = useNavigate();
  const OtpButtonClick = () => {
    navigate("/otp_verification");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [companyInfo, setCompanyInfo] = useState();
  const onSubmit = (data) => {
    setCompanyInfo(data);
    console.log(data);
  };
  // console.log(errors);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="main-signup inset-0 opacity-100 flex flex-col md:flex-row items-center justify-center">
        {/* <div className="content-signup flex flex-col md:flex-row w-full"> */}
        <div className="flex flex-col justify-center md:w-1/2 m-2 p-4">
          <img src={signupCo} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/2 m-2 p-4">
          <pre>{JSON.stringify(companyInfo, undefined)}</pre>
          <h1 className="text-2xl"></h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <div className=" my-4">
                <label
                  htmlFor="companyname"
                  className="text-xl font-semibold mb-1"
                >
                  Company Name
                </label>
                <br />
                <input
                  className="inputs"
                  type="text"
                  placeholder="Company name"
                  name="companyname"
                  {...register("companyname", { required: true })}
                />
                <p>{errors.companyname && "Company name is required."}</p>
              </div>

              <div className="input-div my-4">
                <label htmlFor="companyemail" className="text-xl font-semibold mb-1">
                  Email
                </label>
                <br />
                <input
                  className="inputs"
                  type="email"
                  placeholder="companyname@email.com"
                  name="companyemail"
                  {...register("companyemail", { required: true })}
                />
                <p>{errors.companyemail && "Email is required."}</p>
              </div>

              <div className="input-div my-4">
                <label
                  htmlFor="companypass"
                  className="text-xl font-semibold mb-1"
                >
                  Password
                </label>
                <br />
                <input
                  className="inputs"
                  type="password"
                  placeholder="Password"
                  name="companypass"
                  {...register("companypass", { required: true })}
                />
                <p>{errors.companypass && "Password is required."}</p>
              </div>
              <div className="flex items-center justify-center">
                  <Button onClick={OtpButtonClick} className="mt-2 font-semibold bg-green-500 text-black">
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

export default SignUpFormCo;
