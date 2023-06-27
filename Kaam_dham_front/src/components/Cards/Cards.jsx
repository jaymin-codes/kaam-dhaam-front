/* eslint-disable no-unused-vars */
import React from "react";
import earn from "../../imgs/earn.svg";
import experience from "../../imgs/experience.svg";
import exposure from "../../imgs/exposure.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import "./Cards.css";

function Cards() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
      className="cards flex flex-col md:flex-row  justify-center items-center p-10 bg-[#5fc2ef]"
    >
      <motion.div
        initial={{ opacity: 0, translateY: 80 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Card
          style={{ width: "18rem" }}
          className="card-shadow md:mx-16 m-5 p-2 flex justify-center items-center"
        >
          <Card.Img
            variant="top"
            src={experience}
            className="w-[200px] h-[180px]"
          />
          <Card.Body>
            <Card.Title className="text-2xl">Experience.</Card.Title>
            <Card.Text>
              Gain some real life experience of the skills you learned and
              developed.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 80 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
      <Card
        style={{ width: "18rem" }}
        className="card-shadow md:mx-16 m-5 p-2 flex justify-center items-center"
      >
        <Card.Img
          variant="top"
          src={exposure}
          className="w-[200px] h-[180px]"
        />
        <Card.Body>
          <Card.Title className="text-2xl">Exposure.</Card.Title>
          <Card.Text>
            Grab the chance to get exposed to market and real world
            applications.
          </Card.Text>
        </Card.Body>
      </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 80 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
      <Card
        style={{ width: "18rem" }}
        className="card-shadow md:mx-16 m-5 flex justify-center items-center p-2"
      >
        <Card.Img variant="top" src={earn} className="w-[200px] h-[180px]" />
        <Card.Body>
          <Card.Title className="text-2xl">Earn.</Card.Title>
          <Card.Text>
            Its always good to have a earn some money as a student and support
            your own education.
          </Card.Text>
        </Card.Body>
      </Card>
      </motion.div>
    </motion.div>
  );
}

export default Cards;
