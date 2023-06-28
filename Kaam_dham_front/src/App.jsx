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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile_student" element={<ProfileStudent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
