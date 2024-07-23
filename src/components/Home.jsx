import React from "react";
import Navbar from "./navbar";
import Self from "./Self";
import Aboutme from "./Aboutme";
import Experience from "./Experience";
import Language from "./Language";
import Achievements from "./Achievements";
import Projects from "./Projects";
import F from "./f";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Self />
      <Aboutme />
      <Language />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <F />
    </div>
  );
};

export default Home;
