// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "../src/components/Pages/Welcome-Page/WelcomePage"
import SignUpPage from "../src/components/Pages/SignUp-Student/SignUpPage";
import SignUpPageCo from "../src/components/Pages/SignUp-Company/SignUpPageCo";
import LoginPage from "../src/components/Pages/Login-Page/LoginPage";
import ProfileStudent from "../src/components/Pages/Profile-Student/ProfileStudent";
import OtpVerif from "../src/components/Pages/OTP-verification/otpVerif";
import DetailsStudent from "./components/Pages/Details-Student/DetailsStudent";
import DetailsCompany from "./components/Pages/Details-Company/DetailsCompany";
import HomePage from "./components/Pages/Homepage/HomePage";
import NotificationPage from "./components/Pages/Notification-Page/NotificationPage";
import SearchPage from "./components/Pages/Search-Page/SearchPage";
import Otp from "./components/Pages/Otp-company/Otp";
import HomePageCompany from "./components/Pages/HomePage-Company/HomePageCompany";
import NotificationPageCompany from "./components/Pages/NotificationPage-Company/NotificationPageCompany";
import SearchPageCompany from "./components/Pages/SearchPage-Company/SearchPageCompany";
import Viewbid from "./components/Pages/HomePage-Company/Viewbid";

window.API_PREFIX = 'http://localhost:8000/'
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/signUp_Student" element={<SignUpPage />} />
          <Route path="/signUp_Company" element={<SignUpPageCo />} />
          <Route path="/otp_verification" element={<OtpVerif />} />
          <Route path="/otp_company" element={<Otp />} />

          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile_student" element={<ProfileStudent />} />
          <Route path="/registrationdata" element={<DetailsStudent />} />

          {/* new changes  */}
          <Route path="/registrationdataCompany" element={<DetailsCompany />} />
          <Route path="/Home_Page" element={<HomePage />} />
          <Route path="/Notification_Page" element={<NotificationPage />} />
          <Route path="/Search_Page" element={<SearchPage />} />

          <Route path="/HomePage_Company" element={<HomePageCompany />} />
          <Route path="/Notification_Company" element={<NotificationPageCompany />} />
          <Route path="/SearchPage_Company" element={<SearchPageCompany />} />
          <Route path="/viewbid" element={<Viewbid />} />


        </Routes>
      </div>
    </>
  );
}

export default App;
