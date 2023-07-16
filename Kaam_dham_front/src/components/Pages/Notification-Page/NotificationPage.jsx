// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBarInside from "../../NavbarInside/NavBarInside";
import { motion } from "framer-motion";

function NotificationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <NavBarInside />
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl">No notifications</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default NotificationPage;
