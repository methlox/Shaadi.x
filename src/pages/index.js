import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Matches from "../components/Matches";
import Discover from "../components/Discover";
import Contribute from "../components/Contribute";
import { contri } from "../components/Contribute/Data";
import Footer from "../components/Footer";
const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Matches />
      <Discover />
      <Contribute {...contri} />
      <Footer />
    </>
  );
};

export default Home;
