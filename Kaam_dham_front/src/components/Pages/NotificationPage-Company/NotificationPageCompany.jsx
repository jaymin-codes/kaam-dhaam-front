// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion";
import NavBarInsideCmpny from '../../NavbarInsideCmpny/NavbarInsideCmpny';

function NotificationPageCompany() {
  return (
    <div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <NavBarInsideCmpny />
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl">No notifications</h1>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default NotificationPageCompany
