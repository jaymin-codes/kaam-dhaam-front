import NavBar from "../../Navbar/Navbar";
import { useState ,useEffect} from "react";
import { Button } from "react-bootstrap";
import "./OtpVerif.css";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// import { useForm } from "react-hook-form";

function OtpVerif() {

  
  const [otp, setOtp] = useState("");
  const [pdata,setdata]=useState({})
  const navigate = useNavigate();
  const location = useLocation();
  const receivedDictionary = location.state?.data || {};
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/\D/g, "").slice(0, 4);
    setOtp(numbersOnly);
    
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (receivedDictionary["otp"]===otp){
      var Url=window.API_PREFIX+"user/register_user"
      fetch(Url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",

        },
        body: JSON.stringify({
          Name:receivedDictionary['old_data']['name']['username'],
          Email:receivedDictionary['old_data']['name']['email'],
          Password:receivedDictionary['old_data']['name']['password']
        }),
    })
    
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Handle the data returned from the API
        if (data["status"] === "1") {
          navigate("/login")

        } else {
          alert(data['message'])
        }
        // You can do whatever you want with the data here
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });
    }
    else{
      alert("Wrond OTP")
    }
  };

  

  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative otp-main flex justify-center items-center h-screen">
          <div className="otp-inside flex flex-col items-center justify-center h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
            <form onSubmit={onSubmit} >
              <h1 className="p-3 text-3xl md:text-4xl font-bold">Kaam-Dhaam</h1>
              <p className="text-center text-lg pb-3">
                Check your email for OTP
              </p>
              <div className="text-center">
                <input
                  className="otp-input text-center"
                  type="text"
                  value={otp}
                  onChange={handleInputChange}
                  maxLength={4}
                  name="OTP"
                />
              </div>
              <div className="flex items-center justify-center pt-4">
                <Button
                  type="submit"
                  className="w-[90px] h-[35px] text-md font-semibold bg-green-500 text-black"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default OtpVerif;
