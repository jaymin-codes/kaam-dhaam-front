import React from "react";
import { useState,useEffect } from "react";
import "./Userprofile.css";
import { useNavigate } from 'react-router-dom';


function Userprofile() {
    let navigate = useNavigate()

    return(
        <div className='sidebar_main_division'>
    <div className='sidebar_division'>
      <div className='sidebar_img_profile_main_division'>
      <div className='sidebar_img_profile_division'><img className='sidebar_img_profile' src="src\imgs\student_pro_bg.jpg"></img></div>
      </div>
      <div className='sidebar_profile_person_name'>Raj Kabariya</div>
      <div className='sidebar_location_division'><i class="sidebar_birthdate_icon_cake_location fa-solid fa-location-dot"></i> Surat</div>
    </div>
    <div className={window.location.pathname.includes('/login') ? 'sidebar_dashboard_title_division_active' : "sidebar_dashboard_title_division"}
      onClick={() => {

        navigate('/login')
      }}
      ><i class="fa-solid fa-table-columns me-2"></i> Dashboard</div>
      <div className={window.location.pathname.includes('/login') ? 'sidebar_dashboard_title_division_active' : "sidebar_dashboard_title_division"}
      onClick={() => {

        navigate('/login')
      }}
    ><i class="fa-solid fa-file-invoice-dollar me-2"></i> Book Appointment</div>

    <div className={window.location.pathname.includes('/login') ? 'sidebar_dashboard_title_division_active' : "sidebar_dashboard_title_division"}
      onClick={() => {

        navigate('/login')
      }}
    ><i class="fa-solid fa-gears me-2"></i> Profile Settings</div>
   <div className={window.location.pathname.includes('/login') ? 'sidebar_dashboard_title_division_active' : "sidebar_dashboard_title_division"}
     onClick={() => {

      navigate('/login')
    }}
    ><i class="fa-solid fa-lock me-2" ></i> Change Password </div>
    <div className='sidebar_dashboard_title_division'
      onClick={() => {
        localStorage.clear()
        navigate("/login")
    }}
    ><i class="fa-solid fa-right-from-bracket me-2"></i> Logout </div>
    </div>
    )

}
export default Userprofile;
