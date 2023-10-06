// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
function ApplyPopup({ show, handleClose,itemId }) {
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleBidSubmit = () => {
    bidsubmit();
    const submittedBidAmount = bidAmount;
    console.log(submittedBidAmount);
    console.log(itemId)
    if (submittedBidAmount > 0) {
      toast.success("Good luck with your bid!");
    }
    else{
      toast.error("Please enter bid!")
    }
    
    setBidAmount("");
    handleClose();
  };
  const bidsubmit=async () =>{
    var Url = window.API_PREFIX + "job/apply_bid";
    fetch(Url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("SToken"),
        id: itemId,
        Amount: bidAmount        
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the data returned from the API
        if (data["status"] === "1") {
          console.log("sucess");
        } else {
          alert(data["message"]);
        }
        // You can do whatever you want with the data here
      });
  }
  return (
    <div>
      <Toaster />
      <div
        className={`fixed inset-0 flex items-center justify-center z-20 ${
          show ? "" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black opacity-40"
          onClick={handleClose}
        />
        <div className="flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-[400px] relative">
            <button
              className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p className="text-lg font-semibold mb-2">Bid for the Gig</p>
            <p className="mb-4">Enter your bid amount:</p>
            <input
              type="number"
              placeholder="Enter your bid"
              className="border rounded px-3 py-2 mb-4 w-full"
              min="0"    
              step="200"
              value={bidAmount}
              onChange={handleBidChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              onClick={handleBidSubmit}
            >
              Submit Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyPopup;
