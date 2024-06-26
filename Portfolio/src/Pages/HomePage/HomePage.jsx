import React from "react";
import Header from "../../layout/Header";
import Banner from "../../layout/Banner";
import About from "../../Components/About";
import Project from "../../Components/Project";
import Educations from "../../Components/Educations";
import Exprience from "../../Components/Exprience/Exprience";

const HomePage = () => {
  return (
    <div className="container mx-auto">
     <Header/>
     <Banner/>
     <About/>
     <Exprience/>
     <Project/>
     <Educations/>
    </div>
  );
};

export default HomePage;
