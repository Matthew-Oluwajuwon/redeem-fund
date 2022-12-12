import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./view/landing-page";
import Aos from "aos";
import "aos/dist/aos.css";
import { Registration } from "./view/registration";
import { Login } from "./view/login";

export const App = () => {
  useEffect(() => {
    Aos.init({ duration: 600, disable: 'mobile', easing: 'ease-in-sine',
    delay: 100, });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path="/redeem-fund-registration" element={<Registration />} />
        <Route path="/redeem-fund-sign-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
