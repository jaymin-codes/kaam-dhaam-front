// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import Multiselect from "multiselect-react-dropdown";
import { motion } from "framer-motion";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import CmpyBg from "../../../imgs/company_home_bg.png";  
import NavBarInsideCmpny from "../../NavbarInsideCmpny/NavbarInsideCmpny";
import PopupCompany from "./PopupCompany";


const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "black",
    borderRadius: "0.5rem",
    borderWidth: "2px",
    // menu: (provided) => ({
    //   ...provided,
    //   zIndex: 0, // Set the desired z-index value
    // }),
  }),
  
};

function Viewbid() {
  

  const [postDetails, setPostDetails] = useState();
  const [skills, setSkills] = useState(null);

  const [selectedArea, setSelectedArea] = useState(null);
  const handleGigArea = (e) => {
    setSelectedArea(e);
    console.log(e);
  };

//popup section
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [skillapi, setApiSkill] = useState([]);


  // eslint-disable-next-line no-unused-vars
  const [id, setid] = useState("");
  useEffect(() => {
    
    getalljob();
    getallskill();
    
  }, []);
  const getalljob=async () =>{
    var Url = window.API_PREFIX + "employer/show_job";
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
  }
  const getallskill=async () =>{
    var Url = window.API_PREFIX + "job/show_skill";
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
          setApiSkill([...data["all_skill"]]);
          console.log(data['all_skill']);
        } else {
          alert(data["message"]);
        }
        // You can do whatever you want with the data here
      });
  }
  // eslint-disable-next-line no-unused-vars
  const [application,setApplication]=useState([]);
  const viewbid=async (id) =>{
    var Url = window.API_PREFIX + "job/view_bid";
    fetch(Url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("SToken"),
        id:id,
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the data returned from the API
        if (data["status"] === "1") {
          setApplication([...data["bids"]]);
          console.log(data['bids']);
        } else {
          alert(data["message"]);
        }
        // You can do whatever you want with the data here
      });
  }
  const handleSelect = (selectedOptions) => {
    setSkills(selectedOptions);
    console.log(selectedOptions);
  };

  const onSubmit = (data) => {
    setPostDetails(data);
    console.log(data);
    console.log(skills);
    console.log(selectedArea)
    var Url = window.API_PREFIX + "job/add_job";
    fetch(Url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("SToken"),
        Title: data["gigTitle"],
        Description: data["gigDescription"],
        GigArea: selectedArea,
        Eligibilty: data["eligibiltyCrit"],
        Duration: data["duration"],
        durationType:data['durationType'],
        Stipend: data["stipend"],
        Skill: skills,
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the data returned from the API
        if (data["status"] === "1") {
          window.location.reload();
        } else {
          alert(data["message"]);
        }
        // You can do whatever you want with the data here
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };
 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-100">
        <NavBarInsideCmpny />

        <div className="flex flex-row container mt-5 ">
          <div
            className="w-1/2 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 4rem - 4px)" }}
          >
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
                      {item.Duration} {item.DurationType}
                    </p>
                    <p className="font-semibold">
                      Field :{" "}
                      <span >{item.Tag}</span>
                    </p>
                    <p className="font-semibold">
                      Stipend :{" "}
                      <span className="text-green-600">{item.Budget}</span>
                    </p>
                    

                    <Button
                      className="bg-green-500 text-lg mt-3 w-[130px] h-[35px] flex items-center justify-center"
                      onClick={() => {
                        setid(item.id);
                        console.log(item.id);
                        viewbid(item.id);
                        
                      }}
                    >
                      View Bid
                    </Button>
                    
                  </div>
                </motion.div>

                <hr />
              </React.Fragment>
            ))}
          </div>
          <div
            className="w-1/2 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 4rem - 4px)" }}
          >
            {application.map((item) => (
              <React.Fragment key={item.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full p-2 mt-2"
                >
                 <div className="p-2 bg-white rounded shadow-md">
                <h2 className="text-lg font-medium mb-1"></h2>
                <p className="text-gray-600 mb-2">
                  <span className="text-gray-800">Name : {item.Username}</span>
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="text-gray-800">Bid : {item.Bid}</span>
                </p>
                <p className="mb-1">
                  <span className="text-gray-800">Email : {item.Email}</span>
                </p>
                <p className="mb-1">
                  <span className="text-gray-800">Contact No : {item.Num}</span>
                </p>
                <p className="mb-1">
                  <span className="text-gray-800">College/University : {item.Collage}</span>
                </p>
              </div>
                </motion.div>

                <hr />
              </React.Fragment>
            ))}
            
          </div>

        
        </div>
      </div>
    </motion.div>
    //make new navbar for comapny side
  );
}

export default Viewbid;
