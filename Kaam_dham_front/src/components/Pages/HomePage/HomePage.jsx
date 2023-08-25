// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import NavBarInside from "../../NavbarInside/NavBarInside";
import Button from "react-bootstrap/esm/Button";
import { motion } from "framer-motion";
import Select from "react-select";
import ApplyPopup from "./ApplyPopup";


const gigArea = [
  { value: "computer", label: "Computer Engg" },
  { value: "electircal", label: "Electrical Engg" },
  { value: "civil", label: "Civil Engg" },
  { value: "mechanical", label: "Mechanical Engg" },
  { value: "medical", label: "Medical" },
  { value: "administrative", label: "Administrative" },
];

function HomePage() {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [id, setid] = useState("");

  // popup section
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    var Url = window.API_PREFIX + "job/show_job";
    fetch(Url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("SToken"),
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the data returned from the API
        if (data["status"] === "1") {
          setData([...data["job"]]);
          console.log(data["job"]);
        } else {
          alert(data["message"]);
        }
        // You can do whatever you want with the data here
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <NavBarInside />

        <div className="flex flex-row p-2">

          <div className="flex flex-row p-2 bg-gray-100 w-1/5">
            <div className="w-full bg-white rounded shadow-md p-4">
              <div className="h-full flex flex-col">
                <h1 className="text-xl font-semibold mb-4">Filters</h1>
                <div className="mb-4">
                <h1 className="text-md mb-2">Time Duration</h1>
                <div className="mb-2">
                  <label className="inline-flex items-center">
                    <input type="radio" name="time" className="form-radio" />
                    <span className="ml-2">Weekly</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="time" className="form-radio" />
                    <span className="ml-2">Monthly</span>
                  </label>
                </div>
                </div>
                
                <div className="w-full">
                  <h1 className="text-md mb-2">Gig Area</h1>
                  <div>
                    <Select options={gigArea} />
                  </div>
                </div>
              </div>
            </div>
            {/* Rest of your content */}
          </div>

          {/* post area */}
          <div
            className="w-3/5 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 4rem - 4px)" }}
          >
            {/* posts will come here */}
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full p-2 mt-2"
                >
                  <div className="p-2 bg-white rounded shadow-md">
                    <h1 className="text-xl font-semibold mb-2">
                      {item.CompanyName}
                    </h1>
                    <h2 className="text-lg font-medium mb-1">{item.Title}</h2>
                    <p className="text-gray-600 mb-2">{item.Description}</p>
                    <p className="mb-1">
                      <span className="text-gray-800 font-semibold">
                        Eligibility :
                      </span>{" "}
                      {item.Eligibilty}
                    </p>
                    <p className="mb-1">
                      <span className="text-gray-800 font-semibold">
                        Skills :
                      </span>{" "}
                      {item.Skills}
                    </p>
                    <p className="mb-1">
                      <span className="text-gray-800 font-semibold">
                        Duration :
                      </span>{" "}
                      {item.Duration}
                    </p>
                    <p className="font-semibold">
                      Stipend :{" "}
                      <span className="text-green-600">{item.Budget}</span>
                    </p>

                    <Button
                      className="bg-green-500 mt-2 text-lg w-[100px] h-[35px] flex items-center justify-center"
                      onClick={() => {
                        setid(item.id);
                        handleOpenPopup();
                        console.log(item.id);
                      }}
                    >
                      Apply
                    </Button>
                    <ApplyPopup
                      show={showPopup}
                      handleClose={handleClosePopup}
                    />
                  </div>
                </motion.div>

                <hr />
              </React.Fragment>
            ))}
          </div>

          <div className="w-1/5">
            <div className="h-full flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
