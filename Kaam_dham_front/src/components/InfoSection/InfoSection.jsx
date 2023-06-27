/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./InfoSection.css";

function InfoSection() {

  return (
    <div className="main-info flex flex-col justify-center items-center p-10"> 
      <motion.div initial={{opacity:0, translateX:-80}} whileInView={{opacity:1,translateX:0}} transition={{duration:1}} className="info-div md:p-3 md:my-3 md:mx-40 p-2 my-3">
        <h1 className="p-2 font-semibold text-2xl">Find Exciting Internship Opportunities</h1>
        <p className="p-2 text-justify sp">
          <p className="font-semibold">Looking for hands-on experience in your field of study?</p>  
          Our platform offers a wide range of internships across various industries. Gain
          real-world insights, apply your theoretical knowledge, and kickstart
          your career with valuable connections. Browse through our curated list
          of internship opportunities and find the perfect fit for your goals.
        </p>
      </motion.div>
      <motion.div initial={{opacity:0, translateX:80}} whileInView={{opacity:1,translateX:0}} transition={{duration:1}} className="info-div md:p-3 md:my-3 md:mx-40 p-2 my-3">
        <h1 className="p-2 font-semibold text-2xl">Expand Your Freelancing Horizons</h1>
        <p className="p-2 text-justify">
          <p className="font-semibold">Ready to unleash your creativity and skills?</p>  
          Our platform empowers you to explore freelancing opportunities and work on exciting projects.Whether you excel in graphic design, web development, content writing,
          or any other field, our diverse pool of clients is eagerly waiting for
          your expertise. Build your portfolio, earn money, and gain invaluable
          experience along the way.
        </p>
      </motion.div>
      <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0}} transition={{duration:1}} className="info-div md:p-3 md:my-3 md:mx-40 p-2 my-3">
        <h1 className="p-2 font-semibold text-2xl">Seamless Integration with Academics</h1>
        <p className="p-2 text-justify">
         <p className="font-semibold">We understand the importance of balancing academics with practical
          experience.</p>
          With Kaam-Dhaam, you can effortlessly find
          part-time internships or freelancing gigs that complement your
          studies. Our platform allows you to schedule your work hours according
          to your availability, ensuring you stay on top of your academic
          commitments while gaining valuable skills.
        </p>
      </motion.div>
    </div>
  );
}

export default InfoSection;
