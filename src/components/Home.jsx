import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <StatsSection />
    </div>
  );
}