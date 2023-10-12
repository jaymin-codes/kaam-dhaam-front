// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
function PopupCompany({ show, handleClose,appdata }) {
  return (
    <div>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          show ? "" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black opacity-40"
          onClick={handleClose}
        />
        <div className="flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-[600px] relative">
            <button
              className="absolute top-0 right-0 p-2 pt-0 mb-2 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {appdata.map((item) => (
              <React.Fragment key={item.id}>
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
                </React.Fragment>
            ))}

             


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupCompany;
