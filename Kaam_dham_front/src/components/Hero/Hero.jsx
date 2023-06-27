/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import hero_main from "../../imgs/hero_main.svg";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();
  const StudentButtonClick = () => {
    navigate("/signUp_Student");
  };
  const CompanyButtonClick = () => {
    navigate("/signUp_Company")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center p-16">
        <div className="flex justify-center md:w-1/3 pb-10 md:p-0">
          <h1 className="text-5xl md:text-7xl text-center">काम</h1>
        </div>
        <div className="flex justify-center md:w-1/3 pb-10 md:p-0">
          <img src={hero_main} alt="" />
        </div>
        <div className="flex justify-center md:w-1/3 md:p-0">
          <h1 className="text-5xl md:text-7xl text-center">Dhaam</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center pb-5">
        <div className="flex flex-col my-4 md:mx-5 ">
          <h1 className="text-xl text-center pb-2">Search For <b>Work</b></h1>
          <Button
            onClick={StudentButtonClick}
            className="w-[200px] h-[50px] font-semibold text-2xl bg-[#3F51B5] text-white  hover:bg-[#3f51b5df] hover:text-black "
          >
            Get Started
          </Button>
        </div>
        <div className="flex flex-col my-4 md:mx-5 ">
          <h1 className="text-xl text-center pb-2">Search For <b>Talent</b></h1>
          <Button
            onClick={CompanyButtonClick}
            className="w-[200px] h-[50px] font-semibold text-2xl bg-[#3F51B5] text-white  hover:bg-[#3f51b5df] hover:text-black "
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.div>
  );
  //    #5fc2ef
}
export default Hero;
