import React from "react";
import NavBar from "./lab1_layout/components/NavBar";
import Hero from "./lab1_layout/components/Hero";
import Mentor from "./lab1_layout/components/Mentor";
import Freelance from "./lab1_layout/components/Freelance";
import Hiring from "./lab1_layout/components/Hiring";
import DevelopersSection from "./lab1_layout/components/Developers";
import Footer from "./lab1_layout/components/Footer";
import Appbar from "./lab2_layout/components/Appbar";
import CategoryNavbar from "./lab2_layout/components/CategoryNavbar";
import IamgesSection from "./lab2_layout/components/IamgesSection";
import SectionsList from "./lab2_layout/components/SectionsList";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <>
    <Typography variant='h3' component={"p"} textAlign={"center"} py={3} sx={{ backgroundColor: "black", color: "white"}}>Here is first layout, Scroll down to see the second one 👇🏼</Typography>
    {/* Lab 1 Layout */}

      <NavBar />
      <Hero />
      <Mentor />
      <Freelance />
      <Hiring />
      <DevelopersSection />
      <Footer />
      {/* Lab 2 Layout */}
      <Appbar />
      <CategoryNavbar />
      <IamgesSection />
      <SectionsList />
    </>
  );
};

export default App;
