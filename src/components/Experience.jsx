import React from "react";
import It from "../images/it-logo.png";

const Experience = () => {
  return (
    <div id="experience" className="md:px-5 lg:px-8 sm:pt-28 pt-16">
      <h2 className="sm:text-6xl text-3xl text-center pb-8 ">My Experience</h2>
      <div className="bg-gray-100 mb-5 pb-11 rounded-lg">
        <div className="flex items-start sm:items-center im ">
          <img src={It} alt="" />
        </div>
        <h3 className="text-2xl sm:text-3xl text-center sm:text-left sm:ml-28 ml-0">
          It Company
        </h3>
        <h4 className="text-xl sm:text-2xl text-center sm:text-left mt-4 sm:ml-28 ml-0">
          React JS Developer
        </h4>
        <p className="sm:text-left text-center text-slate-700/75 mt-4 text-lg sm:ml-28 ml-0">
          • Created Multiple Software Development Projects with their detailed
          Documentation. <br />• Worked with the Dynamic Team.
        </p>
      </div>
    </div>
  );
};

export default Experience;
