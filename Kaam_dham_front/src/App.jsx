// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "./components/Pages/Welcome-Page/WelcomePage";
import SignUpPage from "./components/Pages/SignUp-Student/SignUpPage";
import SignUpPageCo from "./components/Pages/SignUp-Company/SignUpPageCo";
import LoginPage from "./components/Pages/Login-Page/LoginPage";
import ProfileStudent from "./components/Pages/Profile-Student/ProfileStudent";
import OtpVerif from "./components/Pages/OTP-verification/otpVerif";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/signUp_Student" element={<SignUpPage />} />
          <Route path="/signUp_Company" element={<SignUpPageCo />} />
          <Route path="/otp_verification" element={<OtpVerif />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile_student" element={<ProfileStudent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
