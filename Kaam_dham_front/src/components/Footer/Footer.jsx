/* eslint-disable no-unused-vars */ 
import React from 'react'
import '../Footer/Footer.css'
import facebook from '../../imgs/facebook.png'
import instagram from '../../imgs/instagram.png'
import linkedin from '../../imgs/linkedin.png'
import Button from "react-bootstrap/esm/Button";
import { motion } from 'framer-motion'


function Footer() {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
    <div className="main flex flex-col md:flex-row justify-center items-center">
      <div className="footer-sections flex flex-col justify-center items-center md:w-1/3 md:h-[250px] h-[150px] w-[300px]">
        <h1 className="text-2xl font-semibold">Kaam-Dhaam</h1>
        <div className="flex flex-row justify-center">
          <img src={facebook} alt="" className="social-logos"/>
          <img src={instagram} alt="" className="social-logos"/>
          <img src={linkedin} alt="" className="social-logos"/>
        </div>
      </div>
      <div className="footer-sections flex justify-center items-center flex-col md:w-1/3 md:h-[250px] h-[150px] w-[300px]">
        <h1 className="text-2xl font-semibold p-2">Get Latest Updates</h1>
        <input type="email" className="border border-black w-[60%] m-2"/>
        <Button className='mt-2 font-semibold bg-green-500 text-black'>Submit</Button>
      </div>
      <div className="footer-sections flex justify-center items-center md:w-1/3 md:h-[250px] h-[150px] w-[300px]">
        <div className="flex- flex-col justify-center">
          <h1 className="text-2xl font-semibold text-center p-2">Contact</h1>
          <h1 className="m-2">Email : kaam-dhaam@gmail.com</h1>
          <h1 className="m-2">Phone : 741852963</h1>
          <h1 className="m-2">Address : vadodara,gujarat</h1>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Footer;
