import React from "react";
import "./App.css";
import CourseCurriclumPage from "./components/CourseCurriclumPage";
import Home from "./components/Home";
import RefundOffer from "./components/RefundOffer";
import CompaniesHiring from "./components/CompaniesHiring";
import CertificatesInternships from "./components/CertificatesInternships";
import InternshipProgram from "./components/InternshipProgram";

const App = () => {
  return (
    <div className="App">
      <Home />
      <CourseCurriclumPage />
      <RefundOffer />
      <CompaniesHiring />
      <CertificatesInternships />
      <InternshipProgram />
    </div>
  );
};

export default App;