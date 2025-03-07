import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Mentor from "./components/Mentor";
import Freelance from "./components/Freelance";
import Hiring from "./components/Hiring";
import DevelopersSection from "./components/Developers";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Mentor />
      <Freelance />
      <Hiring />
      <DevelopersSection />
      <Footer />
    </>
  );
};

export default App;
