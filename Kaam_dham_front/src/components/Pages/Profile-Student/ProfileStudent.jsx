// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBarInside from "../../NavbarInside/NavBarInside";
import "./ProfileStudent.css";



// WORK IN PROGRESS


function ProfileStudent() {
  return (
    <div>
      <NavBarInside />
      <div className="h-[210px] bg-[#55bbec]"></div>
      <div className="profile absolute mt-[80px] md:mx-[150px] mb-4 top-0 left-0 right-0 bottom-0 flex flex-col">
        <div className="h-1/3">
          <img
            src="src\imgs\student_pro_bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-2/3">
          <div className="user absolute top-[140px] left-0 pl-8">
            <img
              src="src\imgs\student_default_sp.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
          </div>

          <div className=""></div>
          <div className="mt-[40px] pl-8">
            <p>Username</p>
            <p>User designation</p>
          </div>

          {/* Form input */}
          <div>
            <form action="">
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStudent;
